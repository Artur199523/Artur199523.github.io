import React, {useEffect} from "react";
import "./style.scss"
import {svg} from "../../../assets/svg";
import {useWeb3React} from "@web3-react/core";
import {connectors} from "../../../web3/connectors";


const WalletModal = ({modalToggle, walletModalToggle}) => {
    const {activate, deactivate, account} = useWeb3React()

    useEffect(() => {
        const provider = window.sessionStorage.getItem("provider");
        if (provider) activate(connectors[provider])
    }, [])


    const setProvider = (type) => {
        window.sessionStorage.setItem("provider", type)
    }

    const connectWallet = async (currentConnector) => {
        activate(connectors[currentConnector])
    }

    return (
        <div className={`connect-popup ${modalToggle && "block"} `}>
            <div className="connect-popup-display">
                <span onClick={walletModalToggle} className="close"><img alt="" src={svg.Close}/></span>
                <img src={svg.LogoMobile} alt=""/>
                <h3>Connect Wallet</h3>
                <div onClick={() => {
                    connectWallet("metamask");
                    setProvider("metamask");
                    walletModalToggle()
                }}
                     className="connect-popup-button">
                    <p>Metamask</p>
                    <img src={svg.Metamask} alt=""/>
                </div>
                <div onClick={() => {
                    connectWallet("coinbaseWallet")
                    setProvider("coinbaseWallet");
                    walletModalToggle()
                }}
                     className="connect-popup-button">
                    <p>Coinbase Wallet</p>
                    <img src={svg.Coinbase} alt=""/>
                </div>
                <div onClick={ () => {
                    connectWallet("walletConnect")
                    setProvider("walletConnect");
                    walletModalToggle()
                }}
                     className="connect-popup-button">
                    <p>WalletConnect</p>
                    <img src={svg.WalletConnect} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default WalletModal