import { useRouter } from 'next/router';
import BetterLink from '../../links/BetterLink';

export default function SidebarTab({
    label,
    href,
    className,
    activeIcon,
    inactiveIcon,
    children,
}: any) {

    const router = useRouter();

    const isActive = router.pathname.startsWith(href);

    const extraCss = isActive
        ? 'text-white bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 dark:hover:bg-zinc-700/40 dark:from-blue-400/50 dark:via-purple-500/50 dark:to-red-500/50'
        : 'hover:bg-blue-100/50 text-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-700/40 hover:text-blue-600 dark:hover:text-white';

    const defaultCss = `group flex cursor-pointer px-4 py-3 mx-4 justify-start items-center text-sm font-semibold space-x-2 rounded-lg dark:text-white transition duration-150`;

    return (
        <BetterLink
            href={href}
            className={`${extraCss} ${defaultCss} ${className}`}
        >
            <button className="w-fit flex space-x-2 items-center rounded-lg">
                {isActive
                    ? activeIcon ?? inactiveIcon ?? children
                    : inactiveIcon ?? children}

                <div className="lg:hidden">{label}</div>
            </button>
            <div className="hidden lg:block">{label}</div>
        </BetterLink>
    );
}
