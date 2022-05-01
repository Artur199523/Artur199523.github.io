import React, {useState} from "react";

import ModalWindow from "../../../../components/atoms/ModalWindow";
import Button from "../../../../components/atoms/Button";
import Input from "../../../../components/atoms/Input";

import {svg} from "../../../../assets/svg";
import "./style.scss"

const SignInStepFour = ({show,fieldHandle, stepData,changeStep}) => {

    const login = () => {
        alert("login click")
    }

    return (
        <ModalWindow isShowClose={true} show={show} type={"window-lg_flex"} closeClick={changeStep}>
            <div className="step-four-block">
                <h1 className="step-four-block_title">Login</h1>
                <p className="step-four-block_underTitle">You’ll need to be logged in to upload to the Marketplace</p>
                <div className="step-four-block_fields">
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"text"}
                        label={"username or email"}
                        name="username or email"
                        onChange={fieldHandle}
                        value={stepData["username or email"]}
                    />
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"password"}
                        label={"password"}
                        name={"password"}
                        onChange={fieldHandle}
                        value={stepData["password"]}
                        isIcon={true}
                        iconDefault={svg.PasswordClose}
                        iconTwo={svg.PasswordOpen}
                        changeIcon={true}
                    >
                        <span onClick={()=>changeStep("step 5")} className="step-four-block_fields_forgot-password">i forgot my password</span>
                    </Input>
                    <div className="step-four-block_btn-block">
                        <Button
                            type={"gold"}
                            onClick={login}
                            text={"login"}
                        />
                    </div>
                </div>
                <div className="step-four-block_wallet-btn-block">
                    <p className="step-four-block_wallet-btn-block_text">or log in with your Wallet</p>
                    <Button
                        type={"version-black"}
                        onClick={() => changeStep("step 1")}
                        text={"login with your wallet"}
                    />
                </div>
            </div>
        </ModalWindow>
    )
}

export default SignInStepFour