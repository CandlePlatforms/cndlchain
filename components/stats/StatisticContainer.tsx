import { useEffect, useState } from 'react';
import CircularLoadingIndicator from '../loaders/CircularLoadingIndicator';

export default function StatisticContainer({ data, buttonLabel, onClick }: any) {
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (data?.currentStats == null || data?.currentStats == undefined)
                setNoData(true);
        }, 2000);

        return () => clearInterval(interval);
    }, [data?.currentStats]);

    return (
        <div key={data.title} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-semibold text-gray-100">
                {data.title}{' '}
                {onClick && (
                    <span>
                        <button
                            className="ml-2 px-2 py-0.5 rounded-lg bg-blue-500/30 hover:bg-blue-400/30 text-blue-300 transition duration-300"
                            onClick={onClick}
                        >
                            {buttonLabel ?? 'Button'}
                        </button>
                    </span>
                )}
            </dt>

            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                {noData ? (
                    <div className="text-zinc-400">No data available</div>
                ) : data?.currentStats != null ? (
                    <div className="flex items-baseline text-2xl font-semibold text-blue-200">
                        {data?.currentStats}
                        {data?.currentStats != 0 &&
                            (data?.secondaryText || data?.previousStats) && (
                                <span className="ml-2 text-sm font-medium text-gray-300">
                                    {data?.secondaryText ||
                                        'from ' + data?.previousStats}
                                </span>
                            )}
                    </div>
                ) : (
                    <CircularLoadingIndicator className="mt-2 w-8 h-8" />
                )}
            </dd>
        </div>
    );
}
