import React, {useState} from "react"

import ModalWindow from "../../../../components/atoms/ModalWindow";
import CheckBox from "../../../../components/atoms/CheckBox";
import Input from "../../../../components/atoms/Input";
import Button from "../../../../components/atoms/Button";
import {randomToken, validateEmail} from "../../../../Utils/utils";
import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";


const SignInStepTwo = ({show, changeStep, stepData, setStepData, fieldHandle, showToast}) => {
    const {nickname, email} = stepData.fields
    const {account} = useWeb3React()
    const signMessage = "Welcome to The Kompete Dashboard,please sign this message to verify your identity.Your custom challenge is: " + randomToken(56)

    const checkFields = () => {
        if (!nickname.value || !email.value) {
            showToast("error", "Complete the fields with your email and nickname")
        } else {
            if (validateEmail(email.value)) {
                signatureProcess().then((data) => {
                    const {signature, signMessage} = data
                    verifyMessage(signMessage,account, signature).then(()=>{
                        changeStep("step 3")
                    })
                })
            } else {
                showToast("error", "Invalid email address")
            }
        }
    }

    const signatureProcess = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const signature = await signer.signMessage(signMessage)
            return {signature, signMessage}
        } catch (e) {
            showToast("error", "Signature rejected")
        }
    }

    const verifyMessage = async (message, address, signature) => {
        try {
            const signerAddr = await ethers.utils.verifyMessage(message, signature);
            if (signerAddr !== address) {
                showToast("error", "Signature rejected")
            }
            showToast("success", "Signature success")
        } catch (e) {
            showToast("error", "Something went wrong")
        }
    }

    return (
        <ModalWindow isShowClose={true} show={show} type={"window-lg_flex"} closeClick={changeStep}>
            <div className="step-two-block">
                <h1 className="step-two-block_title">You are almost there!</h1>
                <p className="step-two-block_underTitle">Complete these fields with your email and nickname. You need
                    this even if connecting with Web 3.</p>
                <div className="step-two-block_fields">
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"text"}
                        label={"email"}
                        name="email"
                        onChange={fieldHandle}
                        value={stepData["username or email"]}
                    />
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"text"}
                        label={"nickname"}
                        name="nickname"
                        onChange={fieldHandle}
                        value={stepData["username or email"]}
                        labelStatus={"optional"}
                    />
                </div>
                <div className="step-two-block_checkbox">
                    <CheckBox
                        type={"checkBox-square square-md square-green"}
                        name={"checkbox 1"}
                        onChange={fieldHandle}
                        checked={stepData.fields["checkbox 1"].value}
                    >
                        I would like to receive news, surveys and special offers from Epic Games.
                    </CheckBox>
                    <CheckBox
                        type={"checkBox-square square-md square-green"}
                        name={"checkbox 2"}
                        onChange={fieldHandle}
                        value={stepData["checkbox 2"]}
                        checked={stepData.fields["checkbox 2"].value}
                    >
                        I have read and agree to the <a>terms of service</a>
                    </CheckBox>
                </div>
                <div className="step-two-block_btn-block">
                    <Button
                        type={"gold"}
                        onClick={checkFields}
                        text={"continue"}
                    />
                </div>
            </div>
        </ModalWindow>
    )
}

export default SignInStepTwo