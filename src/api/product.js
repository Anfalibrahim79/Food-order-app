import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiHost = import.meta.env.VITE_APP_API_HOST




export const getProduct = createAsyncThunk("product/getProduct", async () =>{
    const response = await axios.get(`${apiHost}/api/products`)
    const  data = response.data.data
    return data
})