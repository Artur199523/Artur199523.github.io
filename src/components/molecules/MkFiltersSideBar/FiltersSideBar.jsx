import React, {useCallback, useState} from "react";
import {svg} from "../../../assets/svg";
import OpenClose from "../../atoms/OpenClose";
import CheckBox from "../../atoms/CheckBox";
import SimpleSelect from "../../atoms/Select";
import Input from "../../atoms/Input";
import "./style.scss"
import data from "./data.json"


const FiltersSideBar = () => {
    const [sideBarToggle, setSideBarToggle] = useState(true)
    const [fieldData, setFieldData] = useState(data)

    const sideBarShowToggle = () => {
        setSideBarToggle(!sideBarToggle)
    }

    const dataHandle = useCallback((e)=>{
        const copy = {...fieldData}
        switch (e.target?.name || e.name) {
            case "checkAll":
                copy['status']["allItems"] = !copy['status']["allItems"]
                break
            case "currency":
                copy['price-filter']["crypto-currency"].value = e.value
                break
            case "min":
                copy['price-filter'].min = e.target.value
                break
            case "max":
                copy['price-filter'].max = e.target.value
                break
            default:

        }
        setFieldData(copy)
    },[fieldData])


    return (
        <div className={`mk-nft-sideBar-container ${sideBarToggle ? "sideBarWidth" : ""}` }>
            <div className="sidebar-header">
                {sideBarToggle && <div>Filters</div>}
                <div className={`sideBarClose ${sideBarToggle ? "" : "sideBarOpen"}`} onClick={sideBarShowToggle}><img
                    alt="" src={svg.Left}/></div>
            </div>
            {
                sideBarToggle &&
                <div className="sideBar-main">
                    <div className="type-status">
                        <OpenClose typeTitle={"Status"}>
                            <div className="content">

                                    <CheckBox
                                        onChange={dataHandle}
                                        type={"checkBox-square square-gold square-sm"}
                                        name={"checkAll"}
                                        checked={fieldData['status']["allItems"]}
                                    >
                                        <span className="checkBox-text">All items</span>
                                    </CheckBox>

                            </div>
                        </OpenClose>
                    </div>
                    <div className="type-price-filter">
                        <OpenClose typeTitle={"Price Filter"}>
                            <div className="content">
                                <SimpleSelect
                                    selectedColor="#BA8926"
                                    textColor="white"
                                    backColor="#000000"
                                    fontSize="12px"
                                    border="0.5px solid rgba(255, 255, 255, 0.1)"
                                    optionSize="10px"
                                    inputSize="3px 0"
                                    options={fieldData["price-filter"]["crypto-currency"].options}
                                    defaultValue={fieldData["price-filter"]["crypto-currency"].options[0]}
                                    value={fieldData["price-filter"]["crypto-currency"].value}
                                    onChange={dataHandle}
                                />
                                <div className="price-inputs">
                                        <Input
                                            view={"inp inp-black inp-xs"}
                                            type={"number"}
                                            placeholder={"MIN"}
                                            name="min"
                                            onChange={dataHandle}
                                            value={fieldData["price-filter"].min}
                                        />
                                    <span>to</span>
                                        <Input
                                            view={"inp inp-black inp-xs"}
                                            name="max"
                                            placeholder={"MAX"}
                                            onChange={dataHandle}
                                            value={fieldData["price-filter"].max}
                                        />
                                </div>
                                <button className="unique-btn">
                                    Apply
                                </button>
                            </div>
                        </OpenClose>
                    </div>
                </div>
            }
        </div>
    )
}
export default FiltersSideBar