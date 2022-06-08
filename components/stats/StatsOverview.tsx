import { useState } from 'react';
import { useBlocks } from '../../hooks/useBlocks';
import { useNetworkStats } from '../../hooks/useNetworkStats';
import StatisticContainer from './StatisticContainer';

export default function StatsOverview() {
    const { totalBlocks, totalTransactions, updateTotalTransactions } =
        useNetworkStats();
    const { blocks } = useBlocks();

    const [crawling, setCrawling] = useState(false);

    const getAvgBlockTime = () => {
        // If there are no blocks, defaults to 0 second
        if (blocks.length === 0) return 0;

        // remove null blocks
        const filteredBlocks = blocks.filter((block: any) => block);

        // remove block with duplicated number
        const blocksWithoutDuplicates = [
            ...filteredBlocks.map((block: any) => block.number),
        ].map((number) =>
            filteredBlocks.find((block: any) => block.number === number),
        );

        // Get block timestamps, then sort them in ascending order
        const blockTimes = blocksWithoutDuplicates
            .map((block) => ({
                timestamp: parseInt(block.timestamp, 16),
                number: parseInt(block.number, 16),
            }))
            // Sort by number
            .sort((a, b) => b.number - a.number)
            // Filter blocks with number difference not equal to 1
            .filter((block, index, array) => {
                if (index === 0) return true;
                return Math.abs(block.number - array[index - 1].number) == 1;
            })
            // Get block times
            .map((block) => block.timestamp);

        // Calculate the average block time based on block timestamp differences
        // Between current block and previous block
        const totalAvgBlockTime = blockTimes.reduce((acc, _, index) => {
            if (index === 0) return 0;
            return acc + Math.abs(blockTimes[index] - blockTimes[index - 1]);
        }, 0);

        const avgBlockTime = totalAvgBlockTime / (blockTimes.length - 1);

        return (avgBlockTime > 0 ? avgBlockTime : 0).toFixed(6);
    };

    const addBlockWithNumber = async (number: number) => {
        const response = await fetch('/api/blocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                number,
            }),
        });

        // check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    };

    const crawlTransactions = async () => {
        if (crawling) return;

        try {
            setCrawling(true);
            for (
                let i = totalTransactions.latest_block;
                i < totalBlocks;
                i += 10
            ) {
                const block = await addBlockWithNumber(i);
                updateTotalTransactions(block.data);
            }
        } catch (error) {
            console.log(error);
            setCrawling(false);
        }
    };

    const states = [
        {
            title: 'Total Blocks',
            value: totalBlocks,
            description: 'Blocks',
            from: 'from-[#20419A]',
            to: 'to-[#2D59D0]',
        },
        {
            title: 'Avg Blockc Time',
            value: getAvgBlockTime(),
            description: 'Seconds',
            from: 'from-[#4366B0]',
            to: 'to-[#4BBBEB]',
        },
        {
            title: 'Total Transaction',
            value: totalTransactions?.latest_transactions,
            description: `from first ${totalTransactions.latest_block} blocks`,
            from: 'from-[#4BBBEB]',
            to: 'to-[#74D5FF]',
        },
        {
            title: 'Gas Price',
            value:
                totalTransactions?.gas_price != null
                    ? totalTransactions?.gas_price / 1000000000
                    : null,
            description: 'Gwei',
            from: 'from-[#FDC15C]',
            to: 'to-[#EFD199]',
        },
    ];
    return (
        <div className="mx-auto max-w-7xl px-8 overflow-visible mb-20">
            <div className="flex">
                <img src="/images/home/ethereum.svg" className="w-1/4" />
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-stone-800/[.95] sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl mb-10">
                    Candle chain is
                    <br />
                    one of the{' '}
                    <span className="text-blue-800 font-extrabold">
                        best EVM
                    </span>{' '}
                    based
                    <br />
                    scaling platform available!
                </h1>
            </div>

            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
                {states.map((item) => (
                    <div
                        key={item.title}
                        className={`text-center text-white py-10 rounded relative bg-gradient-to-br ${item.from} ${item.to} overflow-hidden`}
                    >
                        <img
                            src="/images/home/shape6.svg"
                            className="w-[70%] absolute -right-10 -bottom-16 rotate-[35deg]"
                            style={{
                                filter: 'contrast(0.5)',
                                opacity: 0.5,
                            }}
                        />
                        <p className="text-2xl font-bold mb-2 relative">
                            {item.title}
                        </p>
                        <p className="text-5xl font-extrabold mb-4 relative">
                            {item.value}
                        </p>
                        <p className="text-xl relative">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-100">
                Overview
            </h3>

            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-zinc-900/70 overflow-hidden shadow md:grid-cols-2">
                <StatisticContainer
                    key="total-blocks"
                    data={{
                        title: 'Total blocks',
                        currentStats: totalBlocks,
                        secondaryText: 'blocks',
                    }}
                />
                <StatisticContainer
                    key="total-transactions"
                    buttonLabel={
                        crawling ? 'Crawling...' : 'Crawl transactions'
                    }
                    onClick={crawlTransactions}
                    data={{
                        title: 'Total transactions',
                        currentStats: totalTransactions?.latest_transactions,
                        previousStats:
                            totalTransactions?.latest_block &&
                            `the first ${totalTransactions.latest_block} blocks`,
                    }}
                />
                <StatisticContainer
                    key="avg-block-time"
                    data={{
                        title: 'Avg. block time',
                        currentStats: getAvgBlockTime(),
                        secondaryText: 'seconds',
                    }}
                />
                <StatisticContainer
                    key="gas-price"
                    data={{
                        title: 'Gas price',
                        currentStats:
                            totalTransactions?.gas_price != null
                                ? totalTransactions?.gas_price / 1000000000
                                : null,
                        secondaryText: 'Gwei',
                    }}
                />
            </dl>
        </div>
    );
}
