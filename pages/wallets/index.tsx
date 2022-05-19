import { SunIcon } from '@heroicons/react/outline';
import { WalletsOnboardLayout } from '../../components/layouts/WalletsLayout';
import BetterLink from '../../components/links/BetterLink';

WalletsPage.getLayout = (page: any) => {
    return <WalletsOnboardLayout>{page}</WalletsOnboardLayout>;
};

const features = [
    {
        title: 'Candle Dashboard',
        description:
            'View your crypto assets and transactions in a simple and intuitive way.',
        color: 'green',
        url: '/wallets/dashboard',
    },
    {
        title: 'Candle Wallet',
        description:
            'A wallet that allows you to send and receive crypto assets in a secure way.',
        color: 'blue',
        url: '/about/wallet',
    },
    {
        title: 'Candle Bridge',
        description:
            'Deposit and withdraw funds from your wallet to other networks.',
        color: 'purple',
        url: '/wallets/dashboard/bridge',
    },
    {
        title: 'Candle Staking',
        description: 'Stake your crypto assets to earn rewards.',
        color: 'orange',
        url: '/wallets/dashboard/staking',
    },
];

export default function WalletsPage() {
    const generateFeatures = () => {
        return features.map((feature) => (
            <BetterLink
                key={feature.title}
                href={feature.url}
                className="cursor-pointer shadow-2xl flex h-80 bg-white p-4 rounded-lg flex-col items-center justify-between transition duration-300"
            >
                <div className="text-center text-black font-semibold text-2xl">
                    {feature.title}
                </div>

                <SunIcon className="my-8 w-20 h-20 text-yellow-200" />

                <div className="text-center h-1/2 text-base text-black">
                    {feature.description}
                </div>
            </BetterLink>
        ));
    };

    return (
        <div className="p-8 bg-[#f8f9fa]">
            <div className="cursor-default flex flex-col items-center justify-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-center text-2xl lg:text-4xl font-bold">
                    Getting started with
                </div>
                <div className="px-4 py-2 text-center font-semibold text-lg md:text-2xl rounded-full bg-green-500/20 text-green-300">
                    Candle Wallets
                </div>
            </div>

            <div className="mt-2 text-center text-lg text-black">
                The safe, fast, and secure way to send and receive crypto assets
                on Candle Chain Network.
            </div>

            <div className="mt-8 md:mt-16 lg:mt-32 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {generateFeatures()}
            </div>
        </div>
    );
}
