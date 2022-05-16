interface Props {
    transaction: any;
}

export default function TransactionOverview({ transaction }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success':
                return 'bg-green-500/20 text-green-300';

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
            className="col-span-1 bg-zinc-900/70 rounded-lg shadow divide-y divide-gray-700/50"
        >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 truncate">
                    <div>
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-100 text-sm font-semibold truncate">
                                {getTransactionName(transaction)}
                            </h3>
                            <span
                                className={`capitalize flex-shrink-0 inline-transaction px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(
                                    'success',
                                )}`}
                            >
                                success
                            </span>
                        </div>

                        <div className="mt-2 text-orange-200 text-xs truncate">
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

                    <div className="text-right">
                        <p className="mt-1 text-indigo-200 text-sm truncate">
                            <span className="font-medium text-gray-400">
                                From{' '}
                            </span>
                            {transaction?.from}
                        </p>

                        <p className="mt-1 text-indigo-200 text-sm truncate">
                            <span className="font-medium text-gray-400">
                                To{' '}
                            </span>
                            {transaction?.to ??
                                '0x0000000000000000000000000000000000000000'}
                        </p>
                    </div>

                    <div className="mt-4 col-span-full grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
                        <p className="px-4 py-2 rounded-lg bg-blue-300/10 text-blue-200 text-sm truncate">
                            <span className="font-medium">
                                {getBlockNumber(transaction)}
                            </span>{' '}
                            ({transaction.blockNumber})
                        </p>

                        <p className="px-4 py-2 rounded-lg bg-green-300/10 text-green-200 text-sm truncate">
                            <span className="font-medium">Gas Used: </span>
                            {parseInt(transaction?.gas, 16)}
                        </p>

                        <p className="px-4 py-2 rounded-lg bg-red-300/10 text-red-200 text-sm truncate">
                            <span className="font-medium">Gas Price: </span>
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
