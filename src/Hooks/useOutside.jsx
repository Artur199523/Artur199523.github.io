import React, { useEffect } from "react";


const UseOutSide = (ref,setData) => {
    useEffect(() => {

                function handleClickOutside(event) {
                    if (ref.current && !ref.current.contains(event.target)) {
                        setData(false)
                    }
                }

                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    document.removeEventListener("mousedown", handleClickOutside)
                }

    }, [ref])
}
export default UseOutSide