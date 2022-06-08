import { useEffect, useState } from 'react';
import { useBlocks } from '../../hooks/useBlocks';
import { useNetworkStats } from '../../hooks/useNetworkStats';
import { supabase } from '../../utils/clients/supabase';
import CircularLoadingIndicator from '../loaders/CircularLoadingIndicator';
import TransactionOverview from './TransactionOverview';

export default function RecentTransactions() {
    const { getBlockWithNumber } = useBlocks();
    const { loading: statsLoading, totalTransactions } = useNetworkStats();

    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (statsLoading) setNoData(true);
        }, 3000);

        return () => clearInterval(interval);
    }, [statsLoading]);

    const [lastTotalTransactions, setLastTotalTransactions] = useState(0);
    const [recentTransactions, setRecentTransactions] = useState<any>([]);
    const transactionsToDisplay = 10;

    useEffect(() => {
        const generateRecentTransactions = async () => {
            if (
                !totalTransactions ||
                totalTransactions.latest_transactions == 0
            )
                return (
                    <div className="col-span-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-zinc-400">
                                    No transactions found
                                </h1>
                                <p className="text-lg font-semibold text-zinc-500">
                                    There are no transactions found in the
                                    network.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            if (lastTotalTransactions == totalTransactions.latest_transactions)
                return;

            setLastTotalTransactions(totalTransactions.latest_transactions);

            const { data: blocks, error } = await supabase
                .from('blocks')
                .select('*')
                .gt('transaction_count', 0)
                .order('number', {
                    ascending: false,
                })
                .range(0, 9);

            if (error) {
                console.error(error);
                return;
            }

            let total = 0;
            let blocksToFetch = [];

            for (const block of blocks) {
                total += block.transaction_count;
                blocksToFetch.push(block.number);

                if (total > 10) break;
            }

            const blockPromises = blocksToFetch.map(async (blockNumber) => {
                const block = await getBlockWithNumber(blockNumber);
                return block;
            });

            const fetchedBlocks = await Promise.all(blockPromises);
            const validBlocks = fetchedBlocks.filter((block) => block);

            // Extract transactions from each block, then for each transaction,
            // add a 'blockData' property with the block data
            const transactions = [];

            for (const block of validBlocks) {
                for (const transaction of block.transactions) {
                    transaction.blockData = block;
                    transactions.push(transaction);
                }
            }

            const recentTransactions = [];

            for (
                let i = transactions.length - 1;
                i > transactions.length - transactionsToDisplay && i > 0;
                i--
            )
                recentTransactions.unshift(transactions[i]);

            setRecentTransactions(recentTransactions);
            setLoading(false);
        };

        generateRecentTransactions();
    }, [getBlockWithNumber, totalTransactions, lastTotalTransactions]);

    return (
        <div className="mx-8 space-y-8 md:space-y-16 lg:mx-0 relative">
            <p className="lg:basis-2/3 md:basis-1/1 text-white text-5xl w-full mb-10 font-bold text-center">
                Check out our recent
                <br />
                <span className="text-6xl font-extrabold">
                    Transactions
                </span>
            </p>

            <ul role="list" className="grid grid-cols-1 gap-6">
                {noData ? (
                    <div className="col-span-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-zinc-400">
                                    Data is not available
                                </h1>
                                <p className="text-lg font-semibold text-zinc-500">
                                    Could not fetch recent transactions from the
                                    network.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : loading ? (
                    <div className="w-full text-center">
                        <CircularLoadingIndicator className="w-8 h-8" />
                    </div>
                ) : (
                    recentTransactions &&
                    recentTransactions.map((transaction: any) => (
                        <TransactionOverview
                            key={transaction.hash}
                            transaction={transaction}
                        />
                    ))
                )}
            </ul>
        </div>
    );
}
