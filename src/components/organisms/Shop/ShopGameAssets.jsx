import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";

import Pagination from "../../molecules/Pagination/Pagination";

import {changePage} from "../../../Store/Nft/nftSlice";

import "./style.scss"


const ShopGameAssets = () => {
    const [currentButton, setCurrentButton] = useState(1)
    const {account} = useWeb3React()
    const maxNft = 12
    const nft = useSelector((state => state.nft))
    const page = Math.ceil(nft?.nftInfo?.total / maxNft)
    const dispatch = useDispatch()
    useEffect(() => {
        if(nft.nftInfo) dispatch(changePage({currentButton,maxNft}))
    }, [currentButton,dispatch,nft.nftInfo])

    return (
        <section className="shop-game-assets">
            <div className="container nft-container">
                <div className="block-caption">
                    <h3>your <span>game assets</span></h3>
                </div>
                {
                    account ?
                        <div className="nft-items">
                            <div className="nft-item">
                                {
                                    nft?.currentPageNft?.map((nft, index) =>
                                        <div className="nft" key={index}>
                                            <img alt={""} src={nft.meta.content[0].url}/>
                                            <div className="nft-info">
                                                <span>Limited Edition</span>
                                                <p>Asset #0001</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={`pagination-container`}>
                                {
                                    nft?.nftInfo?.items.length > maxNft &&
                                    <Pagination
                                        page={page}
                                        currentButton={currentButton}
                                        setCurrentButton={setCurrentButton}
                                    />
                                }
                            </div>
                        </div>
                        :
                        <div className="content">
                            <p>
                                You need to connect your wallet to view your game assets
                            </p>
                        </div>
                }
            </div>
        </section>
    )
}

export default ShopGameAssets