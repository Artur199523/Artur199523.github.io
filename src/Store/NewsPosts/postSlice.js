import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import postService from "./postService"

const initialState = {
    firstThreePosts: null,
    firstNinePosts: null,
    allPosts:null,
    postContent:null,
    isLoading:false,
}

//get first three posts
export const threePosts = createAsyncThunk('news/threePosts',async()=>{
    try{
        return await postService.threePosts()
    }catch(error){
        console.log(error)
    }
})

//get first nine posts
export const ninePosts = createAsyncThunk('news/ninePosts',async()=>{
    try{
        return await postService.ninePosts()
    }catch(error){
        console.log(error)
    }
})

//get all posts
export const allPosts = createAsyncThunk('news/allPosts',async()=>{
    try{
        return await postService.allPosts()
    }catch(error){
        console.log(error)
    }
})

//get current post content
export const currentPostContent = createAsyncThunk('news/post/content',async(id)=>{
    try{
        return await postService.currentPostContent(id)
    }catch(error){
        console.log(error)
    }
})

export const postSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder) =>{
        builder
            .addCase(threePosts.fulfilled, (state, action) => {
                state.firstThreePosts = action.payload.data
            })
            .addCase(ninePosts.fulfilled, (state, action) => {
                state.firstNinePosts = action.payload.data
            })
            .addCase(allPosts.pending, (state => {
                state.isLoading = true
            }))
            .addCase(allPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.allPosts = action.payload.data
            })
            .addCase(currentPostContent.fulfilled, (state, action) => {
                state.postContent = action.payload
            })
    }
})
export default postSlice.reducer