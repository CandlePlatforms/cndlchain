import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

BridgePage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function BridgePage() {
    return <div></div>;
}
