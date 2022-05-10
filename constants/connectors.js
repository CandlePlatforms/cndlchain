import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URL_BSC = "https://bsc-dataseed.binance.org/";
const RPC_URL_ETH =
  "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 97],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URL_ETH, 56: RPC_URL_BSC },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
