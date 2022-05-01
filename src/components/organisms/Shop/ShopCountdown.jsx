import React from "react"
import CountDown from "../../molecules/Countdown";
import "./style.scss"
const ShopCountDown = () => {
    const date = new Date(2022,4,23,10,15);

    return (
        <section className="shop-countdown">
            <CountDown date={date}/>
        </section>
    )
}

export default ShopCountDown