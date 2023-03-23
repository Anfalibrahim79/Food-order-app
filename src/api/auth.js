import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../config";

export const loginUser = async(data) =>{
    return await axios.post(`${config.apihost}/auth/login`, data)
}
export const registerUser = createAsyncThunk("auth"/"register", async(data) =>{
    return await axios.post(`${config.apihost}/auth/register`, data)
})