import React, {useEffect, useState} from "react"
import axios from "axios";

const FaqAskQuestion = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
       async function eth () {
            const response = await axios.get("https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%09faqs%20%7B%0A%20%20%20%20question%2C%0A%20%20%20%20answer%0A%20%20%7D%0A%7D%0A")
            response.data.data.faqs.forEach(faq => faq.active = false)
            setData(response.data.data.faqs)
        }
       eth()
    }, [])

    const showContent = (i) => {
        const copy = [...data]
        copy[i].active = !copy[i].active
        setData(copy)
    }

    return (
        <section className="faq-main">
            {
                data?.map((faq, i) =>
                    <div key={i} className={`faq-item  ${faq.active && "active"}`}>
                        <div>
                            <div className={`faq-item-title ${faq.active && "active"}`}>
                                <h3>{faq.question}</h3>
                            </div>
                            <div className={`faq-item-content ${faq.active && "active"}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                        <div className="more" onClick={()=>showContent(i)}>
                            {
                                faq.active ? <p>-</p>: <p>+</p>
                            }

                        </div>
                    </div>
                )
            }
        </section>
    )
}
export default FaqAskQuestion