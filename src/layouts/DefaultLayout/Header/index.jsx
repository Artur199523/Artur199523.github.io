import React, {useState} from "react"
import {useWeb3React} from "@web3-react/core";
import {Link, useLocation} from "react-router-dom";

import Button from "../../../components/atoms/Button";
import MenuMobile from "./menuMobile";
import {svg} from "../../../assets/svg";

import "./style.scss"
import Steps from "./SignIn";
import Toast from "../../../components/atoms/Toast";



const Header = () => {
    const [modalToggle, setModalToggle] = useState(false)
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const {deactivate} = useWeb3React()

    const [stepData, setStepData] = useState({
        currentStep: "",
        steps: {
            "step 2": {
                fields: {
                    email: {validation: false, value: ""},
                    nickname: {validation: false, value: ""},
                    "checkbox 1": {validation: false, value: true},
                    "checkbox 2": {validation: false, value: true},
                }
            },
            "step 3": {
                fields: {
                    password: {validation: false, value: ""},
                    "repeat password": {validation: false, value: ""}
                }
            },
            "step 4": {
                fields: {
                    "username or email": {validation: false, value: ""},
                    password: {validation: false, value: ""}
                }
            },
            "step 5": {
                fields: {
                    "email or username": {validation: false, value: ""}
                }
            }
        }
    })
    const [message, setMessage] = useState({variant:"",text:""})


    const changeStep = (step) => {
        const copy = {...stepData}
        setStepData({...copy, currentStep: step})
    }

    const fieldHandle = (e) => {
        let {name, value, type} = e.target
        const stepDataCopy = {...stepData}
        if (type !== "checkbox") {
            stepDataCopy.steps[stepDataCopy.currentStep].fields[name].value = value
            setStepData(stepDataCopy)
        } else {
            stepDataCopy.steps[stepDataCopy.currentStep].fields[name].value = !stepDataCopy.steps[stepDataCopy.currentStep].fields[name].value
            setStepData(stepDataCopy)
        }
    }

    const
        openMenu = () => {
            setOpen(!open)
        }

    const disconnect = () => {
        deactivate()
        window.sessionStorage.removeItem("provider")
        window.localStorage.clear()
    }

    const signInWalletModalToggle = () => {
        setModalToggle(!modalToggle)
    }

    const showToast = (variant,text) => {
        const copy = {...message}
        setMessage({...copy,variant: variant, text: text})
    }

    return (
        <>
            <MenuMobile open={open} openMenu={openMenu}/>
            <header className="header">
                <div className="menu">
                    <div className="menu_logo">
                        <Link to={"/"}>
                            <img src={svg.Logo} alt=""/>
                        </Link>
                    </div>
                    <div className="menu_pages">
                        <ul>
                            <li className={`${location.pathname === "/" && "active"}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`${location.pathname === "/shop" && "active"} `}>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li className={`${location.pathname === "/bazaar" && "active"} `}>
                                <Link to="/bazaar">Bazaar</Link>
                            </li>
                            <li className={`${location.pathname === "/locker" && "active"} `}>
                                <Link to="/locker">Locker</Link>
                            </li>
                            <li className={`${location.pathname === "/token" && "active"} `}>
                                <Link to="/token">Token</Link>
                            </li>
                            <li className={`${location.pathname === "/news" && "active"} `}>
                                <Link to="/news">News</Link>
                            </li>
                            <li className={`${location.pathname === "/team" && "active"} `}>
                                <Link to="/team">Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu_btn">
                        <Button
                            type={"gold"}
                            onClick={() => changeStep("step 1")}
                            text={"sign in"}
                        />
                        <div className={`menu_btn-mobile ${open ? "open" : ""}`} onClick={openMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            <Steps
                changeStep={changeStep}
                fieldHandle={fieldHandle}
                stepData={stepData}
                setStepData={setStepData}
                showToast={showToast}
            />
            {
                message &&
                 <Toast clearState={setMessage} variant={message.variant} text={message.text}/>
            }
        </>
    )
}

export default Header