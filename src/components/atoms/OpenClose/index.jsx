import React, {useState} from "react";
import {svg} from "../../../assets/svg";

const OpenClose = ({children, typeTitle}) => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="openClose">
            <div className="type" onClick={() => setToggle(!toggle)}>
                <div>
                    <div><img alt="" src={svg.MenuFilter}/><span>{typeTitle}</span></div>
                    <div>
                        {
                            toggle ?
                                <img alt="" src={svg.Minus}/>
                                :
                                <img alt="" src={svg.PLus}/>
                        }
                    </div>
                </div>
            </div>
            {
                toggle &&
                <>
                    {
                        children
                    }
                </>
            }
        </div>
    )
}

export default OpenClose