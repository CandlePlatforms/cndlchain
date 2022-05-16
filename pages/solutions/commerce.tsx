import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

CommerceSolutionPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function CommerceSolutionPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
