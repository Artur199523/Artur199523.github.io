import React from "react";
import {png} from "../../../assets/png";
import {svg} from "../../../assets/svg";
import "./style.scss"
import Button from "../../atoms/Button";

const TokenHero = () => {
    return (
        <section className="token-hero">
            <div className="container">
                <div className="flex">
                    <div className="description">
                        <h1 data-aos="fade-up" data-aos-delay="600">Kompete Token</h1>
                        <p data-aos="fade-up" data-aos-delay="700">
                            KOMPETE Token is the official marketplace currency for the KOMPETE Bazaar, an in-game
                            secondary NFT
                            marketplace for crypto players.
                        </p>
                    </div>
                    <div className="thumb">
                        <img alt="" src={png.T1} data-aos="fade-left" data-aos-delay="700"/>
                    </div>
                </div>
                <div className="box-white-wrapper">
                    <div className="box-white wow" data-aos="fade-up" data-aos-delay="400">
                        <h2>TOKEN now Deployed on erc-20<br/>
                            <span>NFT mINTING SOON!</span></h2>
                        <div className="button-wrap">
                            <Button
                                href={"https://etherscan.io/token/0x1E0b2992079B620AA13A7c2E7c88D2e1E18E46E9"}
                                type={"version-white"}
                                text={"Contract"}
                            />
                            <Button
                                href={"https://app.uniswap.org/#/swap?outputCurrency=0x1E0b2992079B620AA13A7c2E7c88D2e1E18E46E9"}
                                type={"version-white"}
                                text={"UniSwap"}
                            />
                            <Button
                                href={"https://dexscreener.com/ethereum/0x07840b4825b74cc6ce264bf2743dee647194f49b"}
                                type={"version-white"}
                                text={"Dexscreener"}
                            />
                        </div>
                        <div className="crypto-social">
                            <div className="crypto-social__item">
                                <a className="crypto-social__item-link"
                                   href="https://www.coingecko.com/en/coins/kompete" target="_blank" rel="noreferrer">
                                    <img src={svg.Coingecko} alt="Coingecko logo"/>
                                </a>
                            </div>
                            <div className="crypto-social__item">
                                <a className="crypto-social__item-link"
                                   href="https://coinmarketcap.com/currencies/kompete" target="_blank" rel="noreferrer">
                                    <img src={svg.CoinMarket} alt="Coinmarketcap logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TokenHero