import React from "react";
import {png} from "../../../assets/png";
import "./style.scss"
import TokenFourMobile from "./TokeFourMobile";

const TokenFour = () =>{

    return(
        <section className="token-four">
            <div className="container">
                <div className="four-desktop">
                    <div className="item">
                        <div className="thumb" data-aos="fade-right" data-aos-delay="400">
                            <img alt="" src={png.T5}/>
                        </div>
                        <div className="des" data-aos="fade-left" data-aos-delay="400">
                            <h3>earn, Purchase &amp; <br/>
                                <span>COLLECT Game ASSETS</span></h3>
                            <p>Get your hands on the coolest game assets by checking the daily shops, completing the
                                Ticket, and racking up game XP through the KOMPETE Fame System. As you progress, you’ll
                                unlock increasingly rare rewards. </p>
                        </div>
                    </div>
                    <div className="item item-fix">
                        <div className="thumb" data-aos="fade-left" data-aos-delay="400">
                            <img alt="" src={png.T6}/>
                        </div>
                        <div className="des" data-aos="fade-right" data-aos-delay="500">
                            <h3>cASH OUT AT THE
                                <br/>
                                    <span>the bazaar</span></h3>
                            <p>The Bazaar marketplace is your opportunity to buy and sell game assets for real money!
                                Scoop up your favorite KOMPETE assets from other players, and then sell to cash out
                                whenever you’re ready!</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="thumb" data-aos="fade-right" data-aos-delay="400">
                            <img alt="" src={png.T7}/>
                        </div>
                        <div className="des" data-aos="fade-left" data-aos-delay="500">
                            <h3>real GAME ASSET<br/>
                                <span>ownership</span></h3>
                            <p>Regardless of if you choose to play with crypto or fiat, KOMPETE wants you to have full
                                ownership of all your game assets. Thanks to the Bazaar Marketplace, the community is
                                able to help you discover the true value of your assets.</p>
                        </div>
                    </div>
                </div>
            </div>
            <TokenFourMobile/>
        </section>
    )
}

export default TokenFour