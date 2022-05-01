import React from "react";
import "./style.scss"

const CheckBox = ({children,type,onChange,name,checked}) => {

    return (
        <div className="check-block">
            <label className={`${type}`}>
                {children}
                <input
                    name={name}
                    onChange={(e)=>onChange(e)}
                    type="checkbox"
                    checked={checked}
                />
                    <span className="checkmark"></span>
            </label>
        </div>
    )
}
export default CheckBox