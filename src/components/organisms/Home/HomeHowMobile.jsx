import React from "react"
import SimpleSlider from "../../molecules/simpleSlider";
import {png} from "../../../assets/png";

const HomeHowMobile = () => {

    const data = {
        number: true,
        page:"home",
        sliderData: [
            {
                img: png.M2_1_Mob,
                textTitle: "Create your kompetitior",
                number: "01",
                text: "Fully customize your KOMPETITOR into whoever you want to be. Your options are limitless with a full character customizer that allows you to morph your face, height, weight, muscle, & more. With over 80 morphable areas you are able to create anyone that you want."
            },
            {
                img: png.M2_2_Mob,
                textTitle: "choose your attributes",
                number: "02",
                text: "Select game mode specific attributes so that you can play the way that you want. There are endless combinations to explore as you find your ideal build. Keep in mind, there are strengths and weaknesses to each playstyle! "
            },
            {
                img: png.M2_3_Mob,
                textTitle: "play your favorite sports",
                number: "03",
                text: "KOMPETE with friends in a variety of trio-based sports, including: Basketball, Battle Royale, Kart Racing, and Golf. Future game modes are top secret for now, but you may find clues!"
            },
        ]
        ,
    }
    return (
        <section className="home-block home-how-mobile">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption">
                        <h2><span>how</span> to kompete</h2>
                    </div>
                </div>
                <SimpleSlider data={data}/>
            </div>
        </section>
    )
}
export default HomeHowMobile