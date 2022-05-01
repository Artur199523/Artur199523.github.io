import React, {memo, useEffect, useState} from "react";
import {copyToClipboard} from "../../../Utils/utils";

const AddressCopyButton = ({address, account}) => {
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        if (isClick) {
            const timer = setTimeout(() => setIsClick(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isClick])

    const copyAddress = () => {
        copyToClipboard(account)
        setIsClick(true)
    }

    return (
        <button onClick={() => copyAddress()}>{!isClick ? address : "Copied!"}</button>
    )
}

export default memo(AddressCopyButton)