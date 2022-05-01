import React, {useState} from "react";
import ButtonChangePage from "./ButtonChnagePage";
import {svg} from "../../../assets/svg";
import Input from "../../atoms/Input";


const TableFooter = ({setCurrentPage, currentPage, maxPage, setMaxTableItems, maxTableItems}) => {
    const [selectToggle, setSelectToggle] = useState(false)

    const pageInput = (e) => {

        let number = e.target.value

        if (number > maxPage) {
            setCurrentPage(prev => prev)
        } else if (number < 1) {
            setCurrentPage(1)
        } else {
            setCurrentPage(+number)
        }
    }

    return (
        <div className="tableTools">
            <div className="tableTools-left">
                <div>
                    <ButtonChangePage
                        onClick={() => setCurrentPage(1)}
                        svg={svg.LeftAllPage}
                    />
                    <ButtonChangePage
                        onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                        svg={svg.LeftPage}
                    />
                    <ButtonChangePage
                        onClick={() => currentPage < maxPage && setCurrentPage(prev => prev + 1)}

                        svg={svg.RightPage}
                    />
                    <ButtonChangePage
                        onClick={() => setCurrentPage(maxPage)}
                        svg={svg.RightAllPage}
                    />

                </div>
                <div className="tableTools-left_pages">
                    <span> Page {currentPage} of {maxPage} | Go to Page</span>
                    <Input
                        type="number"
                        view={"table-black"}
                        min="1"
                        max={maxPage}
                        onChange={(e) => pageInput(e)}
                    />
                </div>
            </div>
            <div className="tableTools-right">
                <Input
                    type={"number"}
                    view={"table-black"}
                    value={maxTableItems}
                    readonly={true}
                />
                <div className="select-down" onClick={() => setSelectToggle(!selectToggle)}>
                    <img alt="" src={svg.SelectDown}/>
                </div>
                {
                    selectToggle &&
                    <div className="select-down-menu">
                        <div onClick={() => {
                            setMaxTableItems(10);
                            setSelectToggle(!selectToggle);
                            setCurrentPage(1)
                        }}>
                            {maxTableItems === 10 ? <img alt="" src={svg.Check}/> : <img alt="" src={svg.UnCheck}/>}
                            <span>10</span>
                        </div>
                        <div onClick={() => {
                            setMaxTableItems(20);
                            setSelectToggle(!selectToggle);
                            setCurrentPage(1)
                        }}>
                            {maxTableItems === 20 ? <img alt="" src={svg.Check}/> : <img alt="" src={svg.UnCheck}/>}
                            <span>20</span>
                        </div>
                        <div onClick={() => {
                            setMaxTableItems(50);
                            setSelectToggle(!selectToggle);
                            setCurrentPage(1)
                        }}>
                            {maxTableItems === 50 ? <img alt="" src={svg.Check}/> : <img alt="" src={svg.UnCheck}/>}
                            <span>50</span>
                        </div>
                        <div onClick={() => {
                            setMaxTableItems(100);
                            setSelectToggle(!selectToggle);
                            setCurrentPage(1)
                        }}>
                            {maxTableItems === 100 ? <img alt="" src={svg.Check}/> : <img alt="" src={svg.UnCheck}/>}
                            <span>100</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default TableFooter