export const nftArrayFilter = (currentButton, maxNft, nftArray) => {
    return nftArray?.filter((_, index) => index > maxNft * currentButton - maxNft && index <= currentButton * maxNft)
}

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

export const addressReduction = (address, number) => {
    let addressPartSecond = address.split("").splice(address.length - 4, address.length).join("")
    let addressPartFirst = address.split("").splice(0, number).join("")

    return addressPartFirst + "..." + addressPartSecond
}

export const validateEmail = (email) => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return email.match(mailFormat)
}

export const randomToken = (maxLimit) => {
    let token = ""
    const tokenFormat = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789"

    for (let i = 0; i < 60; i++) {
        let randomNumber = Math.floor(Math.random() * maxLimit)
        token += tokenFormat[randomNumber]
    }

    return token
}