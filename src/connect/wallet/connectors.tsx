import { InjectedConnector } from "@web3-react/injected-connector";
import {DEFAULT_CHAIN_ID} from "../../consts";
// import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS: { [chainId: number]: string } = {
  97: process.env.REACT_APP_RPC_URL_97 as string,
};
export const injected = new InjectedConnector({ supportedChainIds: [DEFAULT_CHAIN_ID] });

// export const network = new NetworkConnector({
//   urls: { 97: RPC_URLS[97] },
//   defaultChainId: 97,
// });

// export const walletconnect = new WalletConnectConnector({
//   rpc: { 1: RPC_URLS[1] },
//   qrcode: true
// })

// export const walletlink = new WalletLinkConnector({
//   url: RPC_URLS[1],
//   appName: 'web3-react example',
//   supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
// })

// export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })

// export const trezor = new TrezorConnector({
//   chainId: 1,
//   url: RPC_URLS[1],
//   pollingInterval: POLLING_INTERVAL,
//   manifestEmail: 'dummy@abc.xyz',
//   manifestAppUrl: 'http://localhost:1234'
// })

// export const lattice = new LatticeConnector({
//   chainId: 4,
//   appName: 'web3-react',
//   url: RPC_URLS[4]
// })

// export const frame = new FrameConnector({ supportedChainIds: [1] })

// export const authereum = new AuthereumConnector({ chainId: 42 })

// export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

// export const magic = new MagicConnector({
//   apiKey: process.env.MAGIC_API_KEY as string,
//   chainId: 4,
//   email: 'hello@example.org'
// })

// export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })

// export const torus = new TorusConnector({ chainId: 1 })
