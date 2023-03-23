import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auttSlice/authSlice";
import productSlice from "./ProductSlice/productSlice";



const store = configureStore({
    reducer : {
        product : productSlice,
        auth : authSlice
        
    }
})

export default store