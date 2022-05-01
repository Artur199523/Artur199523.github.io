import React from "react"
import {png} from "../../../assets/png";

const TokenThree = () => {
    return (
        <section className="token-three">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="400">BUY AND SELL GAME
                    ASSETS<br/>at The <span>IN-GAME bazaar</span>
                </h2>
                <div className="thumb" data-aos="fade-up" data-aos-delay="500">
                    <img alt="" src={png.T3}/>
                        <div className="thumb-small">
                            <img alt="" src={png.T4}/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default TokenThree