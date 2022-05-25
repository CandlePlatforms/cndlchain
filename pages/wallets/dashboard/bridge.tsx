import Link from 'next/link';

import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

BridgePage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function BridgePage() {
    return (
        <div className="bg-white text-black bridge-page">
            <div className="bridge-content">
                <div className="info-wrapper">
                    <div className="inner-wrapper">
                        <div className="info-header">Candle Bridge</div>
                        <div className="info-description">The safe, fast and most secure way to bring cross-chain assets to Candle chain.</div>
                        <div className="info-extra-links">
                            <Link href="/">
                              <a className="link-button fast-withdraw-button">Fast Withdraw / Deposits</a>
                            </Link>
                            <Link href="/">
                              <a className="link-button">On Ramp Transfers</a>
                            </Link>
                            <Link href="/">
                              <a className="link-button">How it works</a>
                            </Link>
                            <Link href="/">
                              <a className="link-button">FAQ</a>
                            </Link>
                            <Link href="/">
                              <a className="link-button">User guide</a>
                            </Link>
                        </div>    
                    </div>
                    <div className="bottom-section">
                        <img src="/images/bridge-info.png" />
                    </div>
                </div>

                <div className="bridge-wrapper">
                    <div>
                        <div className="bridge-tabs">
                            <div className="bridge-tabs__tab">Deposit</div>
                            <div className="bridge-tabs__tab">Withdraw</div>
                        </div>
                        <div className="bridge-body">
                            <div className="from-label header-h6">From</div>
                            <div className="from-section">
                                <div className="chain-and-balance-details">
                                  <div className="chain-details">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDAwMjQgMTIuMTY4M0wxMS41MjYgMTUuNDMzVjNMNi4wMDAyNCAxMi4xNjgzWiIgZmlsbD0iIzhEOEQ4RCIvPgo8cGF0aCBkPSJNMTEuNTI1OCA5LjY1NTI0TDYgMTIuMTY4M0wxMS41MjU4IDE1LjQzM0wxNy4wNDk0IDEyLjE2ODNMMTEuNTI1OCA5LjY1NTI0WiIgZmlsbD0iIzM5MzkzOSIvPgo8cGF0aCBkPSJNMTEuNTI1NiAzVjE1LjQzM0wxNy4wNDkyIDEyLjE2ODNMMTEuNTI1NiAzWiIgZmlsbD0iIzM0MzQzNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjA0OTIgMTIuMTY4M0wxMS41MjU3IDkuNjU1MjRMMTEuNTI1NiA5LjY1NTI2VjE1LjQzM0wxMS41MjU2IDE1LjQzM0wxNy4wNDkyIDEyLjE2ODNMMTcuMDQ5MiAxMi4xNjgzWiIgZmlsbD0iIzE1MTUxNSIvPgo8cGF0aCBkPSJNNiAxMy4yMTUzTDExLjUyNTggMjFWMTYuNDc5OUw2IDEzLjIxNTNaIiBmaWxsPSIjOEQ4RDhEIi8+CjxwYXRoIGQ9Ik0xMS41MjU2IDE2LjQ3OTlWMjFMMTcuMDUzNiAxMy4yMTUzTDExLjUyNTYgMTYuNDc5OVoiIGZpbGw9IiMzNDM0MzQiLz4KPC9zdmc+Cg==" alt="ethereum chain logo" height="24" width="24" />
                                    <div className="chain-details__chain-name font-label-small"> Ethereum chain </div>
                                  </div>
                                  <div className="balance-details font-label-extra-small">
                                    <span className="balance-details__label"> Balance: </span>
                                    <span className="balance-details__balance has-tooltip" data-original-title="null">0 DAI</span>
                                  </div>
                                </div>

                                <div className="token-and-amount-details">
                                  <div className="token-details">
                                    <img src="https://wallet-asset.matic.network/img/tokens/dai.svg" alt="token icon" height="24" width="24" className="token-details__token-img" />
                                    <div className="token-details__token-name"> Dai - PoS </div>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjA2MDUgMTMuMjMyMkwxNy4zNTM0IDcuOTM5MzRMMTguNzY3NiA5LjM1MzU1TDEyLjA2MDUgMTYuMDYwN0w1LjM1MzM2IDkuMzUzNTVMNi43Njc1OCA3LjkzOTM0TDEyLjA2MDUgMTMuMjMyMloiIGZpbGw9IiMwQTBCMEQiLz4KPC9zdmc+Cg==" alt="discloser icon" height="24" width="24" className="token-details__arrow" />
                                  </div>
                                  <div className="amount-details">
                                    <input type="text" placeholder="0.00" className="amount-details__textfield" />
                                    <button className="amount-details__max-button m-button nature--link size--small">MAX</button>
                                  </div>
                                </div>
                            </div>
                            <div className="down-arrow-section">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjI3NDQgMTkuNzVMMTIuMjc0NCA0Ljc1IiBzdHJva2U9IiNCMEI0QkIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjI5ODggMTMuNzAwMkwxMi4yNzQ4IDE5Ljc1MDJMNi4yNDk3NiAxMy43MDAyIiBzdHJva2U9IiNCMEI0QkIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="to arrow" />
                            </div>
                            <div className="to-label header-h6">To</div>
                            <div className="to-chain-and-balance-details">
                              <div className="chain-details">
                                <img src="/images/logo.png" alt="candle chain logo" height="24" width="24" />
                                <div className="chain-details__chain-name font-label-small"> Candle chain </div>
                              </div>
                              <div className="balance-details font-label-extra-small">
                                <span className="balance-details__label"> Balance: </span>
                                <span className="balance-details__balance has-tooltip" data-original-title="null">0 CNDL</span>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="transfer-mode font-body-small text-center">
                        <span className="transfer-mode__label"> Transfer Mode: </span>
                        <span className="bridge-type">PoS Bridge</span>
                    </div>

                    <div>
                        <button className="transfer-button w-full m-button nature--primary size--large">Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
