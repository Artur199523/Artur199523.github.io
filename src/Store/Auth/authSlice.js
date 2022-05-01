import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

const initialState = {
    register: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    }
}

// Register user
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extrareducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
                // state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                // state.user = null
            })
    }
})

export default authSlice.reducer