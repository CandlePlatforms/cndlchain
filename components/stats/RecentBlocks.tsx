import { useEffect, useState } from 'react';
import { useNetworkStats } from '../../hooks/useNetworkStats';
import CircularLoadingIndicator from '../loaders/CircularLoadingIndicator';
import BlockOverview from './BlockOverview';

export default function RecentBlocks() {
    const { loading, totalBlocks } = useNetworkStats();
    const blocksToDisplay = 9;

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
                            <h1 className="text-3xl font-bold text-zinc-400">
                                No blocks found
                            </h1>
                            <p className="text-lg font-semibold text-zinc-500">
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
        <div>
            <h3 className="my-4 text-lg leading-6 font-medium text-gray-100">
                Recent Blocks
            </h3>

            <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {noData ? (
                    <div className="col-span-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-zinc-400">
                                    Data is not available
                                </h1>
                                <p className="text-lg font-semibold text-zinc-500">
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
        </div>
    );
}
