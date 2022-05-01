import React from "react";
import {png} from "../../../assets/png";
import "./style.scss"

const HomeHowDesktop = () => {
    return (
        <section className="home-block home-how-desktop">
            <div className="container">
                <div className="block-caption" data-aos="fade-up" data-aos-delay="400">
                    <h2><span>how</span> to kompete</h2>
                </div>
            </div>
            <div className="how-one">
                <div className="container">
                    <div className="flex">
                        <div className="des" data-aos="fade-right" data-aos-delay="500">
                            <div className="des-inner">
                                <strong>01</strong>
                                <h3>Create Your KOMPETITOR</h3>
                                <p>Fully customize your KOMPETITOR into whoever you want to be. Your options are
                                    limitless with a full character customizer that allows you to morph your face,
                                    height, weight, muscle, &amp; more. With over 80 morphable areas you are able to
                                    create anyone that you want.</p>
                            </div>
                        </div>
                        <div className="thumb" data-aos="fade-left" data-aos-delay="400">
                            <img alt="" src={png.M2_1}/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="how-two">
                <div className="wrap-bg">
                    <div className="container">
                        <div className="flex">
                            <div className="thumb" data-aos="fade-right" data-aos-delay="500">
                                <img alt="" src={png.M3_1}/>
                            </div>
                            <div className="des" data-aos="fade-left" data-aos-delay="400">
                                <div className="des-inner">
                                    <strong>02</strong>
                                    <h3>choose Your attributes</h3>
                                    <p>Select game mode specific attributes so that you can play the way that you want.
                                        There are endless combinations to explore as you find your ideal build. Keep in
                                        mind, there are strengths and weaknesses to each playstyle!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="how-three">
                <div className="wrap-bg">
                    <div className="container">
                        <div className="flex">
                            <div className="des" data-aos="fade-right" data-aos-delay="500">
                                <div className="des-inner">
                                    <strong>03</strong>
                                    <h3>play your <br/>favorite SPORTS</h3>
                                    <p>KOMPETE with friends in a variety of trio-based sports, including: Basketball,
                                        Battle Royale, Kart Racing, and Golf. Future game modes are top secret for now,
                                        but you may find clues!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHowDesktop