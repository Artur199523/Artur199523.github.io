import React from "react"
import "./style.scss"
import {svg} from "../../../assets/svg";
import {png} from "../../../assets/png";

const Footer = ({partOfFooterShow}) => {
    return (
        <footer className="footer" >
            {
                partOfFooterShow && <div className="bottom" >
                    <div className="wrap-bg">
                        <div className="container">
                            <h2 data-aos="fade-up">follow us
                                on <br/><span>social media</span>
                            </h2>
                            <div className="social" data-aos="fade-up" data-aos-delay="400">
                                <a href="https://t.me/KOMPETEgameportal" target="_blank" rel="noreferrer" className="telegram">
                                    <span></span>
                                </a>
                                <a href="https://twitter.com/KompeteGame" target="_blank"  rel="noreferrer" className="twitter">
                                    <span></span>
                                </a>
                                <a href="https://www.facebook.com/KOMPETE-103959058829176" target="_blank" rel="noreferrer"
                                   className="facebook">
                                    <span></span>
                                </a>
                                <a href="https://www.youtube.com/channel/UCmBfQMHrrqzVNkZ-fhW4fLA" target="_blank" rel="noreferrer"
                                   className="youtube">
                                    <span></span>
                                </a>
                                <a href="https://www.tiktok.com/@kompeteofficial?" target="_blank" rel="noreferrer" className="tictok">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <img src={png.FollowUs} className="bottom__bg" alt=""/>
                    </div>
                </div>
            }
            <div className="container" data-aos="fade-in" data-aos-delay="200">
                    <div className="flex">
                        <div className="brand" >
                            <a href="https://modernizegames.com" target="_blank" rel="noreferrer">
                                <img alt="" src={svg.FooterLogo}/>
                            </a>
                        </div>
                    </div>
                    <div className="allright" >
                        <p>© 2022 Modernize Games, KOMPETE and any other logos or trademarks of Modernize Games. All
                            Rights
                            Reserved.</p>
                    </div>
                    <div className="menu-footer-second">
                        <ul>
                            <li><a href="https://modernizegames.com/privacy" target="_blank" rel="noreferrer">privacy</a></li>
                            <li><a href="https://modernizegames.com/terms" target="_blank" rel="noreferrer">terms</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer">cookies</a></li>
                        </ul>
                    </div>
                </div>
        </footer>
    )
}
export default Footer