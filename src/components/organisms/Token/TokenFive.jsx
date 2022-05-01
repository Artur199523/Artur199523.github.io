import React from "react"
import {svg} from "../../../assets/svg";
import Button from "../../atoms/Button";
import "./style.scss"

const TokenFive = () => {
    return (
        <section className="token-five">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="400">
                    how to <span>buy</span></h2>
                <div className="steps">
                    <div className="step-item" data-aos="fade-right" data-aos-delay="300">
                        <div className="icon">
                            <img alt="" src={svg.T9}/>
                        </div>
                        <strong>01</strong>
                        <p>Get a<br/> Crypto Wallet</p>
                    </div>
                    <div className="step-item" data-aos="fade-right" data-aos-delay="500">
                        <div className="icon">
                            <img alt="" src={svg.T10}/>
                        </div>
                        <strong>02</strong>
                        <p>Fund With<br/> Ethereum</p>
                    </div>

                    <div className="step-item" data-aos="fade-right" data-aos-delay="700">
                        <div className="icon">
                            <img alt="" src={svg.T11}/>
                        </div>
                        <strong>03</strong>
                        <p>Swap On <br/>UniSwap</p>
                    </div>
                </div>
                <div className="control wow fadeInUp" data-aos="fade-up" data-aos-delay="400">
                    <Button
                        href={"https://modernizegames.gitbook.io/kompete-token-whitepaper/guides/how-to-buy-kompete-token"}
                        type={"gold"}
                        text={"view The full guide"}
                    />
                </div>
            </div>
        </section>
    )
}

export default TokenFive