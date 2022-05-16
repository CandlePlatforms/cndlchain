import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

WalletAboutPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function WalletAboutPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
