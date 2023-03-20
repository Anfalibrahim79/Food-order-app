import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../api/product";


const productSlice = createSlice({
    name : "product",
    initialState : {
        data: [],
        isLoading: false,
        isError: null,
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isError = action.isError
                state.isLoading= false
            })
    }
    
   
})


export default productSlice.reducer