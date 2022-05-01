import React, {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {connectors} from "../../../../web3/connectors";
import ModalWindow from "../../../../components/atoms/ModalWindow";

import "./style.scss"
import {svg} from "../../../../assets/svg";
import LoadSpinner from "../../../../components/atoms/LoadSpinner";

const SignInStepOne = ({show, changeStep}) => {
    const {activate, deactivate, account} = useWeb3React()
    const [connectClick, setConnectClick] = useState(false)

    useEffect(() => {
        
        if (account) {
            setConnectClick(false)
          
        }
    }, [account])

    const connectWallet = async (wallet) => {
        try {
           
            if(!account){
                setConnectClick(true)
                let connect = await activate(connectors[wallet])
                console.log(connect)
            }else{
                changeStep("step 2")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ModalWindow isShowClose={true} show={show} type={"window-lg_flex"} closeClick={changeStep}>
            <div className="step-one-block">
                {
                    !connectClick ?
                        <>
                            <h1>login in or create an account</h1>
                            <div className="wallet-block">
                                <WalletCart
                                    walletIcon={svg.MetamaskFront}
                                    name={"Metamask"}
                                    status={"Recommended"}
                                    webVersion={3}
                                    onClick1={() => connectWallet("metamask")}
                                    onClick2={() => alert("button2")}
                                />
                                <WalletCart
                                    walletIcon={svg.Email}
                                    name={"Email"}
                                    webVersion={2}
                                    onClick1={() => changeStep("step 4")}
                                    onClick2={() => alert("button2")}
                                />
                            </div>
                        </>
                        :
                        <div className="step-one-block_progress-block">
                            <LoadSpinner/>
                            <p className="step-one-block_progress-block_text">
                                Please authorize access to your wallet
                            </p>
                        </div>
                }
            </div>
        </ModalWindow>
    )
}

const WalletCart = ({walletIcon, name, status, onClick1, onClick2, webVersion}) => {
    return (
        <button className="wallet-cart" onClick={() => onClick1()}>
            <div>
                <img src={walletIcon} alt=""/>
                <div className="wallet-cart_title">
                    <span>{name}</span>
                    {status && <span className={"wallet-cart_title_status"}>({status})</span>}
                </div>
            </div>
            <div className="wallet-cart_info">
                <p> WEB {webVersion}</p>
                <div onClick={() => onClick2()}>
                    <span> ? </span>
                </div>
            </div>
        </button>
    )
}

export default SignInStepOne