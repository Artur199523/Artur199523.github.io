import React from "react";

import ModalWindow from "../../../../components/atoms/ModalWindow";
import Input from "../../../../components/atoms/Input";
import Button from "../../../../components/atoms/Button";

const SignStepFive = ({show, changeStep, fieldHandle, stepData}) => {
    return (
        <ModalWindow isShowClose={true} show={show} type={"window-lg_flex"} closeClick={changeStep}>
            <div className="step-five-block">
                <h1 className="step-two-block_title">Recover Password</h1>
                <div className="step-two-block_fields">
                    <Input
                        view={"inp inp-black inp-sm"}
                        type={"text"}
                        label={"username or email"}
                        name="username or email"
                        onChange={fieldHandle}
                        value={stepData["username or email"]}
                    />
                </div>
                <div className="step-five-block_btn-block">
                    <Button
                        type={"gold"}
                        onClick={()=>alert("recover")}
                        text={"recover"}
                    />
                </div>
            </div>
        </ModalWindow>
    )
}
export default SignStepFive