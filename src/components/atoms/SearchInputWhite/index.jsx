import React,{memo} from "react"
import {svg} from "../../../assets/svg";
import "./style.scss"

const SearchInput = ({onChange, placeholder, name, value,onClick, isDeleteIcon = true}) => {
    return (
        <div className="search-help">
            <div>
                <img alt="" className="icon-size" src={svg.SearchHelp}/>
            </div>
            <div className={"search-help-inp"}>
                <input
                    onChange={onChange}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                />
            </div>

            {
                isDeleteIcon &&
                <div onClick={onClick}>
                    <img className="icon-size" alt=""  src={svg.Delete}/>
                </div>
            }

        </div>
    )
}

export default memo(SearchInput)