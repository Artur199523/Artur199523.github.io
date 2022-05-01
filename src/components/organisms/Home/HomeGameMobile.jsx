import React from "react";
import SimpleSlider from "../../molecules/simpleSlider";
import {png} from "../../../assets/png";

const HomeGameMobile = () => {

    const data = {
        page:"home",
        sliderData: [
            {
                img: png.M8,
                textTitle: "anyone. anywhere. anytime",
                text: "KOMPETE is a free-to-play game with cross-platform capability, and is available on XBOX, Playstation, PC, Android, & IOS. Regardless of what device you own, you’ll always be able to KOMPETE with your friends free of charge."
            },
            {
                img: png.GuyDribbling,
                textTitle: "buttery smooth, high quality gameplay",
                text: "KOMPETE has been built from the ground up to deliver high-quality multiplayer gameplay, with high performance on any device. KOMPETE has worked hard to ensure a flawless multiplayer experience while maintaining superb technical performance."
            },
            {
                img: png.M10,
                textTitle: "FAIR MONETIZATION WITH REAL Game ASSET OWNERSHIP",
                text: "Justin Meister created KOMPETE out of a pure hatred for pay-to-win games. KOMPETE will never let  monetization affect gameplay! Also, players have real ownership of their game assets, which means you can buy, sell, and trade your game assets for real money!"
            },
        ],
        animation: true
    }
    return (
        <div className="owl-game-mobile">
            <SimpleSlider data={data}/>
        </div>
    )
}

export default HomeGameMobile