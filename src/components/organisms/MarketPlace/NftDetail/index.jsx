import React from "react"
import "../../../molecules/NFTdetailsTemplate/style.scss"
import {useSelector} from "react-redux";
import LoadSpinner from "../../../../components/atoms/LoadSpinner";
import NFTDetailsTemplate from "../../../../components/molecules/NFTdetailsTemplate";


const NftDetail = ({currentNft}) => {
    const {nftArray,} = useSelector(state => state.nft.marketPlace)

    return (
        <>
            {
                nftArray.length ?
                    <NFTDetailsTemplate
                        currentNft={currentNft}
                    />
                    :
                    <div className="spinner-container">
                        <LoadSpinner/>
                    </div>
            }

        </>
    )
}

export default NftDetail