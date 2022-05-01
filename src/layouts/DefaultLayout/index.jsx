import React, {useEffect} from "react"
import {useLocation} from "react-router-dom";
import Aos from "aos"

import Wrapper from "../PageWrapper";
import Header from "./Header";
import Footer from "./Footer";

import "aos/dist/aos.css"


const DefaultLayout = ({children, partOfFooterShow, walletModalToggle,setCurrentAccount,isFooter=true}) => {
    const location = useLocation()

    useEffect(() => {
        Aos.init({
            offset: 180,
            easing: 'ease-in-sine',
            duration: 350,
            once: false,
            startEvent: 'load',
        })

    },[])

    useEffect(()=>{
        window.scroll(0,0)
        window.history.scrollRestoration = 'manual'
    },[location.pathname])

    return (
        <Wrapper>
            <Header walletModalToggle={walletModalToggle}/>

                {children}

            { isFooter && <Footer partOfFooterShow={partOfFooterShow}/>}
        </Wrapper>
    )
}

export default DefaultLayout