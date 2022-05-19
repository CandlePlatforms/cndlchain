import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import Image from 'next/image';

export default function ConnectWalletButton() {
    const { account } = useWeb3React();

    return (
        <Link href="/login" passHref>
            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 transition duration-300">
                {account ? (
                    <div className="inline-flex items-center">
                        <Image
                            className="h-8 w-auto"
                            src={'/images/icons/metamask.svg'}
                            alt={'metamask'}
                            width={24}
                            height={24}
                        />
                        <div className="pl-2">
                            Account {account.substring(2, 6)}
                        </div>
                    </div>
                ) : (
                    'Connect Wallet'
                )}
            </a>
        </Link>
    );
}
