import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

PricingPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PricingPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
