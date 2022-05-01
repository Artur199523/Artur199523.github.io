import React, {memo, useState} from "react";
import "./style.scss"

const Input = ({label, placeholder, value, onChange, name, type, view, htmlFor, max, min, readonly, isIcon = false, iconDefault, iconTwo, changeIcon,labelStatus,children}) => {
    const [passwordFiled, setPasswordFiled] = useState({type: "password", check: false})

    const changeType = () => {
        const copy = {...passwordFiled}
        let newType = copy.type === "password" ? "text" : "password"
        setPasswordFiled({...copy,type: newType,check: !copy.check})
    }

    return (
        <div className={`inp-block ${view}`}>
            {
                label && <label className="inp-label" htmlFor={htmlFor}>{label} {labelStatus && <span className="label-status">({labelStatus})</span>}</label>
            }
            <input
                id={htmlFor}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                type={type === "password" ? passwordFiled.type : type}
                max={max}
                min={min}
                readOnly={readonly}
                autoComplete="off"
            />
            {
                isIcon &&
                <span onClick={() => changeIcon && changeType()} className="inp-icon">
                    {
                        !passwordFiled.check ?
                            <img alt="" src={iconDefault}/>
                            :
                            <img alt="" src={iconTwo}/>
                    }

                </span>
            }
            {children}
        </div>
    )
}
export default memo(Input)