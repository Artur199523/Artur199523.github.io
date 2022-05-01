import React from "react"
import {png} from "../../../assets/png";


const HomeWelcome = () =>{

    return(
        <section className="home-block home-welcome">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption" data-aos="fade-up">
                        <h2>Welcome to <br/> <span>Mahzookoo Island</span></h2>
                    </div>
                    <div className="box-map" data-aos="fade-up" data-aos-delay="400">
                        <img alt="" src={png.M6} className="desktop"/>
                            <img alt="" src={png.M6_Mob} className="mobile"/>
                    </div>
                    <div className="flex">
                        <div className="des" data-aos="fade-right" data-aos-delay="400">
                            <h3>One Island. <br/>All the sports.</h3>
                            <p>Mahzookoo Island is the home of KOMPETE.
                                Here you’ll find basketball courts, race tracks, and
                                golf courses spread across a Battle Royale-style landscape.</p>
                            <p>&nbsp;</p>
                            <p>The island will grow weekly with the addition
                                of new playable locations for future game modes!</p>
                        </div>
                        <div className="thumb" data-aos="fade-right" data-aos-delay="400">
                            <h3>One Island. <br/> All the sports.</h3>
                            <img alt="" src={png.M7_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWelcome