import React from "react"
import {svg} from "../../../assets/svg";

const HomeWhy = () =>{

    return(
        <section className="home-block home-why">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption" data-aos="fade-up" data-aos-delay="400">
                        <h2><span>why </span>kompete?</h2>
                    </div>
                    <div className="why-list" data-aos="fade-up" data-aos-delay="500">
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_1}/>
                                </div>
                                <p>free-to-<br/>play</p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_2}/>
                                </div>
                                <p>never
                                    <br/>pay-to-win
                                </p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_3}/>
                                </div>
                                <p>cross-platform<br/>play
                                </p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_4}/>
                                </div>
                                <p>cross-<br/>generation</p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_5}/>
                                </div>
                                <p>cross-<br/>progression</p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_7}/>
                                </div>
                                <p>high quality<br/>gameplay</p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_6}/>
                                </div>
                                <p>game asset
                                    <br/>ownership
                                </p>
                            </div>
                        </div>
                        <div className="why-col">
                            <div className="item">
                                <div className="icon">
                                    <img alt="" src={svg.MIcon_8}/>
                                </div>
                                <p>weekly <br/>updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWhy