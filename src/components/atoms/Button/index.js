import React from "react";
import "./style.scss"
import {Link} from "react-router-dom";

const Button = ({onClick, href, text, type, route,children}) => {

    return (
        <>
            <button onClick={() => onClick && onClick()}
                    className={`button ${type}`}>
                {
                    !onClick ?
                        href ?
                            <a href={href} target="_blank" rel="noreferrer"> <span>{text ? text : children}</span></a> :
                            <Link to={route}><span>{text}</span></Link> : <span>{text ? text : children}</span>
                }
            </button>
        </>
    )
}

export default Button

