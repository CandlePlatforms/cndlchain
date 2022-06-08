import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useNetworkStats } from '../../hooks/useNetworkStats';
import CircularLoadingIndicator from '../loaders/CircularLoadingIndicator';
import BlockOverview from './BlockOverview';

export default function RecentBlocks() {
    const { loading, totalBlocks } = useNetworkStats();
    const blocksToDisplay = 3;

    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loading) setNoData(true);
        }, 3000);

        return () => clearInterval(interval);
    }, [loading]);

    const generateRecentBlocks = () => {
        if (!totalBlocks || totalBlocks.length == 0)
            return (
                <div className="col-span-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-stone-900">
                                No blocks found
                            </h1>
                            <p className="text-lg font-semibold text-stone-800">
                                There are no blocks found in the network.
                            </p>
                        </div>
                    </div>
                </div>
            );

        const recentBlocks = [];

        for (
            let blockNumber = totalBlocks;
            blockNumber > totalBlocks - blocksToDisplay && blockNumber > 0;
            blockNumber--
        )
            recentBlocks.push(blockNumber);

        return recentBlocks.map((blockNumber) => (
            <BlockOverview key={blockNumber} number={blockNumber} />
        ));
    };

    return (
        <div className="mx-auto max-w-7xl lg:px-8 relative overflow-visible mt-10 mb-24 relative z-10">
            <p className="text-black text-4xl font-bold w-full text-center mb-10">
                Recent{' '}
                <span className="text-blue-800 font-extrabold">Blocks</span>
            </p>
            <img
                src="/images/home/wave_yellow3.svg"
                className="absolute w-52 right-0 -top-14"
            />
            <img
                src="/images/home/wave_blue.svg"
                className="absolute w-80 left-0 -bottom-5"
            />

            <ul
                role="list"
                className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 mb-20"
            >
                {noData ? (
                    <div className="col-span-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-stone-900">
                                    Data is not available
                                </h1>
                                <p className="text-lg font-semibold text-stone-800">
                                    Could not fetch recent blocks from the
                                    network.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : loading ? (
                    <div className="col-span-full text-center">
                        <CircularLoadingIndicator className="mt-2 w-8 h-8" />
                    </div>
                ) : (
                    generateRecentBlocks()
                )}
            </ul>
            <div className="block text-center h-20 mb-10">
                <Link href="/transactions" passHref>
                    <a className="text-center py-5 px-32 rounded-md shadow bg-sky-400 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900 ml-auto mr-auto font-bold text-2xl">
                        View More
                    </a>
                </Link>
            </div>
            <div className='bg-gray-300 w-full h-[1px]'/>
        </div>
    );
}
