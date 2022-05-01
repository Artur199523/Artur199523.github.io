import React from "react"
import {png} from "../../../assets/png";

const HomeEngine = () => {

    return(
        <section className="home-block home-engine">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption" data-aos="fade-up" data-aos-delay="400">
                        <h2>made on <span>unreal engine 5</span></h2>
                    </div>
                    <div className="item">
                        <div className="thumb" data-aos="fade-right" data-aos-delay="400">
                            <div className="inner"><img alt="" src={png.M11}/></div>
                        </div>
                        <div className="des" data-aos="fade-left" data-aos-delay="400">
                            <h3>The Best <span>Game<br/> Development engine</span></h3>
                            <p>KOMPETE is built on the world’s most powerful game engine, Unreal Engine 4, and will soon
                                migrate to the upgraded Unreal Engine 5.</p>
                            <p>&nbsp;</p>
                            <p>Unreal Engine has a long history of being the engine to develop some of the most popular
                                multiplayer games in the world.</p>
                            <p>&nbsp;</p>
                            <p>Unreal Engine gives the KOMPETE development team ‘every tool in the shop’ to create an
                                immersive playscape that integrates sound, lighting, virtual effects, realistic physics,
                                and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeEngine