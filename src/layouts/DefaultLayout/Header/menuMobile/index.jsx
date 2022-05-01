import React from "react"
import {Link} from "react-router-dom";

import {svg} from "../../../../assets/svg";
import "./styles.scss"

const MenuMobile = ({open,openMenu}) =>{
    return(
        <div className={`menu-mobile ${open ? "open" : ""}`}>
            <div className="menu-mobile_header">
                <div className="menu-mobile_header_logo"><img src={svg.Logo} alt=""/></div>
                <div className="menu-mobile_header_btn-close"><img src={svg.CloseSmall} onClick={()=>openMenu()} alt=""/></div>
            </div>
            <div className="inner">
                <div className="container">
                    <div className="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/bazaar">Bazaar</Link></li>
                            <li><Link to="/locker">Locker</Link></li>
                            <li><Link to="/token">Token</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/faq">faq</Link></li>
                            <li><a href="https://modernizegames.com/" target="_blank" rel="noreferrer">team</a></li>
                        </ul>
                    </div>
                    <div className="social">
                        <a href="https://t.me/KompeteGameEntryPortal" target="_blank" rel="noreferrer"
                           className="telegram">
                            <span></span>
                        </a>
                        <a href="https://twitter.com/KompeteOfficial" target="_blank" rel="noreferrer"
                           className="twitter">
                            <span></span>
                        </a>
                        <a href="https://www.facebook.com/KOMPETE-103959058829176" rel="noreferrer" target="_blank"
                           className="facebook">
                            <span></span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCmBfQMHrrqzVNkZ-fhW4fLA" target="_blank"
                           rel="noreferrer" className="youtube">
                            <span></span>
                        </a>
                        <a href="https://www.tiktok.com/@kompeteofficial?" target="_blank" rel="noreferrer"
                           className="tictok">
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuMobile
