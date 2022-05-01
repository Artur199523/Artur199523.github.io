import React, {useEffect} from "react";


const TableBody = ({body}) => {
    let bodyItems = []
    for (let item in body[0]) {
        bodyItems = [...bodyItems, item]
    }



    return (
        <tbody>
        {
            body?.map((item, index) =>
                <tr key={index}>
                    {
                        bodyItems.map((elm, index) =>

                                <td key={index}>
                                    {
                                        elm === "img" ? <img alt="" src={item[elm]}/> : <>{item[elm]}</>
                                    }
                                </td>
                        )
                    }
                </tr>
            )
        }
        </tbody>
    )
}
export default TableBody