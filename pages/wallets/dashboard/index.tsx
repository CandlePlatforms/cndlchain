import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

WalletDashboard.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function WalletDashboard() {
    return <div></div>;
}
