import React from "react"
import {svg} from "../../../assets/svg";

const HomeComing = () =>{

    return(
        <section className="home-block home-coming">
            <div className="how-one">
                <div className="container">
                    <div className="content" data-aos="fade-up" data-aos-delay="400">
                        <h3>Coming soon to</h3>
                        <img alt="" src={svg.ComingBrand}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeComing