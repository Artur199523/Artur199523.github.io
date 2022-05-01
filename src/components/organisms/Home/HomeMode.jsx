import React from "react"
import Carousel3dSlider from "../../molecules/3dCarouselSlider";
import {png} from "../../../assets/png";


const GameMode = () => {

    const data = {
        title:{partOne:"game",partTwo:"modes"},
        slideData:[
            {img:png.Golf,text:"golf"},
            {img:png.BattleRoyal,text:"battle royal"},
            {img:png.Basketball,text:"basketball"},
            {img:png.KartRace,text:"kart race"},
            {img:png.ShushingGuy,text:"more coming soon"},
        ]
    }
    return (
        <section className="home-block home-mode">
            <div className="how-one">
                <Carousel3dSlider data = {data}/>
            </div>
        </section>
    )
}
export default GameMode