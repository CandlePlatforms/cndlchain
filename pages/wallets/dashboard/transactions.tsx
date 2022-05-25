import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

TransactionsPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function TransactionsPage() {
    return (
        <div className="bg-white text-black transactions">
            <div className="transactions-content">
                <div data-v-24198911="" class="page-heading header-h2">Transactions</div>
                <div data-v-24198911="" class="page-sub-heading font-body-extra-small">Note: Send transaction is not included in transaction history </div>
                <div className="transactions-body">
                  <div className="tab-list">
                    <div className="tab-list__item font-label-medium tab-list__item--active"> All Transactions </div>
                  </div>
                  <div className="tab-list-seperator-line"></div>
                  <div className="transaction-list transactions-list">
                    <div className="no-transactions">
                      <img height="170" width="170" src="/images/no-transactions.svg" alt="no transactions" />
                      <div className="no-transactions__description font-label-small"> No Transactions </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}
