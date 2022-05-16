import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

MarketingSolutionPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function MarketingSolutionPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
