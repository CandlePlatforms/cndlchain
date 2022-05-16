import WalletsOnboardHeader from './headers/WalletsOnboardHeader';

export function WalletsOnboardLayout({ children }: any) {
    return (
        <>
            <WalletsOnboardHeader />
            <main className="w-full bg-zinc-800 text-white">{children}</main>
        </>
    );
}
