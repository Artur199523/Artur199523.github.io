import React from "react"
import Button from "../../atoms/Button";
import {png} from "../../../assets/png";

const HomeCreate = () =>{

    return(
        <section className="home-block home-create">
            <div className="how-one">
                <div className="container">
                    <div className="item">
                        <div className="des" data-aos="fade-right" data-aos-delay="400">
                            <h3>created by<br/>
                                <span>modernize games</span>
                            </h3>
                            <div className="thumb-mobile">
                                <img alt="" src={png.M18}/>
                            </div>
                            <p>Justin Meister is an ex pro-gamer that founded Modernize Games in September 2020 after
                                his frustration with the game industry finally boiled over.
                                <br></br>
                                    A year and a half later, Modernize Games is now a team of 15+ developers with a
                                    whole range of specialties and a determination to deliver an industry-changing
                                    multiplayer experience.</p>
                        <Button href={"https://modernizegames.com"} type={"gold"} text={"learn more"}/>
                        </div>
                        <div className="thumb" data-aos="fade-left" data-aos-delay="400">
                            <img alt="" src={png.M18}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCreate