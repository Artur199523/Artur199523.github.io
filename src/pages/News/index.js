import React, {useEffect} from "react"
import DefaultLayout from "../../layouts/DefaultLayout";
import NewsHero from "../../components/organisms/News/NewsHero";
import NewsLatest from "../../components/organisms/News/NewsLatest";
import Aos from "aos";

const News = () => {

    useEffect(()=>{
        Aos.init({
            offset:180,
            easing: 'ease-in-sine',
            duration:350,
            once:false,
            startEvent: 'DOMContentLoaded',
        })

    },[])



    return (
        <DefaultLayout partOfFooterShow={true}>
            <NewsHero/>
            <NewsLatest/>
        </DefaultLayout>
    )
}
export default News