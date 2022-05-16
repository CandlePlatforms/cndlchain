import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

SwapPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function SwapPage() {
    return <div></div>;
}
