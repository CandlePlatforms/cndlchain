import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';

interface Props {
    hideHeader?: boolean;
    hideFooter?: boolean;
    children: any;
}

export default function DefaultLayout({ hideHeader, hideFooter, children }: Props) {
    return (
        <>
            {hideHeader || <DefaultHeader />}
            <main className="min-h-screen w-full bg-blue-600 text-white">
                {children}
            </main>
            {hideFooter || <DefaultFooter />}
        </>
    );
}
