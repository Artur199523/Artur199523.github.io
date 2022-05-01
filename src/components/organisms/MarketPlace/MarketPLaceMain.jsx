import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import FiltersSideBar from "../../molecules/MkFiltersSideBar/FiltersSideBar";
import TabContent from "../../molecules/TabPanels/TabContent";
import TabNavItem from "../../molecules/TabPanels/TabNavItem";
import TabBlock from "../../molecules/TabPanels/TabBlock";
import Table from "../../molecules/Table/TableContainer";
import SearchInput from "../../atoms/SearchInput";
import SimpleSelect from "../../atoms/Select";
import NftCart from "../../atoms/NftCart";

import {nftForSell} from "../../../Store/Nft/nftSlice";
import tableData from "./tableData.json"

import {svg} from "../../../assets/svg";
import "./style.scss"


const MarketPlaceMain = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [activeGroupTab, setActiveGroupTab] = useState("group1")
    const {nftArray} = useSelector(state => state.nft.marketPlace)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(nftForSell())
    }, [dispatch])

    const refreshFilter = () => {

    }

    return (
        <div className="marketplace-container">
            <TabBlock>
                <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}>
                    <img alt="" src={svg.MenuFilterGold}/>
                    Game Assets
                </TabNavItem>
                <TabNavItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}>
                    <img alt="" src={svg.Activity}/>
                    Activity
                </TabNavItem>
            </TabBlock>
            <div className="mk-nft-container">
                <TabContent id="tab1" activeTab={activeTab}>
                    <div className="mk-nft">
                        <FiltersSideBar/>
                        <div className="mk-nft-filtered">
                            <div className="mk-nft-search-bar">
                                <div onClick={() => refreshFilter()} className="mk-nft-search-bar-refresh">
                                    <img alt="" src={svg.Refresh}/>
                                </div>
                                <div className="mk-nft-search-bar-input">
                                    <SearchInput view={"black-search"}/>
                                </div>
                                <div className="mk-nft-search-bar-select">
                                    <SimpleSelect
                                        selectedColor="#BA8926"
                                        textColor="white"
                                        backColor="#000000"
                                        fontSize="12px"
                                        border="0.5px solid rgba(255, 255, 255, 0.1)"
                                        optionSize="10px"
                                        inputSize="5px 0"
                                        placeholder={"Recently listed"}
                                        // options={fieldData["price-filter"]["crypto-currency"].options}
                                        // defaultValue={fieldData["price-filter"]["crypto-currency"].options[0]}
                                        // value={fieldData["price-filter"]["crypto-currency"].value}
                                        // onChange={dataHandle}
                                    />
                                </div>
                                <div className="mk-nft-search-bar-group">
                                    <div className="mk-nft-search-bar-group-items">
                                        <TabNavItem id="group1" activeTab={activeGroupTab}
                                                    setActiveTab={setActiveGroupTab}>
                                            {
                                                activeGroupTab === "group1" ?
                                                    <img alt="" src={svg.Group1Gold}/> :
                                                    <img alt="" src={svg.Group1White}/>
                                            }
                                        </TabNavItem>
                                        <TabNavItem id="group2" activeTab={activeGroupTab}
                                                    setActiveTab={setActiveGroupTab}>
                                            {
                                                activeGroupTab === "group2" ?
                                                    <img alt="" src={svg.Group2Gold}/> :
                                                    <img alt="" src={svg.Group2White}/>
                                            }
                                        </TabNavItem>
                                    </div>
                                </div>
                            </div>
                            <div className={`mk-nft-items ${activeGroupTab}`}>
                                {
                                    nftArray?.map((nft) =>
                                        <NftCart
                                            key={nft.id}
                                            img={nft.img}
                                            title={nft.title}
                                            price={nft.price}
                                            link={`/item-details/${nft.mintAddress}`}
                                        />)
                                }
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <div className="mk-nft-transactions">
                        <Table data={tableData}/>
                    </div>
                </TabContent>
            </div>
        </div>
    )
}
export default MarketPlaceMain