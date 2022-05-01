import React, {useCallback, useEffect, useState} from "react"
import TableHead from "./TableHead";
import "./style.scss"
import TableBody from "./TableBody";
import TableFooter from "./TableFotter";

const Table = ({data}) => {
    const [tableData, setTableData] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    const [maxTableItems, setMaxTableItems] = useState(10)
    const maxPage = Math.ceil(tableData.body.data.length / maxTableItems)
    const maxItems = tableData.body.data.length

    useEffect(() => {
        changePage(currentPage, maxTableItems)
    }, [currentPage, maxTableItems])

    const changePage = useCallback((currentPage, maxTableItems) => {
        const copy = {...tableData}
        let page = currentPage
        copy.body.value = copy.body.data.filter((_, index) => index >= maxTableItems * page - maxTableItems && index < page * maxTableItems)
        setTableData(copy)
    }, [tableData])

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    <TableHead head={tableData.head}/>
                    <TableBody body={tableData.body.value}/>
                </table>
            </div>
            <TableFooter
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
                maxItems={maxItems}
                currentPage={currentPage}
                setMaxTableItems={setMaxTableItems}
                maxTableItems={maxTableItems}
            />
        </div>

    )
}
export default Table