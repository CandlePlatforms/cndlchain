import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useBlocks } from '../../hooks/useBlocks';
import { useNetworkStats } from '../../hooks/useNetworkStats';
import { supabase } from '../../utils/clients/supabase';
import CircularLoadingIndicator from '../loaders/CircularLoadingIndicator';
import TransactionOverview from './TransactionOverview';

// const defaultTxs = {
//     id: '0xa258df979aa74ba0d521dbe2cd4a0deddff129a5500edce6cc0abe4d5f3d5701',
//     hash: '0xa258df979aa74ba0d521dbe2cd4a0deddff129a5500edce6cc0abe4d5f3d5701',
//     from: '0x546D090bbcEC3d96903d41e38C3436c1C601AF9c',
//     to: '0x6B832F659412d6c3095F6235ef8d7bedc0382606',
//     blockNumber: '0x6f2d',
//     gas: 21000,
//     gasPrice: '0xda3a6d0',
//     blockData: {
//         timestamp: '0x62a0aa56',
//     },
// };

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
        <div className="mx-8 space-y-8 md:space-y-16 lg:mx-0 relative z-10">
            <p className="lg:basis-2/3 md:basis-1/1 text-white text-5xl w-full mb-10 font-bold text-center">
                Check out our recent
                <br />
                <span className="text-6xl font-extrabold">Transactions</span>
            </p>

            <ul
                role="list"
                className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-4 lg:px-10"
            >
                {noData ? (
                    <div className="col-span-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-stone-100">
                                    Data is not available
                                </h1>
                                <p className="text-lg font-semibold text-stone-200">
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
                    recentTransactions.map(
                        (transaction: any, index: number) => (
                            <TransactionOverview
                                key={transaction.hash}
                                transaction={transaction}
                                index={index}
                            />
                        ),
                    )
                )}
            </ul>
            <div className="block text-center h-20 mb-10">
                <Link href="/transactions" passHref>
                    <a className="text-center py-5 px-32 rounded-md shadow bg-sky-400 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900 ml-auto mr-auto font-bold text-2xl">
                        View More
                    </a>
                </Link>
            </div>
        </div>
    );
}
