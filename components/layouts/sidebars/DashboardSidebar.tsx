import Image from 'next/image';

import {
    ArchiveIcon as OutlinedArchiveIcon,
    RefreshIcon as OutlinedRefreshIcon,
    ScaleIcon as OutlinedScaleIcon,
    SwitchHorizontalIcon as OutlinedSwitchHorizontalIcon,
    SwitchVerticalIcon as OutlinedSwitchVerticalIcon,
    FireIcon as OutlinedFireIcon,
} from '@heroicons/react/outline';

import {
    ArchiveIcon as SolidArchiveIcon,
    RefreshIcon as SolidRefreshIcon,
    ScaleIcon as SolidScaleIcon,
    SwitchHorizontalIcon as SolidSwitchHorizontalIcon,
    SwitchVerticalIcon as SolidSwitchVerticalIcon,
    FireIcon as SolidFireIcon,
} from '@heroicons/react/solid';

import SidebarTab from './SidebarTab';
import { useRouter } from 'next/router';
import BetterLink from '../../links/BetterLink';

interface Props {
    className: string
}

export default function DashboardSidebar({className} : Props) {
    const router = useRouter();

    return (
        <div
            className={`${className} w-full fixed z-50 h-full max-h-full overflow-x-visible border-r bg-white/70 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-800/70 dark:text-white md:bg-white md:dark:bg-zinc-900`}
        >
            <div className="flex h-full max-h-full flex-col justify-between">
                <div className="flex-none">
                    <div className="relative items-center justify-center px-2.5 py-4">
                        <div className="mx-2 mt-2 flex justify-center py-4 md:py-0">
                            <BetterLink href="/" className="w-16 h-16">
                                <Image
                                    width={251}
                                    height={251}
                                    src="/images/logo.png"
                                    alt="Candle logo"
                                />
                            </BetterLink>
                        </div>
                    </div>
                </div>

                <nav
                    id="sidebar-nav"
                    className="place-content-stretch space-y-2 md:grid md:grid-cols-1 h-full overflow-y-auto scrollbar-none"
                >
                    <div className="h-0" />

                    <SidebarTab
                        href="/wallets/dashboard/assets"
                        label="Assets on Candle"
                        currentPath={router.pathname}
                        inactiveIcon={
                            <OutlinedArchiveIcon className="h-5 w-5" />
                        }
                        activeIcon={<SolidArchiveIcon className="h-5 w-5" />}
                    />
                    <SidebarTab
                        href="/wallets/dashboard/bridge"
                        label="Bridge Assets"
                        currentPath={router.pathname}
                        inactiveIcon={
                            <OutlinedRefreshIcon className="h-5 w-5" />
                        }
                        activeIcon={<SolidRefreshIcon className="h-5 w-5" />}
                    />
                    <SidebarTab
                        href="/wallets/dashboard/transactions"
                        label="Transactions"
                        currentPath={router.pathname}
                        inactiveIcon={<OutlinedScaleIcon className="h-5 w-5" />}
                        activeIcon={<SolidScaleIcon className="h-5 w-5" />}
                    />
                    <SidebarTab
                        href="/wallets/dashboard/swap"
                        label="Token Swap"
                        currentPath={router.pathname}
                        inactiveIcon={
                            <OutlinedSwitchHorizontalIcon className="h-5 w-5" />
                        }
                        activeIcon={
                            <SolidSwitchHorizontalIcon className="h-5 w-5" />
                        }
                    />
                    <SidebarTab
                        href="/wallets/dashboard/gas-swap"
                        label="Swap for Gas token"
                        currentPath={router.pathname}
                        inactiveIcon={
                            <OutlinedSwitchVerticalIcon className="h-5 w-5" />
                        }
                        activeIcon={
                            <SolidSwitchVerticalIcon className="h-5 w-5" />
                        }
                    />
                    <SidebarTab
                        href="/wallets/dashboard/burn"
                        label="Burn Candle"
                        currentPath={router.pathname}
                        inactiveIcon={<OutlinedFireIcon className="h-5 w-5" />}
                        activeIcon={<SolidFireIcon className="h-5 w-5" />}
                    />

                    <div className="h-8 md:h-4" />
                </nav>
            </div>
        </div>
    );
}
