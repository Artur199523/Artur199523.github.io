import React from "react"
import DefaultLayout from "../../layouts/DefaultLayout";
import MainHero from "../../components/organisms/Home/MainHero";
import HomeHowDesktop from "../../components/organisms/Home/HomeHowDesktop";
import GameMode from "../../components/organisms/Home/HomeMode";
import HomeWelcome from "../../components/organisms/Home/HomeWelcome";
import HomeWhy from "../../components/organisms/Home/HomeWhy";
import HomeGaming from "../../components/organisms/Home/HomeGaming";
import HomeEngine from "../../components/organisms/Home/HomeEngine";
import HomeNews from "../../components/organisms/Home/HomeNews";
import HomeCreate from "../../components/organisms/Home/HomeCreate";
import HomeComing from "../../components/organisms/Home/HomeComing";
import HomeSpacs from "../../components/organisms/Home/HomeSpacs";
import HomeHowMobile from "../../components/organisms/Home/HomeHowMobile"

const Home = () => {


    return (
        <DefaultLayout partOfFooterShow = {true}>
            <MainHero/>
            <HomeHowDesktop/>
            <HomeHowMobile/>
            <GameMode/>
            <HomeWelcome/>
            <HomeWhy/>
            <HomeGaming/>
            <HomeEngine/>
            <HomeNews/>
            <HomeCreate/>
            <HomeComing/>
            <HomeSpacs/>
        </DefaultLayout>
    )
}
export default Home