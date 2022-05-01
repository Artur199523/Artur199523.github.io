import React from "react";

const TableHead = ({head}) =>{

    return(
        <thead>
        <tr>
            {
                head?.map((item,index)=>
                    <th key={index}>{item}</th>
                )
            }
        </tr>
        </thead>
    )
}

export default TableHead