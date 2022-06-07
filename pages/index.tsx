import { ChevronRightIcon } from '@heroicons/react/solid';
import DefaultLayout from '../components/layouts/DefaultLayout';
import StatsOverview from '../components/stats/StatsOverview';
import RecentBlocks from '../components/stats/RecentBlocks';
import Link from 'next/link';
import RecentTransactions from '../components/stats/RecentTransactions';
import { useEffect } from 'react';
import { supabase } from '../utils/clients/supabase';
import { useWeb3React } from '@web3-react/core';
import LogRocket from 'logrocket';
LogRocket.init('tkw33l/cndl');

HomePage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function HomePage() {
    useEffect(() => {
        supabase.auth.signOut();
    }, []);
    const { account } = useWeb3React();

    const renderParagraph1 = () => (
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 bg-blue-800 relative mb-60">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-1 lg:gap-8 relative">
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 absolute w-full h-full z-0">
                        <img
                            src="/images/home/shape6.svg"
                            width="130"
                            height="130"
                            className="absolute top-1 right-96 rotate-[90deg] transform-x"
                        />
                        <img
                            src="/images/home/shape6.svg"
                            width="240"
                            height="240"
                            className="absolute top-48 right-0 rotate-[65deg]"
                        />
                        <img
                            src="/images/home/shape6.svg"
                            width="300"
                            height="300"
                            className="absolute top-72 left-0"
                        />
                        <img
                            src="/images/home/wave.svg"
                            width="300"
                            height="300"
                            className="absolute bottom-0 right-0"
                        />
                    </div>
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10">
                        <div className="lg:pt-24 pb-12 flex flex-col item-center">
                            <h1 className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-center mb-10">
                                <span>
                                    A scaleable, efficent place for developers
                                    to build <br />
                                    on web3.
                                </span>
                            </h1>
                            <div className="flex flex-col w-full mb-10">
                                <Link
                                    href={account ? '/wallets' : '/login'}
                                    passHref
                                >
                                    <a className="block text-center py-5 px-32 rounded-md shadow bg-sky-400 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900 ml-auto mr-auto font-bold text-2xl">
                                        Let's Get Started
                                    </a>
                                </Link>
                                <p className="mt-3 text-md text-gray-300 sm:mt-4 text-center mb-6">
                                    By signing up, you agree to our{' '}
                                    <Link href="/terms" passHref>
                                        <a className="font-medium text-white underline italic">
                                            terms of service
                                        </a>
                                    </Link>
                                </p>
                                <img
                                    src="/images/home/down_arrow.svg"
                                    className="h-12"
                                />
                            </div>
                            <p className="mt-3 text-base text-white-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-2xl text-center mb-10">
                                Candle believes in Web3 for all. Candle is a
                                decentralised EVM based scaling platform that
                                enables developers to build scalable user-
                                <br />
                                friendly dApps with zero-to-low transaction fees
                                without ever
                                <br /> sacrificing on security.
                            </p>

                            <Link
                                href={account ? '/wallets' : '/login'}
                                passHref
                            >
                                <a className="text-center py-4 px-12 rounded-md shadow bg-white/[.2] text-white font-medium hover:bg-white/[.5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900 ml-auto mr-auto font-bold text-2xl flex items-center">
                                    Candle Mainnet is open for developers
                                    <img
                                        src="/images/home/icon_btn_next.svg"
                                        className="w-10 ml-5"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/images/home/wave_border1.png"
                className="absolute top-1/1 left-0 w-full"
            />
        </div>
    );

    const renderParagraph2 = () => {
        const list = [
            {
                title: 'Fast & Scalable',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'fast_scalable.svg',
            },
            {
                title: 'Zero-to-Low Gas Fees',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'zero_to_low.svg',
            },
            {
                title: 'Secure',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'secure.svg',
            },
            {
                title: 'Decentralized',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'decentralized.svg',
            },
            {
                title: 'Eco-Friendly',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'eco_friendly.svg',
            },
            {
                title: 'Community Governed',
                description:
                    'Candle believes in Web3 for all. It is a decentralised EVM based scaling platform that enables',
                image: 'community_governed.svg',
            },
        ];
        const states = [
            {
                title: 'Total Blocks',
                value: 1546435,
                description: 'Blocks',
                from: 'from-[#20419A]',
                to: 'to-[#2D59D0]',
            },
            {
                title: 'Avg Blockc Time',
                value: 7.142665,
                description: 'Seconds',
                from: 'from-[#4366B0]',
                to: 'to-[#4BBBEB]',
            },
            {
                title: 'Total Transaction',
                value: 56419,
                description: 'from first 171030 blocks',
                from: 'from-[#4BBBEB]',
                to: 'to-[#74D5FF]',
            },
            {
                title: 'Gas Price',
                value: '0.00',
                description: 'Dollars',
                from: 'from-[#FDC15C]',
                to: 'to-[#EFD199]',
            },
        ];
        return (
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-visible mb-96 relative">
                <div className="mx-auto max-w-7xl lg:px-8 relative overflow-visible mb-32">
                    <div className="mx-8 space-y-8 md:space-y-16 lg:mx-0 mb-20">
                        <h1 className="mt-4 text-4xl tracking-tight font-bold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-center mb-10">
                            <p>
                                What if you{' '}
                                <span className="text-blue-800">
                                    had it all
                                </span>
                                ?
                            </p>
                        </h1>
                    </div>
                    <div className="flex flex-wrap md:grid-cols-1">
                        {list.map((item, index) => (
                            <div className="lg:w-1/2 md:w-full">
                                <div className="flex mb-10">
                                    <div className="rounded-full p-7 bg-gradient-to-b from-[#21429B] via-[#478CCA] to-[#4BB7E8] flex-none">
                                        <img
                                            src={`/images/home/${item.image}`}
                                            className="w-9 h-9"
                                        />
                                    </div>
                                    <div className="ml-5 text-black flex-1">
                                        <p className="text-2xl font-extrabold">
                                            {item.title}
                                        </p>
                                        <p className="text-xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                {index < 4 && (
                                    <div className="bg-gray-300 h-[2px] mx-8 my-10" />
                                )}
                            </div>
                        ))}
                    </div>
                    <img
                        src="/images/home/wave_blue.svg"
                        className="absolute -bottom-40 -right-10 w-1/4"
                    />
                </div>
                <div className="mx-auto max-w-7xl lg:px-8 overflow-visible">
                    <div className="flex">
                        <img
                            src="/images/home/ethereum.svg"
                            className="w-1/4"
                        />
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
                                <p className="text-xl relative">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src="/images/home/wave_border2.png"
                    className="absolute top-1/1 left-0 w-full"
                />
            </div>
        );
    };

    return (
        <>
            {renderParagraph1()}
            {renderParagraph2()}
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
