import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";

import ProfileSettingModal from "../../components/organisms/Profile/ProfileSettingModal";
import ProfileListingModal from "../../components/organisms/Profile/ProfileListingModal";
import AddressCopyButton from "../../components/atoms/AddressCopyButton/addressCopyButton";
import TabContent from "../../components/molecules/TabPanels/TabContent";
import Pagination from "../../components/molecules/Pagination/Pagination";
import TabNavItem from "../../components/molecules/TabPanels/TabNavItem";
import TabBlock from "../../components/molecules/TabPanels/TabBlock";
import LoadSpinner from "../../components/atoms/LoadSpinner";
import Button from "../../components/atoms/Button";
import NftCart from "../../components/atoms/NftCart";
import DefaultLayout from "../../layouts/DefaultLayout";

import {myGameAssets, myListedItems} from "../../Store/Nft/nftSlice";
import {addressReduction, nftArrayFilter} from "../../Utils/utils";

import {svg} from "../../assets/svg";
import "./style.scss"

import Aos from "aos";
import SuccessListing from "../../components/organisms/Profile/SuccessListing";


const Profile = () => {
    const {gameAssets, listedItems} = useSelector(state => state.nft.profile)
    const [gameAssetsResult, setGameAssetsResult] = useState(null)
    const [listedItemsResult, setListedItemsResult] = useState(null)
    const [currentButtonGame, setCurrentButtonGame] = useState(1)
    const [currentButtonListed, setCurrentButtonListed] = useState(1)
    const [isOpenSetting, setIsOpenSetting] = useState(false)
    const [isOpenListing, setIsOpenListing] = useState({open: false, nft: null})
    const [activeTab, setActiveTab] = useState("tab1");
    const isConnectWallet = sessionStorage.getItem("provider")
    const maxNft = 12
    const gameAssetsPageCount = Math.ceil(gameAssets.nftArray?.length / maxNft)
    const listedItemsPageCount = Math.ceil(listedItems.nftArray?.length / maxNft)
    const {active, account} = useWeb3React()
    const address = account && addressReduction(account, 10)
    const dispatch = useDispatch()

    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
        })
    }, [])

    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
        })

        activeTab === "tab1" && !gameAssets.nftArray && dispatch(myGameAssets())
        activeTab === "tab3" && !listedItems.nftArray && dispatch(myListedItems())
    }, [activeTab, dispatch])

    useEffect(() => {
        activeTab === "tab1" &&
        setGameAssetsResult(nftArrayFilter(currentButtonGame, maxNft, gameAssets.nftArray))
        activeTab === "tab3" &&
        setListedItemsResult(nftArrayFilter(currentButtonListed, maxNft, gameAssets.nftArray))
    }, [active, gameAssets.nftArray, listedItems.nftArray, currentButtonGame, currentButtonListed])

    const listingModalOpen = (nft = "") => {
        setIsOpenListing(prev => {
            return {...prev, open: !prev.open, nft: nft}
        })
    }

    return (
        <DefaultLayout isFooter={true} partOfFooterShow={true}>
            {
                isConnectWallet ?
                    !active ?
                        <div className="block-center">
                            <LoadSpinner/>
                        </div>
                        :
                        <section className="profile">
                            <div className="container">
                                <div className="profile-main">
                                    <div className="profile-main_avatar_block">
                                        <div className="profile-main_avatar_block_img">
                                            <img alt="" src={svg.Avatar}/>
                                            <span><img src={svg.AvatarCheck} alt=""/></span>
                                        </div>
                                        <h1 className="profile-main_avatar_block_name">
                                            Justin
                                        </h1>
                                        <div className="profile-main_avatar_block_address">
                                            <div className={"profile-main_avatar_block_address_nickName"}>@justin12345
                                            </div>
                                            <AddressCopyButton
                                                account={account}
                                                address={address}
                                            />
                                        </div>
                                        <div className="profile-main_avatar_block_edit">
                                            <Button
                                                onClick={() => setIsOpenSetting(true)}
                                                type={"version-black"}
                                            >
                                                <img alt="" src={svg.Edit}/>edit profile
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-nft">
                                    <TabBlock>
                                        <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}>
                                            <img alt="" src={svg.MenuFilterGold}/>
                                            Game Assets
                                        </TabNavItem>
                                        <TabNavItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}>
                                            <img alt="" src={svg.Activity}/>
                                            Activity
                                        </TabNavItem>
                                        <TabNavItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}>
                                            <img alt="" src={svg.Listed}/>
                                            Listed
                                        </TabNavItem>
                                    </TabBlock>
                                    <div className="profile-nft_content">
                                        <TabContent id="tab1" activeTab={activeTab}>
                                            {
                                                gameAssetsResult ?
                                                    <>
                                                        <div className="display-grid">
                                                            {
                                                                gameAssetsResult?.map((nft) =>
                                                                    <NftCart
                                                                        key={nft.id}
                                                                        img={nft.img}
                                                                        title={nft.title}
                                                                        price={nft.price}
                                                                    />
                                                                )
                                                            }
                                                        </div>
                                                        <Pagination
                                                            page={gameAssetsPageCount}
                                                            currentButton={currentButtonGame}
                                                            setCurrentButton={setCurrentButtonGame}
                                                        />
                                                    </>
                                                    :
                                                    <div className="profile-nft_content_noResult">
                                                        <div>No Game Assets</div>
                                                    </div>
                                            }
                                        </TabContent>
                                        <TabContent id="tab2" activeTab={activeTab}>
                                        </TabContent>
                                        <TabContent id="tab3" activeTab={activeTab}>
                                            {
                                                listedItemsResult ?
                                                    <>
                                                        <div className="display-grid">
                                                            {
                                                                listedItemsResult?.map((nft) =>
                                                                    <NftCart
                                                                        key={nft.id}
                                                                        img={nft.img}
                                                                        title={nft.title}
                                                                        price={nft.price}
                                                                    >
                                                                        <div className="nft-cart_btn">
                                                                            <Button
                                                                                type={"gold"}
                                                                                onClick={() => listingModalOpen(nft)}
                                                                                text={"update listing"}
                                                                            />
                                                                        </div>
                                                                    </NftCart>
                                                                )
                                                            }
                                                        </div>
                                                        <Pagination
                                                            page={listedItemsPageCount}
                                                            currentButton={currentButtonListed}
                                                            setCurrentButton={setCurrentButtonListed}
                                                        />
                                                    </>
                                                    :
                                                    <div className="profile-nft_content_noResult">
                                                        <div>No Listed Items</div>
                                                    </div>
                                            }
                                            <ProfileListingModal
                                                isOpenListing={isOpenListing.open}
                                                listingNft={isOpenListing.nft}
                                                listingModalOpen={listingModalOpen}
                                            />
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                            <ProfileSettingModal
                                isOpenSetting={isOpenSetting}
                                setIsOpenSetting={setIsOpenSetting}
                                address={address}
                                account={account}
                            />
                            {/*<SuccessListing*/}
                            {/*    success={true}*/}
                            {/*/>*/}
                        </section>
                    :
                    <div className="block-center">
                        Connect wallet to see your profile page.
                    </div>
            }
        </DefaultLayout>
    )
}
export default Profile