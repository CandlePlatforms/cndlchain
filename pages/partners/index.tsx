import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

PartnersPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PartnersPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
