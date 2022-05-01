import React from "react";
import SignInStepOne from "./SignInStepOne";
import SignInStepTwo from "./SignInStepTwo";
import SignInStepThree from "./SignInStepThree";
import SignInStepFour from "./SignInStepFour";
import SignStepFive from "./SignStepFive";

const Steps = ({stepData,changeStep,fieldHandle,showToast}) => {
    return (
        <>
            <SignInStepOne
                show={stepData.currentStep === "step 1"}
                changeStep={changeStep}
                fieldHandle={fieldHandle}
            />

            <SignInStepTwo
                show={stepData.currentStep === "step 2"}
                changeStep={changeStep}
                fieldHandle={fieldHandle}
                stepData={stepData.steps["step 2"]}
                showToast={showToast}
            />

            <SignInStepThree
                show={stepData.currentStep === "step 3"}
                changeStep={changeStep}
                fieldHandle={fieldHandle}
                stepData={stepData.steps["step 3"]}
                allStepData = {stepData}
                showToast={showToast}
            />

            <SignInStepFour
                show={stepData.currentStep === "step 4"}
                changeStep={changeStep}
                fieldHandle={fieldHandle}
                stepData={stepData.steps["step 4"]}
            />

            <SignStepFive
                show={stepData.currentStep === "step 5"}
                changeStep={changeStep}
                fieldHandle={fieldHandle}
                stepData={stepData.steps["step 5"]}
            />
        </>
    )
}

export default Steps