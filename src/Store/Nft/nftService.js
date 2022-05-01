import axios from "axios"

const nftBYOwner = async (hash)=>{
    const response = await axios.get("https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5")
    return response.data
}

const nftForSell = async ()=>{
    const response = await axios.get("https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22degods%22%7D%2C%22%24sort%22%3A%7B%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%2C%22status%22%3A%5B%5D%7D")
    return response.data
}

const myGameAssets = async ()=>{
    const response = await axios.get("https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22degods%22%7D%2C%22%24sort%22%3A%7B%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%2C%22status%22%3A%5B%5D%7D")
    return response.data
}

const myListedItems = async () =>{
    const response = await axios.get("https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22degods%22%7D%2C%22%24sort%22%3A%7B%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%2C%22status%22%3A%5B%5D%7D")
    return response.data
}



const nftService = {
    nftBYOwner,
    nftForSell,
    myGameAssets,
    myListedItems
}

export default nftService


