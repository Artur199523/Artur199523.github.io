import React from "react"

const ButtonChangePage = ({svg,onClick}) =>{
    return(
        <button onClick={onClick} className="table-btn">
            <img alt="" src={svg}/>
        </button>
    )
}
export default ButtonChangePage