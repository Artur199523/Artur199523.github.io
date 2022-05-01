import React  from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Token from "./pages/Token";
import NewsPost from "./pages/News/NewsPosts";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import MarketPlace from "./pages/MarketPlace";
import NftBuyAndSell from "./pages/MarketPlace/NftDetail";
import Profile from "./pages/Profile";
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/token" element={<Token/>}/>
                <Route path="/news/:id" element={<NewsPost/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/bazaar" element={<MarketPlace/>}/>
                <Route path="/item-detailS/:id" element={<NftBuyAndSell/>}/>
                <Route path="/item-details/sell/:id" element={<NftBuyAndSell/>}/>
                <Route path="/locker" element={<Profile/>}/>
            </Routes>
        </Router>
    )
}

export default Routers