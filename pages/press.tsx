import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

PressPage.getLayout = (page: any) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PressPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
