import React, {useEffect, useState} from "react"
import "./style.scss"

const CountDown = ({date}) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = months[date.getMonth()]
    const d = date.getDate()
    const y = date.getFullYear()
    const h = date.getHours()
    const mi = date.getMinutes()

    const [timeLeft, setTimeLeft] = useState({})

    let timeInterval

    useEffect(() => {
        calculateTimeLeft()
        timeInterval = setInterval(calculateTimeLeft, 1000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])


    function calculateTimeLeft() {
        let difference = date - new Date()
        let time = {}
        if (difference > 0) {
            time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }

            setTimeLeft(time)
        } else {
            time = {
                days: "0",
                hours: "0",
                minutes: "0",
                seconds: "0",
            }
            setTimeLeft(time)
            clearInterval(timeInterval)
        }
    }


    return (
        <div className="countdown">
            <span className="date">Sale Ends {m} {d}, {y}, at {h}:{mi} am PST</span>
            <div className="numbers">
                <div className="num-card">
                    <span className="num">{timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}</span>
                    <span className="num-label">Days</span>
                </div>
                <span className="divider">:</span>
                <div className="num-card">
                    <span className="num">{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</span>
                    <span className="num-label">Hours</span>
                </div>
                <span className="divider">:</span>
                <div className="num-card">
                    <span className="num">{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}</span>
                    <span className="num-label">mins</span>
                </div>
                <span className="divider">:</span>
                <div className="num-card">
                    <span className="num"
                          id="secs">{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</span>
                    <span className="num-label">secs</span>
                </div>
            </div>
        </div>
    )
}

export default CountDown