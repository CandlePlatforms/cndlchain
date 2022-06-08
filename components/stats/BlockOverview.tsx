import { useEffect, useState } from 'react';
import { useBlocks } from '../../hooks/useBlocks';
import { API_URL } from '../../utils/constants';
import GasUsageStats from './GasUsageStats';

interface Props {
    number: number;
}

export default function BlockOverview({ number }: Props) {
    const { addBlock } = useBlocks();

    const [loading, setLoading] = useState(true);
    const [block, setBlock] = useState<any>(null);

    useEffect(() => {
        const fetchBlockWithNumber = async (number: number) => {
            if (!number) {
                console.log('No block number provided');
                return;
            }

            if (block) {
                if (block.number == number) {
                    setLoading(false);
                    return;
                }

                setBlock(null);
            }

            // If number is not a hexadecimal, convert it to one
            if (!number.toString().match(/^0x[0-9a-fA-F]{64}$/))
                number = eval(`0x${number.toString(16)}`);

            // Fetch block
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        jsonrpc: '2.0',
                        method: 'eth_getBlockByNumber',
                        params: [number, true],
                        id: 1,
                    }),
                });

                const data = await response.json();
                const block = data.result;
                if (!block) return;

                // Add block to list
                addBlock(block);

                setBlock(block);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBlockWithNumber(number);
    }, [number, block, addBlock]);

    const getStatusColor = (status: any) => {
        switch (status) {
            case 'mined':
                return 'bg-sky-400 text-white';

            case 'processing':
                return 'bg-yellow-500/20 text-yellow-300';

            case 'failed':
                return 'bg-red-500/20 text-red-300';

            default:
                return 'bg-gray-500/20 text-gray-300';
        }
    };

    const getRelativeTime = (timestamp: number) => {
        if (!timestamp) return '-';

        const now = Date.now();
        const diff = now - new Date(timestamp * 1000).getTime();

        if (diff < 1000) return 'just now';

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (seconds < 60) return `${seconds} seconds ago`;

        if (minutes < 60) return `${minutes} minutes ago`;

        if (hours < 24) return `${hours} hours ago`;

        if (days < 30) return `${days} days ago`;

        if (months < 12) return `${months} months ago`;

        return `${years} years ago`;
    };

    return (
        <li
            key={block?.hash}
            className="col-span-1 bg-white rounded-lg shadow divide-gray-700/50 relative"
        >
            <div className="absolute w-[3px] h-full left-0 top-2 bg-gradient-to-b from-[#3577BD] to-transparent" />
            <div className="absolute w-[3px] h-full right-0 top-2 bg-gradient-to-b from-[#3577BD] to-transparent" />
            <img
                src="/images/home/recent_block_header.svg"
                className="absolute w-full left-0 right-0 top-0"
            />
            <div
                className={`w-full flex items-center justify-between py-6 px-9 space-x-6
                ${loading ? 'opacity-50' : 'opacity-100'}`}
            >
                <div className="flex-1 truncate relative">
                    <div className="flex items-center space-x-3 justify-between mb-14">
                        <h3 className="text-white text-3xl font-semibold truncate flex flex-col">
                            #{parseInt(block?.number, 16) || number}{' '}
                            <span className="text-2xl">
                                ({block?.number ?? `0x${number?.toString(16)}`})
                            </span>
                        </h3>
                        <span
                            className={`capitalize flex-shrink-0 inline-block px-8 py-3 text-md font-bold rounded-full ${getStatusColor(
                                loading ? 'processing' : 'mined',
                            )}`}
                        >
                            {loading ? 'processing' : 'mined'}
                        </span>
                    </div>
                    <div className="text-black">
                        <p className="flex mt-1 font-medium text-sm truncate place-items-center border-solid border-gray-100 border-b-2 py-3">
                            <img
                                src="/images/home/recent_block_tx.svg"
                                className="w-8"
                            />
                            <span className="text-lg flex-auto ml-5">
                                Transactions: {block?.transactions.length || 0}
                            </span>
                        </p>
                        <p className="flex mt-1 font-medium text-sm truncate place-items-center border-solid border-gray-100 border-b-2 py-3">
                            <img
                                src="/images/home/recent_block_time.svg"
                                className="w-8"
                            />
                            <span className="text-lg flex-auto ml-5">
                                {getRelativeTime(block?.timestamp)}
                            </span>
                        </p>
                        <p className="flex mt-1 font-medium text-sm truncate place-items-center border-solid border-gray-100 border-b-2 py-3">
                            <img
                                src="/images/home/recent_block_minted.svg"
                                className="w-8"
                            />
                            <div className="flex-auto ml-5 text-lg">
                                <span className="block">Mined by</span>
                                <span className="block whitespace-normal break-all">
                                    {block?.miner || 'Unknown'}
                                </span>
                            </div>
                        </p>

                        <GasUsageStats
                            gasUsedHex={block?.gasUsed}
                            gasLimitHex={block?.gasLimit}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}
