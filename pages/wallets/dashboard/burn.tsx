import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

BurnPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function BurnPage() {
    return <div></div>;
}
