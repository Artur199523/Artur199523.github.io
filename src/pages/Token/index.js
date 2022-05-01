import React, {useEffect} from "react"
import Aos from "aos";
import DefaultLayout from "../../layouts/DefaultLayout";
import TokenHero from "../../components/organisms/Token/TokenHero";
import TokenSecond from "../../components/organisms/Token/TokenSecond";
import TokenThree from "../../components/organisms/Token/TokenThree";
import TokenFour from "../../components/organisms/Token/TokenFour";
import TokenFive from "../../components/organisms/Token/TokenFive";
import TokenSix from "../../components/organisms/Token/TokenSix";
import TokenSeven from "../../components/organisms/Token/TokenSeven";
import TokenEight from "../../components/organisms/Token/TokenEight";
import TokenNine from "../../components/organisms/Token/TokenNine";


const Token = () => {
    useEffect(() => {
        Aos.refresh()
    })

    return (
        <DefaultLayout partOfFooterShow={true}>
            <TokenHero/>
            <TokenSecond/>
            <TokenThree/>
            <TokenFour/>
            <TokenFive/>
            <TokenSix/>
            <TokenSeven/>
            <TokenEight/>
            <TokenNine/>
        </DefaultLayout>
    )
}

export default Token