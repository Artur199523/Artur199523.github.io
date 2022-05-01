import React, {useState} from "react";

import ModalWindow from "../../atoms/ModalWindow";
import Button from "../../atoms/Button";

import "./style.scss"
import Input from "../../atoms/Input";


const ProfileListingModal = ({listingModalOpen, isOpenListing, listingNft}) => {
    const [price, setPrice] = useState("")

    const updateNow = () => {
        alert("update now")
    }

    const removeListing = () => {
        listingModalOpen()
    }

    const priceInputHandle = (e) => {
        setPrice(e.target.value)
    }

    return (
        <ModalWindow show={isOpenListing} isShowClose={false} type={"window-sm"}>
            <div className="listing-update">
                <h2>Listing Updates</h2>
                <span>Enter a new price for each listing</span>
                <div className="listing-update_nft">
                    <div className="listing-update_nft_first-block">
                        <div className="listing-update_nft_first-block_img">
                            <img alt="" src={listingNft?.img}/>
                        </div>
                    </div>
                    <div className="listing-update_nft_second-block">
                        <div className="listing-update_nft_second-block_name">
                            <span>
                                {listingNft?.title}
                            </span>
                            <span>
                                Limited Edition
                            </span>
                        </div>

                        <Input
                            type={"number"}
                            view={"inp inp-black inp-xs"}
                            placeholder={"0.00"}
                            onChange={(e)=>priceInputHandle(e)}
                            value={price}
                        />
                    </div>
                </div>
                <div className="listing-update_buttons-block">
                    <Button
                        type={"gold"}
                        onClick={updateNow}
                        text={"update now"}
                    />
                    <div className="listing-update_buttons-block_twins">
                        <Button
                            type={"version-black"}
                            onClick={removeListing}
                            text={"remove listing"}
                        />
                        <Button
                            type={"version-black"}
                            onClick={removeListing}
                            text={"cancel"}
                        />
                    </div>
                </div>
                <div className="listing-update_buttons-block_agree">
                    <p>By clicking “Update Now” you agree to <a href="#">Terms of Service</a></p>
                </div>
            </div>
        </ModalWindow>
    )
}

export default ProfileListingModal