interface Props {
    gasUsedHex: string;
    gasLimitHex: string;
}

export default function GasUsageStats({ gasUsedHex, gasLimitHex }: Props) {
    const gasUsed = parseInt(gasUsedHex || '0', 16);
    const gasLimit = parseInt(gasLimitHex || '0', 16);

    const gasUsedPercent = ((gasUsed / (gasLimit || 1)) * 100).toFixed(3);

    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-green-200">
                    Gas used ({gasUsedPercent}%)
                </span>
                <span className="text-sm font-medium text-orange-200">
                    ({`${gasUsed} / ${gasLimit}`})
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-indigo-400 h-2.5 rounded-full"
                    style={{
                        width: `${gasUsedPercent}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}
