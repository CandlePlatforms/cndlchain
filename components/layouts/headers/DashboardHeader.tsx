import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import DashboardSidebar from '../sidebars/DashboardSidebar';

const navigation: Array<any> = [];

interface Props {
    label: string;
    dashboardMode: boolean;
}

export default function DashboardHeader({ label, dashboardMode }: Props) {
    return (
        <Popover as="header" className="relative">
            <div className="bg-zinc-900 py-2 border-b border-zinc-800/80">
                <nav
                    className="relative mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <div className="-mr-2 flex items-center md:hidden">
                                <Link href="/" passHref>
                                    <a>
                                        <span className="sr-only">Candle</span>
                                        <div className="w-16 h-16">
                                            <Image
                                                width={251}
                                                height={251}
                                                src="/images/logo.png"
                                                alt="Candle logo"
                                            />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                           
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-zinc-900 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-zinc-700">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
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

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-zinc-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="h-8 w-auto"
                                    src="/images/logo.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-zinc-900/70 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-700">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                        </div>

                        <div className="pt-5 pb-6">
                            <DashboardSidebar className={''}></DashboardSidebar>
                        </div>

                    </div>
                </Popover.Panel>
            </Transition>

        </Popover>
    );
}
