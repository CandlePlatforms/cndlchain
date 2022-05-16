import { Popover, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation: Array<any> = [];

interface Props {
    label: string;
    dashboardMode: boolean;
}

export default function DashboardHeader({label, dashboardMode} : Props) {
    return (
        <Popover as="header" className="relative">
            <div className="bg-zinc-900 py-4 border-b border-zinc-800/80">
                <nav
                    className="relative mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <div className="-mr-2 flex items-center md:hidden"></div>
                        </div>
                        <div className="hidden space-x-8 md:flex md:ml-10">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-white hover:text-zinc-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link href="/" passHref>
                            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-indigo-500/40 hover:bg-indigo-600 transition duration-300">
                                Switch to Candle
                            </a>
                        </Link>

                        <Link href="#" passHref>
                            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-zinc-800 hover:bg-white/10 transition duration-300">
                                <UserCircleIcon
                                    className="h-8 w-8 mr-2"
                                    aria-hidden="true"
                                />
                                <div>Account 1234</div>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </Popover>
    );
}
