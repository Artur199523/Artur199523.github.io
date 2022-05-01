import React from "react";
import "./style.scss"
import {png} from "../../../assets/png";


const TokenSeven = () =>{
    return(
        <section className="token-seven">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="400">Tokenomics</h2>
                <div className="tokenomics">
                    <div className="item" data-aos="fade-left" data-aos-delay="400">
                        <div className="thumb">
                            <img alt="" src={png.T12}/>
                        </div>
                        <h3>Token <span>Supply</span></h3>
                        <p>There are a total of 1 billion KOMPETE Tokens in circulation with a wallet limit of 1.00% to
                            help ensure a more equitable distribution among holders. </p>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-delay="400">
                        <div className="thumb">
                            <img alt="" src={png.T13}/>
                        </div>
                        <h3>Token <span>TAX</span></h3>
                        <p>A 10% development and marketing tax ensures KOMPETE has the development
                            resources it needs. Tax is assesssed on all swaps (buys/sells).</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenSeven