import React, {useEffect, useState} from "react";
import DefaultLayout from "../../../layouts/DefaultLayout";
import NftDetail from "../../../components/organisms/MarketPlace/NftDetail";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {nftForSell} from "../../../Store/Nft/nftSlice";

const NftBuyAndSell = () =>{

    const [currentNft, SetCurrentNft] = useState({})
    const {nftArray,} = useSelector(state => state.nft.marketPlace)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!nftArray.length) {
            dispatch(nftForSell())
        }
        SetCurrentNft(nftArray.find(elm => elm.mintAddress === id))

    }, [id, nftArray, dispatch])

    return(
        <DefaultLayout isFooter={false}>
            <NftDetail currentNft={currentNft}/>
        </DefaultLayout>
    )
}
export default NftBuyAndSell