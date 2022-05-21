import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import CircularLoadingIndicator from '../../components/loaders/CircularLoadingIndicator';
import EcosystemItem from '../../components/stats/EcosystemItem';
import { useEcosystems } from '../../hooks/useEcosystems';

EcosystemsPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function EcosystemsPage() {
    const { loading, ecosystems: integrations } = useEcosystems();
    const [type, setType] = useState<string>('All');

    return (
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-center">
                    <span>The Chosen Solution </span>
                    <br />
                    <span className="text-sky-400">for Scaling Ethereum</span>
                </h1>

                <h3 className="mt-4 text-zinc-300 text-center">
                    Explore some of the hundreds of projects
                    <br />
                    from DeFi to NFTs building on zkSync.
                </h3>

                <div className="text-center mt-3 flex flex-wrap justify-center">
                    <button
                        className={`px-4 py-1 mx-2 rounded hover:bg-gray-700 ${
                            type === 'All' && 'bg-gray-800'
                        }`}
                        onClick={() => setType('All')}
                    >
                        ALL
                    </button>
                    <button
                        className={`px-4 py-1 mx-2 rounded hover:bg-gray-700 ${
                            type === 'Tools' && 'bg-gray-800'
                        }`}
                        onClick={() => setType('Tools')}
                    >
                        TOOLS
                    </button>
                </div>

                <div role="list" className="flex flex-wrap justify-center gap-6 mt-10">
                    {loading ? (
                        <div className="w-full text-center">
                            <CircularLoadingIndicator className="w-8 h-8" />
                        </div>
                    ) : (
                        integrations &&
                        integrations.map((integration: any) => {
                            if (
                                type != 'All' &&
                                integration.type.indexOf(type) == -1
                            )
                                return null;
                            return (
                                <EcosystemItem
                                    key={integration.title}
                                    {...integration}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
