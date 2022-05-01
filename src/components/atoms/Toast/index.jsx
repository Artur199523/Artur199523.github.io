import React, {useEffect, useRef} from "react"
import {svg} from "../../../assets/svg";
import "./style.scss"

const Toast = ({variant, text, clearState}) => {
    const toastRef = useRef(null)

    useEffect(() => {
        if (text) {
            openToast()
        }
    }, [text])


    const openToast = () => {
        toastRef.current.classList.add("show");
        setTimeout(function () {
            toastRef.current.classList.add("close");
            setTimeout(() => {
                toastRef.current.classList.remove("show");
                toastRef.current.classList.remove("close");
                clearState({variant: "", text: ""})
            }, 400)
        }, 3000);
    };


    return (
        <div ref={toastRef} className={`snackbar ${variant}`}>
            <div className={"snackbar_status"}>
                <div className={"snackbar_status_symbol"}>
                    {
                        {
                            "success":
                                <img src={svg.SuccessMessage} alt={""}/>,
                            "error":
                                <img src={svg.RejectMessage} alt={""}/>
                        }[variant]
                    }
                </div>
                <div className={"snackbar_status_message"}>{text}</div>
            </div>
        </div>
    )
}

export default Toast