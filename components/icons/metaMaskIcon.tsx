import Image from 'next/image';

export default function MetaMaskIcon() {
    return (
        <Image
            src={'/images/icons/metamask.svg'}
            alt={'metamask'}
            width={48}
            height={48}/>
    )
}