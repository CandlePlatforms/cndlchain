import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

DocsPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function DocsPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
