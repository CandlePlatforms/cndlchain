interface Props {
    transaction: any;
    index: number;
}

export default function TransactionOverview({ transaction, index }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success':
                return 'bg-sky-400 text-white';

            case 'processing':
                return 'bg-yellow-500/20 text-yellow-300';

            case 'failed':
                return 'bg-red-500/20 text-red-300';

            default:
                return 'bg-gray-500/20 text-gray-300';
        }
    };

    const isContractCall = (transaction: any) => {
        return (
            !transaction.to ||
            transaction.from === transaction.to ||
            transaction.to === '0x0000000000000000000000000000000000000000'
        );
    };

    const getTransactionName = (transaction: any) => {
        if (isContractCall(transaction)) return 'Contract Call';
        return 'Transfer transaction';
    };

    const getBlockNumber = (transaction: any) => {
        if (transaction.blockNumber) {
            const number = parseInt(transaction.blockNumber, 16);
            return `Block #${number}`;
        }
        return 'Unknown block';
    };

    return (
        <li
            key={transaction?.id}
            className={`col-span-1 rounded shadow divide-y pb-2 divide-gray-700/50 bg-gradient-to-b from-[#478CCA7F] to-[#4BB7E87F] ${
                index % 2 == 1 ? 'mt-14' : 'mb-14'
            }`}
        >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex justify-between border border-stone-300 border-0 border-b">
                        <div className="items-center">
                            <h3 className="text-white text-xl font-bold truncate">
                                {getTransactionName(transaction)}
                            </h3>

                            <div className="text-white text-lg truncate">
                                {`Recorded at ${new Date(
                                    transaction?.blockData?.timestamp * 1000,
                                ).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',

                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                })}`}
                            </div>
                        </div>
                        <div className="py-5">
                            <span
                                className={`capitalize  px-4 py-2 text-md font-medium rounded-full ${getStatusColor(
                                    'success',
                                )}`}
                            >
                                success
                            </span>
                        </div>
                    </div>

                    <div className="border border-stone-300 border-0 border-b py-2">
                        <p className="mt-1 text-white text-sm truncate">
                            <span className="font-medium block">From </span>
                            {transaction?.from}
                        </p>
                    </div>

                    <div className="border border-stone-300 border-0 border-b py-2">
                        <p className="mt-1 text-white text-sm truncate">
                            <span className="font-medium block">To </span>
                            {transaction?.to ??
                                '0x0000000000000000000000000000000000000000'}
                        </p>
                    </div>

                    <div className="mt-4 col-span-full grid grid-cols-3 gap-4 text-center">
                        <p className="px-4 py-2 rounded-lg bg-blue-300/10 text-blue-200 text-sm truncate">
                            <span className="font-medium block">
                                {getBlockNumber(transaction)}
                            </span>
                            ({transaction.blockNumber})
                        </p>

                        <p className="px-4 py-2 rounded-lg bg-green-300/10 text-green-200 text-sm truncate">
                            <span className="font-medium block">Gas Used</span>
                            {parseInt(transaction?.gas, 16)}
                        </p>

                        <p className="px-4 py-2 rounded-lg bg-red-300/10 text-red-200 text-sm truncate">
                            <span className="font-medium block">Gas Price</span>
                            {`${
                                parseInt(transaction?.gasPrice, 16) / 1000000000
                            } Gwei`}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}
