import { ChevronRightIcon } from '@heroicons/react/solid';
import DefaultLayout from '../components/layouts/DefaultLayout';
import StatsOverview from '../components/stats/StatsOverview';
import RecentBlocks from '../components/stats/RecentBlocks';
import Link from 'next/link';
import RecentTransactions from '../components/stats/RecentTransactions';
import { useEffect } from 'react';
import { supabase } from '../utils/clients/supabase';
import { useWeb3React } from '@web3-react/core';

HomePage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function HomePage() {
    useEffect(() => {
        supabase.auth.signOut();
    }, []);
    const { account } = useWeb3React();

    return (
        <>
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                            <div className="lg:py-24">
                                <a
                                    href="https://testdocs.candlelabs.org/docs/develop/network-details/network"
                                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                >
                                    <span className="px-1 md:px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-green-500/40 text-green-200 rounded-full">
                                        Candle Mainnet
                                    </span>
                                    <span className="ml-2 md:ml-4 text-sm">
                                        is open for developers 🎉!
                                    </span>
                                    <ChevronRightIcon
                                        className="ml-2 w-5 h-5 text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a>
                                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                    <span>
                                        A scaleable, efficent place for{' '}
                                    </span>
                                    <span className="text-sky-400">
                                        developers to build on web3.
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-white-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Candle believes in Web3 for all. Candle is a
                                    decentralised EVM based scaling platform
                                    that enables developers to build scalable
                                    user-friendly dApps with zero-to-low
                                    transaction fees without ever sacrificing on
                                    security.
                                </p>
                                <div className="mt-6">
                                    <div className="sm:flex">
                                        <Link
                                            href={
                                                account ? '/wallets' : '/login'
                                            }
                                            passHref
                                        >
                                            <a className="block text-center w-full py-3 px-4 rounded-md shadow bg-sky-500 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900">
                                                Get started
                                            </a>
                                        </Link>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                        By signing up, you agree to our{' '}
                                        <Link href="/terms" passHref>
                                            <a className="font-medium text-white">
                                                terms of service
                                            </a>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={'/images/cloud-illustration-indigo-400.svg'}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 space-y-8 md:space-y-16 lg:mx-0">
                        <StatsOverview />
                        <RecentBlocks />
                        <RecentTransactions />

                        <div className="p-8 bg-zinc-900/70 text-white rounded-lg">
                            <h2 className="text-xl md:text-3xl font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-300 to-red-400">
                                What&apos;s next for Candle?
                            </h2>
                            <p className="mt-2 text-sm md:text-lg text-zinc-300">
                                We&apos;re currently working on a number of
                                features that will be added to the platform in
                                the coming months.
                            </p>
                            <script src="//code.tidio.co/bga3j5sbenpxlnttpeyg1zk2yew5k0ep.js" async></script>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
