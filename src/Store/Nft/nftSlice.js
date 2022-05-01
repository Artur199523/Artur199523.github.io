import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import nftService from "./nftService";

const initialState = {
    nftInfo: null,
    currentPageNft: null,
    marketPlace:{
        isLoading:false,
        nftArray:[]
    },
    profile:{
        gameAssets:{
            nftArray:null,
        },
        listedItems:{
            nftArray:null,
            currentPageArray:null,
        }
    }
}

//get NFT by owner
export const nftByOwner = createAsyncThunk('nft/byOwner', async (hash) => {
    try {
        return await nftService.nftBYOwner(hash)
    } catch (error) {
        console.log(error)
    }
})

//get NFT for sell
export const nftForSell = createAsyncThunk('nft/forSell',async ()=>{
    try{
        return await nftService.nftForSell()
    }catch(error){
        console.log(error)
    }
})

//get my game Assets
export const myGameAssets = createAsyncThunk("profile/gameAssets",async ()=>{
    try {
        return await nftService.myGameAssets()
    }catch (error) {
        console.log(error)
    }
})

//get my listed items
export const myListedItems = createAsyncThunk("profile/listedItems",async ()=>{
    try {
        return await nftService.myListedItems()
    }catch (error) {
        console.log(error)
    }
})

const nftSlice = createSlice({
    name: "nft",
    initialState,
    reducers: {
        changePage: (state,action) => {
            const {currentButton,maxNft} = action.payload
           state.currentPageNft = state.nftInfo.items.filter((_,index)=>index > maxNft * currentButton - maxNft && index <= currentButton * maxNft)
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(nftByOwner.fulfilled, (state, action) => {
                state.nftInfo = action.payload
                state.currentPageNft = action.payload.items.filter((item, index) => index < 12)
            })
            .addCase(nftForSell.pending,(state)=>{
                state.marketPlace.isLoading = true
            })
            .addCase(nftForSell.fulfilled, (state, action) => {
                state.marketPlace.isLoading = false
                state.marketPlace.nftArray = action.payload.results
            })
            .addCase(myGameAssets.fulfilled,(state ,action)=>{
                    state.profile.gameAssets.nftArray = action.payload.results
            })
            .addCase(myListedItems.fulfilled,(state ,action)=>{
                state.profile.listedItems.nftArray = action.payload.results
            })

    })
})

export const {changePage} = nftSlice.actions
export default nftSlice.reducer