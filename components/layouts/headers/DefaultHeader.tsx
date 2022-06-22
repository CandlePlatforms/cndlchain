import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWalletButton from '../../ConnectWalletButton';

const navigations = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Documentation', href: 'https://docs.candlelabs.org' },
    { name: 'Ecosystems', href: '/ecosystems' },
    { name: 'Blog', href: '/blog' },
];

export default function DefaultHeader() {
    const { account } = useWeb3React();

    return (
        <Popover as="header" className="relative">
            <div className="bg-blue-800 pt-4">
                <nav
                    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href="/" passHref>
                                <a>
                                    <span className="sr-only">Candle</span>
                                    <div className="w-16 h-16">
                                        <Image
                                            width={60}
                                            height={60}
                                            src="/images/logo.png"
                                            alt="Candle logo"
                                        />
                                    </div>
                                </a>
                            </Link>
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
                            {navigations.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-white/90 hover:text-zinc-100 transition duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link href="/wallets" passHref>
                            <a className="inline-flex font-semibold items-center text-zinc-200 hover:text-white transition duration-300">
                                Access Wallets
                            </a>
                        </Link>
                        <ConnectWalletButton />
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
                            <div className="px-2 space-y-1">
                                {navigations.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6 px-5">
                                <Link href="/login" passHref>
                                    <a className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                                        Connect a Wallet
                                    </a>
                                </Link>
                            </div>
                            <div className="mt-6 px-5">
                                <p className="text-center text-base font-medium text-zinc-400">
                                    Existing account?{' '}
                                    <Link href="/wallets" passHref>
                                        <a className="text-indigo-300 hover:underline">
                                            Login
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
