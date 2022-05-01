import React, {useEffect, useState} from "react"
import DefaultLayout from "../../layouts/DefaultLayout";
import WalletModal from "../../components/molecules/WalletsModal";
import ShopCountDown from "../../components/organisms/Shop/ShopCountdown";
import ShopNft from "../../components/organisms/Shop/ShopNft.jsx";
import {useWeb3React} from "@web3-react/core";
import Aos from "aos"
import ShopGameAssets from "../../components/organisms/Shop/ShopGameAssets";
import {useDispatch} from "react-redux";
import {nftByOwner} from "../../Store/Nft/nftSlice";

const Shop = () => {
    const {account} = useWeb3React()
    const [currentAccount, setCurrentAccount] = useState(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
        })
    }, [])

    useEffect(() => {
        setCurrentAccount(account)
        if (account) dispatch(nftByOwner(account))
    }, [account])




    return (
        <DefaultLayout
            partOfFooterShow={true}
            setCurrentAccount={setCurrentAccount}
        >
            <ShopCountDown/>
            <ShopNft/>
            <ShopGameAssets/>
        </DefaultLayout>
    )
}

export default Shop