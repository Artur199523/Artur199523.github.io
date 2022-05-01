import React from "react";
import "./style.scss"
import Button from "../../atoms/Button";
import {png} from "../../../assets/png";

const TokenEight = () =>{
    return(
        <section className="token-eight">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="400">
                    Have You Read <br/>Our <span>whitePaper?</span></h2>
                <div className="book wow fadeInDown" data-aos="fade-down" data-aos-delay="400">
                    <img alt="" src={png.T142}/>
                </div>
                <div className="book-box wow fadeIn" data-aos="fade" data-aos-delay="400">
                    <h3><span>whitePaper v1 </span> released</h3>
                    <div className="flex">
                        <p>For a full breakdown of the game vision, technical details, and our plans for the future, be
                            sure to read our WhitePaper!</p>
                        <div className="button-wrap">
                            <Button
                                href={"https://kompete.gitbook.io/kompete-token-whitepaper/"}
                                text={"read now"}
                                type={"gold"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  TokenEight