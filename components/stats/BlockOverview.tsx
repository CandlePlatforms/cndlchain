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
                return 'bg-green-500/20 text-green-300';

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
        const diff = now - (new Date(timestamp * 1000).getTime());

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
            className="col-span-1 bg-zinc-900/70 rounded-lg shadow divide-gray-700/50"
        >
            <div
                className={`w-full flex items-center justify-between p-6 space-x-6
                ${loading ? 'opacity-50' : 'opacity-100'}`}
            >
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-blue-300 text-sm font-semibold truncate">
                            #{parseInt(block?.number, 16) || number}{' '}
                            <span className="text-gray-100">
                                ({block?.number ?? `0x${number?.toString(16)}`})
                            </span>
                        </h3>
                        <span
                            className={`capitalize flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(
                                loading ? 'processing' : 'mined',
                            )}`}
                        >
                            {loading ? 'processing' : 'mined'}
                        </span>
                    </div>
                    <p className="mt-1 font-medium text-yellow-200 text-sm truncate">
                        <span className="font-semibold text-orange-200">
                            Transactions:{' '}
                        </span>
                        {block?.transactions.length || 0}
                    </p>

                    <div className="capitalize mt-4 text-indigo-100 text-xs truncate">
                        {getRelativeTime(block?.timestamp)}
                    </div>
                    <p className="mt-1 mb-4 text-blue-200 font-semibold text-xs truncate">
                        <span className="font-medium text-zinc-300">
                            Mined by{' '}
                        </span>
                        {block?.miner || 'Unknown'}
                    </p>

                    <GasUsageStats
                        gasUsedHex={block?.gasUsed}
                        gasLimitHex={block?.gasLimit}
                    />
                </div>
            </div>
        </li>
    );
}
