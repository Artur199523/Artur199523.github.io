import React, {useEffect} from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Aos from "aos"
import FaqHero from "../../components/organisms/FAQ/FaqHero";
import FaqAskQuestion from "../../components/organisms/FAQ/FaqAskQuestion";

const FAQ = () => {
    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
        })
    }, [])

    return (
        <DefaultLayout partOfFooterShow={true}>
            <FaqHero/>
            <FaqAskQuestion/>
        </DefaultLayout>
    )
}

export default FAQ