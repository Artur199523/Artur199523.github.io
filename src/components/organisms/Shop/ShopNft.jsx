import React, {useEffect, useState} from "react";
import {svg} from "../../../assets/svg";
import Button from "../../atoms/Button";
import {png} from "../../../assets/png";
import axios from "axios";

const ShopNft = () => {
    const [currentImg, setCurrentImg] = useState({
        current: 0,
        images: [
            {img: png.Helmet, check: true},
            {img: png.Helmet, check: false},
            {img: png.Helmet, check: false},
            {img: png.Helmet, check: false},
            {img: png.Helmet, check: false}
        ]
    })
    const [ethPrice,setEthPrice] = useState(2.5 * 3100)

    const mintNft = () => {

    }

    const checkNftImg = (i) => {
        let imgCheck = {...currentImg}
        imgCheck.images.forEach(img => img.check = false)
        imgCheck.images[i].check = true
        imgCheck.current = i
        setCurrentImg(imgCheck)
    }

    useEffect(async () => {
        const response = await axios.get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
        setEthPrice(Math.floor(response.data.data.amount * 2.5))
    }, [])

    return (
        <div className="container shop-nft">
            <div className="nft-info-block">
                <div className="nft-item left" data-aos="fade-up" data-aos-delay="200">
                    <div className="nft-item-left">
                        <img src={currentImg.images[currentImg.current].img} alt="" className=""/>
                        <div className="nft-img">
                            {
                                currentImg.images.map((elm, i) =>
                                    <div key={i} onClick={() => checkNftImg(i)}>
                                        <img className={`${elm.check && "current-img"}`} src={elm.img} alt=""/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="nft-item right" data-aos="fade-up" data-wow-delay="300">
                    <div className="nft-item-right">
                        <div className="nft-info">
                            <p className="nft-status">Limited Edition — This item will never be released again.</p>
                            <h2 className="nft-title">Daniel's Helmet #0001</h2>
                            <p className="nft-available">
                                <span>12 Available</span>
                                <span>3 Sold</span></p>
                        </div>
                        <div className="buy">
                            <p className="title">PRICE</p>
                            <div className="buy-info">
                                <img src={svg.EtheriumGold} alt=""/>
                                <span className="eth">2.5</span>
                                <span className="ethPrice">{`($${ethPrice})`}</span>
                            </div>
                        </div>
                        <Button onClick={mintNft} text={"buy"} type="gold"/>
                    </div>
                    <p className="title">DESCRIPTION</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur
                        adipiscing elit. Semper tincidunt a feugiat semper tristique consectetur tristique. Eget
                        libero
                        quis
                        viverra viverra. Integer turpis quis rutrum urna.<br/><br/>Feugiat semper tristique
                        consectetur
                        tristique. Libero quis viverra viverra turpis quis rutrum urna.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopNft