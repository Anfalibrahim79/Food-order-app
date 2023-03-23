import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {config} from "../config";

console.log(config.apihost);



export const getProduct = createAsyncThunk("product/getProduct", async () =>{
    const response = await axios.get(`${config.apihost}/api/products`)
    const  data = response.data.data
    return data
})