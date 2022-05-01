import {InjectedConnector} from "@web3-react/injected-connector"
import {WalletConnectConnector} from "@web3-react/walletconnect-connector"
import {WalletLinkConnector} from "@web3-react/walletlink-connector"

const metamask = new InjectedConnector({
    rpcURL: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    supportedChainIds: [1, 3, 4, 5, 42]
})

const walletconnect = new WalletConnectConnector({
    rpcURL: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true
})

const walletlink = new WalletLinkConnector(({
    url: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds:[1,3,4,5,42]
}))

export const connectors = {
    metamask: metamask,
    walletConnect: walletconnect,
    coinbaseWallet: walletlink
}
