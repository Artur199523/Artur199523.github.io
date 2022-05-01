import React from "react";
import "./style.scss"
import {png} from "../../../assets/png";

const TokenNine = () =>{
    return(
        <section className="token-nine">
            <div className="coin c1">
                <img alt="" src={png.C1}/>
            </div>
            <div className="coin c2">
                <img alt="" src={png.C2}/>
            </div>
            <div className="coin c3">
                <img alt="" src={png.C3}/>
            </div>
            <div className="coin c4">
                <img alt="" src={png.C4}/>
            </div>
            <div className="coin c5">
                <img alt="" src={png.C5}/>
            </div>
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="400">
                    <span>kompete token</span><br/> Why Is it needed?</h2>
                <div className="flex">
                    <div className="des" data-aos="fade-right" data-aos-delay="400">
                        <h3>A Completely<br/><span>Decentralized Market</span></h3>
                        <p>KOMPETE is utilizing the blockchain in order to give players full control over their game
                            assets. We believe that should include the chance to buy and sell your game assets with
                            other players who are willing to pay for them.</p>
                        <p>By integrating KOMPETE Token as the sole means for transacting at the Bazaar, KOMPETE is able
                            to provide players with the ability to “cash out” from their game assets. Along the way,
                            KOMPETE Token generates funds for future development by facilitating these marketplace
                            transactions.</p>
                    </div>
                    <div className="thumb" data-aos="fade-left" data-aos-delay="500">
                        <img alt="" src={png.T15}/>
                    </div>
                </div>
                <div className="book-financial" data-aos="fade-up" data-aos-delay="400">
                    <h3>financial <span>disclaimer</span></h3>
                    <p>KOMPETE Token should not be viewed as a security, or any other type of investment. KOMPETE Token
                        is intended only as a utility token for facilitating trades at the Bazaar Marketplace. You
                        should not expect to profit from holding KOMPETE Token. </p>
                </div>
            </div>
        </section>
    )
}
export default TokenNine