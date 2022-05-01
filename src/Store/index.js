import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./NewsPosts/postSlice"
import nftReducer from "./Nft/nftSlice"
import authReducer from "./Auth/authSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
        nft: nftReducer,
        auth: authReducer
    }
})