import React from "react";
import "./style.scss"
import ModalWindow from "../../atoms/ModalWindow";
import {svg} from "../../../assets/svg";

const SuccessListing = ({success}) => {
    return (
        <ModalWindow type={"window-xs"} isShowClose={false} show={success}>
            <div className="listing-success">
                <img alt="" src={svg.Success}/>
                <p>Listing successfully updated</p>
            </div>
        </ModalWindow>
    )
}

export default SuccessListing