import {png} from "../../../assets/png";
import SimpleSlider from "../../molecules/simpleSlider";
import React from "react";

const TokenFourMobile = () => {

    const data = {
        page:"token",
        sliderData: [
            {
                img: png.T5,
                textTitle:{partOne:"earn, purchase & ",partTwo:"collect game assets"},
                text: "Get your hands on the coolest game assets by checking the daily shops, completing the Ticket, and  racking up game XP through the KOMPETE Fame System. As you progress, you’ll unlock increasingly rare rewards. "
            },
            {
                img: png.T6,
                textTitle:{partOne:"cash out at the",partTwo:"the bazaar"},
                text: "The Bazaar marketplace is your opportunity to buy and sell game assets for real money! Scoop up your favorite KOMPETE assets from other players, and then sell to cash out whenever you’re ready!"
            },
            {
                img: png.T7,
                textTitle:{partOne:"real game assets",partTwo:"ownership"},
                text: "Regardless of if you choose to play with crypto or fiat, KOMPETE wants you to have full ownership of all your game assets. Thanks to the Bazaar Marketplace, the community is able to help you discover the true value of your assets."
            },
        ],
        animation: true
    }
    return (
        <div className="token-four-mobile">
            <SimpleSlider data={data}/>
        </div>
    )
}

export default TokenFourMobile