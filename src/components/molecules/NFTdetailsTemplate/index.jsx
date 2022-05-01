import React, {useRef, useState} from "react";
import {FacebookShareButton, TelegramShareButton, TwitterShareButton} from "react-share";
import UseOutSide from "../../../Hooks/useOutside";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import Accordion from "../../atoms/Accordion";
import Table from "../Table/TableContainer";
import NftCart from "../../atoms/NftCart";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

import {copyToClipboard} from "../../../Utils/utils";

import {svg} from "../../../assets/svg";
import {png} from "../../../assets/png";

import tableData from "../../organisms/MarketPlace/tableData.json";

const NFTDetailsTemplate = ({currentNft}) => {
    const [isOpenShareBlock, setIsOpenShareBlock] = useState(false)
    const {nftArray} = useSelector(state => state.nft.marketPlace)
    const wrapperRef = useRef(null)
    const location = useLocation()
    const isSellPage = location.pathname.search("sell") > -1
    UseOutSide(wrapperRef, setIsOpenShareBlock)

    const netWoksBlockToggle = () => {
        setIsOpenShareBlock(!isOpenShareBlock)
    }

    const listNow = () => {

    }

    const buyNft = () =>{

    }

    return (
        <div className="container item-detail">
            <div className="item-detail-one">
                <div className="item-detail-one-left">
                    <img src={currentNft?.img} alt=""/>
                    <Accordion
                        svgLeft={svg.PriceHistory}
                        svgRight={svg.AccordionDown}
                        title={"Price History"}
                    >
                        <h2>No options</h2>
                    </Accordion>

                </div>
                <div className="item-detail-one-right">
                    <div className="item-detail-one-right-title">
                        <h4>Cosmetic Name {currentNft?.title}</h4>
                        <div className="item-detail-one-right-title-share">
                            <div>Mini Royale: Nations - Season 1 (Premium)</div>
                            <div>
                                            <span onClick={() => netWoksBlockToggle()}>
                                                <img src={svg.Share2} alt="share"/>
                                                Share
                                            </span>
                                <img alt="" src={svg.Refresh}/>
                                {
                                    isOpenShareBlock &&
                                    <div onClick={() => netWoksBlockToggle()}
                                         className="item-detail-one-right-title-share-networks"
                                         ref={wrapperRef}>
                                        <div onClick={() =>copyToClipboard(process.env.REACT_APP_PRODUCTION_URL + location.pathname)}>
                                            <img alt="" src={png.CopyClipboard}/>
                                            Copy to Clipboard
                                        </div>
                                        <div>
                                            <FacebookShareButton
                                                url={`${process.env.REACT_APP_PRODUCTION_URL + location.pathname}`}
                                            ><img alt="" src={svg.Facebook}/>
                                                Share on FaceBook
                                            </FacebookShareButton>
                                        </div>
                                        <div>
                                            <TwitterShareButton
                                                url={`${process.env.REACT_APP_PRODUCTION_URL + location.pathname}`}
                                            >
                                                <img alt="" src={svg.Twitter}/>
                                                Share on Twitter
                                            </TwitterShareButton>
                                        </div>
                                        <div>
                                            <TelegramShareButton
                                                url={`${process.env.REACT_APP_PRODUCTION_URL + location.pathname}`}
                                            >
                                                <img alt="" src={svg.Telegram}/>
                                                Share on Telegram
                                            </TelegramShareButton>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="item-detail-one-right-buying">
                        {
                            !isSellPage ?
                                <>
                                    <span>Current Price</span>
                                    <div className="item-detail-one-right-buying-price">
                                        <img src={svg.EtheriumGold} alt="eth"/>
                                        <span
                                            className="item-detail-one-right-buying-price-eth">{currentNft?.price}</span>
                                        <span className="item-detail-one-right-buying-price-USD">(9500$)</span>
                                    </div>
                                    <div className="item-detail-one-right-buying-buttons">
                                        <div>
                                            <Button
                                                onClick={() => buyNft()}
                                                type={"gold"}
                                                text={"buy now"}
                                            />
                                        </div>
                                    </div>
                                </> :
                                <div className="sell-block">
                                    <span>
                                        NOT LISTED
                                    </span>
                                    <div>
                                        <div>
                                            <Input
                                                view={"inp inp-black inp-sm"}
                                                type={"number"}
                                                placeholder={"List Price (ETH)"}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                onClick={listNow}
                                                type={"gold"}
                                                text={"list now"}
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                        <p>By clicking “Buy Now” or “Sell”, you agree to <a href=""> Terms of Service</a>
                        </p>
                    </div>
                    <div>
                        <Accordion
                            svgLeft={svg.Profile}
                            svgRight={svg.AccordionDown}
                            title={"About Mini Royal: Nations - Season 1 (Premium)"}
                        >
                            <h2>No options</h2>
                        </Accordion>
                        <Accordion
                            svgLeft={svg.Details}
                            svgRight={svg.AccordionDown}
                            title={"Details"}
                            open={true}
                        >
                            <h2>No options</h2>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="item-detail-two">
                <Accordion
                    svgLeft={svg.Activity}
                    svgRight={svg.AccordionDown}
                    title={"Activities"}
                    open={true}
                    bodyBorder={false}
                >
                    <Table data={tableData}/>
                </Accordion>
                <Accordion
                    svgLeft={svg.More}
                    svgRight={svg.AccordionDown}
                    title={"More from this collection"}
                    open={true}
                    bodyBorder={false}
                >
                    <div className="more">
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
                </Accordion>
            </div>
        </div>
    )
}
export default NFTDetailsTemplate