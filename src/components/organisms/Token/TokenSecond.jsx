import React from "react";
import {png} from "../../../assets/png";

const TokenSecond = () =>{
    return(
        <section className="token-second">
            <div className="container">
                <div className="flex">
                    <div className="thumb" data-aos ="fade-right" data-aos-delay="400">
                        <img alt="" src={png.T2}/>
                    </div>
                    <div className="description" data-aos ="fade-left" data-aos-delay="500">
                        <h3>The first game to bring <span>fiat and crypto Players together</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenSecond