import React from "react";
import {svg} from "../../../assets/svg";
import "./style.scss"
const SearchInput = ({type, view, onChange,value}) => {
    return (
        <div className={`search-input ${view}`}>
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
            <div className="search-input-svg">
                {
                    view === "white-search"?<img alt="" src={svg.SearchBlack}/> : <img alt="" src={svg.Search}/>
                }
            </div>
        </div>
    )
}
export default SearchInput