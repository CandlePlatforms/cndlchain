import Link from 'next/link';

export default function BetterLink({
    label,
    onClick,
    className,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    target,
    children,
}: any) {
    return (
        <Link
            href={href ?? '#'}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
            prefetch={prefetch}
            locale={locale}
        >
            <a className={className} onClick={onClick} target={target}>
                {label ?? children}
            </a>
        </Link>
    );
}
