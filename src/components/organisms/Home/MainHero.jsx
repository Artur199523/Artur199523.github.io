import React from "react";
import "./style.scss"
import {png} from "../../../assets/png";

const MainHero = () =>{

    return(
    <section className="main-hero">
        <div className="wrap-bg" style={{backgroundImage:`url(${png.Header_02})`}} >
            <div className="title-wrapper">
                <h1 data-aos="fade-up" data-aos-delay="600">an all-in-one <br/> sports game</h1>
            </div>
            <div className="coming-soon-wrapper">
                <div className="coming" data-aos="zoom-in" data-aos-delay="100">
                    <label>Coming Soon To</label>
                    <img alt="" src={png.Coming}/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MainHero