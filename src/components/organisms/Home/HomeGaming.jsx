import React from "react"
import {svg} from "../../../assets/svg";
import {png} from "../../../assets/png";
import HomeGameMobile from "./HomeGameMobile";

const HomeGaming = () => {

    return (
        <section className="home-block home-gaming">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption" data-aos="fade-up" data-aos-delay="400">
                        <h2><span>Next Generation </span>Gaming</h2>
                    </div>
                    <div className="owl-game">
                        <div className="item">
                            <div className="des" data-aos="fade-right" data-aos-delay="400">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_9}/>
                                </div>
                                <h3>anyone. anywhere. anytime
                                </h3>
                                <p>KOMPETE is a free-to-play game with cross-platform capability, and is available on
                                    XBOX, Playstation, PC, Android, &amp; IOS. Regardless of what device you own, you’ll
                                    always be able to KOMPETE with your friends free of charge.</p>
                            </div>
                            <div className="thumb" data-aos="fade-left" data-aos-delay="500">
                                <div className="inner">
                                    <img alt="" src={png.M8}/>
                                </div>
                            </div>
                        </div>
                        <div className="item item-fix">
                            <div className="des" data-aos="fade-right" data-aos-delay="400">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_10}/>
                                </div>
                                <h3>buttery smooth,<br/> high quality gameplay</h3>
                                <p>KOMPETE has been built from the ground up to deliver high-quality multiplayer
                                    gameplay, with high performance on any device. KOMPETE has worked hard to ensure a
                                    flawless multiplayer experience while maintaining superb technical performance.</p>
                            </div>
                            <div className="thumb" data-aos="fade-left" data-aos-delay="500">
                                <div className="inner">
                                    <img alt="" src={png.GuyDribbling}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="des" data-aos="fade-right" data-aos-delay="400">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_11}/>
                                </div>
                                <h3>FAIR MONETIZATION WITH REAL Game ASSET OWNERSHIP</h3>
                                <p>Justin Meister created KOMPETE out of a pure hatred for pay-to-win games. KOMPETE
                                    will never let monetization affect gameplay! Also, players have real ownership of
                                    their game assets, which means you can buy, sell, and trade your game assets for
                                    real money!</p>
                            </div>
                            <div className="thumb" data-aos="fade-left" data-aos-delay="400">
                                <div className="inner">
                                    <img alt="" src={png.M10}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeGameMobile/>
            </div>
        </section>
    )
}

export default HomeGaming
