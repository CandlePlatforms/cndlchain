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
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 bg-blue-800 relative">
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
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10 relative">
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
                                        {"Let's Get Started"}
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
            <div className="lg:overflow-visible relative">
                <img src="/images/home/wave_border1.png" className="w-full" />
                <div className="mx-auto max-w-7xl lg:px-8 px-8 relative overflow-visible mb-20">
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
                            <div
                                className="lg:w-1/2 md:w-full"
                                key={item.title}
                            >
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
                <div className="mx-auto max-w-7xl px-8 overflow-visible mb-20">
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
                                <p className="text-xl relative">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="/images/home/wave_border2.png" className="w-full" />
            </div>
        );
    };

    const renderParagraph3 = () => {
        const list = [
            {
                title: 'Candle Dashboard',
                description:
                    'View your crpto assests and transactions in a simple and intuivative way',
                image: 'candle_dashboard.svg',
            },
            {
                title: 'Candle Bridge',
                description:
                    'Deposit and withdraw funds from your wallet to other networks',
                image: 'candle_bridge.svg',
            },
            {
                title: 'Candle Wallet',
                description:
                    'A wallet that allows you to send and receive crypto assets in a secure way',
                image: 'candle_wallet.svg',
            },
            {
                title: 'Candle Staking',
                description: 'Stake your crypto assets to earn rewards',
                image: 'candle_staking.svg',
            },
        ];
        return (
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-visible pb-32 relative bg-blue-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl px-8 relative overflow-visible mb-20">
                    <div className="mx-8 lg:mx-0 mb-2 basis-2/3">
                        <h1 className="mt-4 text-2xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl mb-2">
                            <p>
                                {"Let's get started with"}
                                <br />
                                <span className="xl:text-5xl font-bold flex">
                                    Candle Wallet
                                    <img
                                        src="/images/home/wave_yellow2.svg"
                                        className="w-20 ml-5"
                                    />
                                </span>
                            </p>
                        </h1>
                        <p className="mt-4 text-2xl">
                            The safe, fast, and secure way to send and receive
                            <br />
                            crypto assets on Candle Chain Network.
                        </p>
                    </div>
                    <img
                        src="/images/home/shape6.svg"
                        className="w-64 absolute right-5 top-16 rotate-[40deg]"
                    />
                    <div className="basis-1/3 text-center mt-7 relative py-14">
                        <Link href="/login" passHref>
                            <a className="inline-flex items-center px-12 py-3 border border-transparent text-base font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500 transition duration-300 mb-2">
                                Access Wallet Here
                            </a>
                        </Link>
                        <p className="text-white text-sm text-stone-300">
                            Connect your preffered wallet here
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-8 relative overflow-visible pb-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 relative">
                    {list.map((item) => (
                        <div
                            className="flex bg-gradient-to-b from-[#478CCA7F] to-[#4BB7E87F] rounded p-8"
                            key={item.title}
                        >
                            <img
                                src={`/images/home/${item.image}`}
                                className="w-16 h-16 mt-2 ml-4"
                            />
                            <div className="ml-8 flex-auto">
                                <p className="text-2xl font-bold mb-2">
                                    {item.title}
                                </p>
                                <p>{item.description}</p>
                            </div>
                            <img
                                src="/images/home/icon_btn_next.svg"
                                className="w-10 ml-5 mt-14"
                            />
                        </div>
                    ))}
                    <img
                        src="/images/home/blue_rainbow.svg"
                        className="w-72 absolute -bottom-10 -left-14 z-10"
                    />
                </div>
            </div>
        );
    };

    const renderParagraph4 = () => {
        return (
            <div className="lg:overflow-visible">
                <img src="/images/home/wave_border3.png" className="w-full" />
                <RecentBlocks />
                <div className="mx-auto max-w-7xl px-8 relative overflow-visible mb-14">
                    <div className="flex lg:flex-row flex-col lg:text-left text-center md:items-center">
                        <p className="lg:basis-2/3 md:basis-1/1 text-stone-800 text-6xl font-extrabold w-full mb-10">
                            The Chosen Solution
                            <br />
                            for{' '}
                            <span className="text-blue-800">
                                Scaling Ethereum
                            </span>
                        </p>
                        <img
                            src="/images/home/tenderly.svg"
                            className="lg:basis-1/3 md:basis-1/1 lg:w-48 md:w-2/3"
                        />
                    </div>
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-16">
                        <div>
                            <img src="/images/home/logo_4everland.svg" />
                        </div>
                        <div>
                            <img src="/images/home/logo_nftscan.svg" />
                        </div>
                        <div>
                            <img src="/images/home/logo_standard.svg" />
                        </div>
                        <div>
                            <img src="/images/home/logo_bitkeep.svg" />
                        </div>
                        <div>
                            <img src="/images/home/logo_juno.svg" />
                        </div>
                        <div>
                            <img src="/images/home/logo_viewmore.svg" />
                        </div>
                    </div>
                </div>
                <img src="/images/home/wave_border4.png" className="w-full" />
            </div>
        );
    };

    const renderParagraph5 = () => {
        return (
            <div className="pt-15 sm:pt-16 lg:pt-18 lg:overflow-show bg-blue-800">
                <div className="mx-auto max-w-7xl lg:px-8 relative">
                    <img
                        src="/images/home/shape6.svg"
                        width="130"
                        height="130"
                        className="absolute top-1 right-0 rotate-[100deg] transform-x"
                    />
                    <img
                        src="/images/home/shape6.svg"
                        className="absolute w-56 top-10 left-0 rotate-[100deg] transform-x"
                    />
                    <img
                        src="/images/home/wave_yellow2.svg"
                        className="w-44 absolute right-56 top-10"
                    />
                    <RecentTransactions />
                    <img
                        src="/images/home/blue_rainbow.svg"
                        className="w-72 absolute top-1/3 -right-36 z-10"
                    />
                    <img
                        src="/images/home/wave_yellow3.svg"
                        className="w-44 absolute top-2/3 -left-10"
                    />
                    <img
                        src="/images/home/shape6.svg"
                        className="absolute -bottom-12 -right-16 w-80 rotate-[100deg] transform-x"
                    />
                </div>
            </div>
        );
    };

    const renderParagraph6 = () => {
        return (
            <div className="lg:overflow-show">
                <img src="/images/home/wave_border3.png" className="w-full" />
                <div className="mx-auto max-w-7xl lg:px-8 relative mt-10">
                    <div className="flex flex-col place-items-center">
                        <img
                            src="/images/home/blue_rainbow2.png"
                            className="w-96 mb-5"
                        />
                        <p className="text-stone-800 text-5xl font-extrabold w-full mb-5 text-center">
                            Whats next for the{' '}
                            <span className="text-blue-800">Candle</span>?
                        </p>
                        <p className="text-stone-900 text-3xl font-semibold w-full mb-5 text-center">
                            {"We're currently working on a number of "}
                            <br />
                            features that will be added to the platform in
                            <br /> the coming months.
                        </p>
                    </div>
                </div>
                <img src="/images/home/wave_border2.png" className="w-full" />
            </div>
        );
    };

    return (
        <>
            {renderParagraph1()}
            {renderParagraph2()}
            {renderParagraph3()}
            {renderParagraph4()}
            {renderParagraph5()}
            {renderParagraph6()}
            {/* <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="mx-8 space-y-8 md:space-y-16 lg:mx-0">
                        <StatsOverview />

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
            </div> */}
        </>
    );
}
