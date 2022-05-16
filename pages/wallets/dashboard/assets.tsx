import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

AssetsPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function AssetsPage() {
    return <div></div>;
}
