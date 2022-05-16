import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

PrivacyPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PrivacyPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
