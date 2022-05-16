import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

StakingPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function StakingPage() {
    return <div></div>;
}
