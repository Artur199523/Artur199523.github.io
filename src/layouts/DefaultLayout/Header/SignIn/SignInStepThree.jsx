import React from "react";

import ModalWindow from "../../../../components/atoms/ModalWindow";
import Input from "../../../../components/atoms/Input";

import { svg } from "../../../../assets/svg";
import Button from "../../../../components/atoms/Button";
import { useDispatch } from "react-redux";
import { register } from "../../../../Store/Auth/authSlice";
import { useWeb3React } from "@web3-react/core";

const SignInStepThree = ({ show, changeStep, fieldHandle, stepData, showToast, allStepData }) => {
    const dispatch = useDispatch()
    const { account } = useWeb3React()
    const savePassword = () => {
        if (stepData.fields.password.value !== stepData.fields["repeat password"].value) {
            showToast("error", "Password do not match")
        } else if (stepData.fields.password.value === "" || stepData.fields["repeat password"].value === "") {
            showToast("error", "Complete the fields")
        } else {
            const { fields } = allStepData.steps["step 2"]
            let email = fields.email.value
            let nickname = fields.nickname.value
            let checkboxOne = fields["checkbox 1"].value
            let checkboxTwo = fields["checkbox 2"].value
            let password = stepData.fields.password.value
            console.log()
            dispatch(register({ wallet: account, email: email, username: nickname, password:password,consent:checkboxOne,promo:checkboxTwo,sign:true }))
            // showToast("success","Success")
            // changeStep("")
        }
    }

    return (
        <ModalWindow isShowClose={true} show={show} type={"window-lg_flex"} closeClick={changeStep}>
            <div className="step-three-block">
                <h1 className="step-three-block_title">Last Step!</h1>
                <p className="step-three-block_underTitle">Set your password to use it in the Game Maker</p>
                <div className="step-three-block_fields">
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
                    />
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"password"}
                        label={"repeat your password"}
                        name={"repeat password"}
                        onChange={fieldHandle}
                        value={stepData["repeat password"]}
                        isIcon={true}
                        iconDefault={svg.PasswordClose}
                        iconTwo={svg.PasswordOpen}
                        changeIcon={true}
                    />
                </div>
                <div className="step-three-block_btn-block">
                    <div>
                        <Button
                            type={"gold"}
                            text={"save"}
                            onClick={savePassword}
                        />
                    </div>
                </div>
            </div>
        </ModalWindow>
    )
}

export default SignInStepThree