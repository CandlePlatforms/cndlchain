import Image from 'next/image';

export default function LogoIcon() {
    return (
        <Image
            src={'/images/logo.png'}
            alt={'logo'}
            width={48}
            height={48} />
    )
}