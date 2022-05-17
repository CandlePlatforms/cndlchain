import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

TransactionsPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function TransactionsPage() {
    return <div></div>;
}
