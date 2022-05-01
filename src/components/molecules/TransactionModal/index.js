import React, {useEffect, useState} from "react"
import ModalWindow from "../../atoms/ModalWindow";
import "./style.scss"
import {svg} from "../../../assets/svg";
import Pie from "../../atoms/ProgressCyrcle";

const TransactionModal = () => {
    const [transactionTime, setTransactionTime] = useState(30)
    let timeInterval

    useEffect(() => {
        transactionTimeDown()
        timeInterval = setInterval(transactionTimeDown, 1000)

        return (() => {
            clearInterval(timeInterval)
        })
    }, [])

    const transactionTimeDown = () => {
        setTransactionTime(prev => {
                if (prev > 1) {
                    return prev - 1
                }
                clearInterval(timeInterval)
                return 0
            }
        )
    }


    return (
        <ModalWindow show={true} type={"window-sm"} >
            <div className="transaction-block">
                <div className="transaction-block_loading">
                    <div>
                        <Pie circleOne={"#565656"} circleTwo={"#BA8926"} transactionTime={transactionTime}/>
                    </div>
                    <span>Do not close this window</span>
                    <p>After wallet approval,your transaction will be finished in about {transactionTime}s.</p>
                </div>
                <div className="transaction-block_social">
                    <div>
                        <p>While you are waiting.Join our <a href="#">discord</a> & <a href="#">twitter</a> community
                            for
                            weekly giveaways.</p>
                    </div>
                    <div>
                        <div>
                            <a href="#">
                                <div>
                                    <img alt="" src={svg.Discord}/>
                                </div>
                                Discord
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div>
                                    <img alt="" src={svg.TwitterBlue}/>
                                </div>
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWindow>
    )
}

export default TransactionModal