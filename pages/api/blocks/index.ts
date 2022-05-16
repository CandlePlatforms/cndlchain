import { createClient } from '@supabase/supabase-js';
import { API_URL } from '../../../utils/constants';

const handler = async (req: any, res: any) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !serviceKey) {
        res.status(500).json({
            error: 'Missing SUPABASE_SERVICE_KEY or SUPABASE_SERVICE_KEY environment variables',
        });

        return;
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    switch (req.method) {
        case 'POST':
            await generateBlocks(supabase, req, res);
            break;

        default:
            res.status(405).json({
                error: 'Method not allowed',
            });
            break;
    }
};

const generateBlocks = async (supabase: any, req: any, res: any) => {
    try {
        const { data: latestBlock, error: latestBlockError } = await supabase
            .from('blocks')
            .select('number')
            .order('number', {
                ascending: false,
            })
            .range(0, 1)
            .limit(1)
            .single();

        if (latestBlockError)
            return res.status(500).json({
                error: 'Error fetching chain overview',
            });

        if (!latestBlock)
            return res.status(500).json({
                error: 'Chain overview not found',
            });

        const latestBlockNumber = latestBlock.number;

        const blocks = [];

        // fetch the next 10 blocks
        for (let i = latestBlockNumber + 1; i <= latestBlockNumber + 10; i++) {
            const hexNumber = `0x${i.toString(16)}`;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_getBlockByNumber',
                    params: [hexNumber, true],
                    id: 0,
                }),
            });

            const data = await response.json();
            const block = data.result;

            blocks.push(block);
        }

        const promises = blocks.map(async (block) => {
            const { data, error } = await supabase
                .from('blocks')
                .insert({
                    number: parseInt(block.number, 16),
                    hash: block.hash,
                    transaction_count: block.transactions.length,
                })
                .single();

            if (error)
                return res.status(500).json({
                    error: error.message,
                });

            return data;
        });

        const results = await Promise.all(promises);
        const totalTransactions = results.reduce(
            (acc, block) => acc + block.transaction_count,
            0,
        );

        const { data: chainOverviewData, error: chainOverviewError } =
            await supabase
                .from('chain-overview')
                .select('latest_transactions')
                .single();

        if (chainOverviewError)
            return res.status(500).json({
                error: 'Error fetching chain overview',
            });

        if (!chainOverviewData)
            return res.status(500).json({
                error: 'Chain overview not found',
            });

        const { latest_transactions } = chainOverviewData;

        const { data, error: newChainOverviewError } = await supabase
            .from('chain-overview')
            .update({
                latest_block: latestBlockNumber + 10,
                latest_transactions: latest_transactions + totalTransactions,
            })
            .eq('id', 'db7058be-29bf-4216-8243-b41f2e8ef99b')
            .single();

        if (newChainOverviewError)
            return res.status(500).json({
                error: newChainOverviewError.message,
            });

        return res.status(200).json({
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

export default handler;
