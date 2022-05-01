import React from "react"
import "./stytle.scss"
import {svg} from "../../../assets/svg";

const ModalWindow = ({show, isShowClose, closeClick, children,type}) => {

    return (
        <>
            {
                show &&
                <div className={`modal-container ${type}`}>
                    <div className={`modal-window`}>
                        {
                            isShowClose &&
                            <img className="close-icon" alt={""} onClick={() => closeClick(false)} src={svg.CloseSmall}/>
                        }

                        {children}
                    </div>
                </div>
            }
        </>


    )
}
export default ModalWindow