import React, {useState} from "react"
import "./style.scss"

const Accordion = ({svgLeft,title,children,svgRight,open = false,bodyBorder = true}) => {
    const [isOpen,setIsOpen] = useState(open)
    return (
        <div className="custom-accordion">
            <div className="custom-accordion-item">
                <h2 className="custom-accordion-header">
                    <button className="custom-accordion-button" onClick={()=>setIsOpen(!isOpen)}>
                        <span>
                            <img src={svgLeft} alt=""/>
                            {title}
                        </span>
                        <span>
                            <img className={isOpen ? "openIcon" : ""} src={svgRight} alt=""/>
                        </span>
                    </button>
                </h2>
                <div className={`custom-accordion-body ${isOpen ? "according-open":""} ${bodyBorder ? "body-border" :""}`}>
                    <div className="custom-according-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accordion