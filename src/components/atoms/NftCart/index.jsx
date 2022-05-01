import React from "react"
import {Link} from "react-router-dom";
import {svg} from "../../../assets/svg";
import "./style.scss"

const NftCart = ({img, title, price, link = "", children}) => {
    return (
        <div className={`nft-cart`}>
            <Link to={link}>
                <img alt="nft" src={img}/>
            </Link>
            <div className="nft-content">
                <Link to={link}>
                    <h6 className="nft-content-title">{title}</h6>
                </Link>
                <span className="nft-content-limited">Edition limited</span>
                <div className="nft-content-price">
                    <img alt="" src={svg.EtheriumGold}/>
                    <span >{price} ETH</span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default NftCart