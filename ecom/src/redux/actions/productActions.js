import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts=createAsyncThunk("product/getproducts",async(limit="")=>{
    try {
        const {data}= await axios.get(`${import.meta.env.VITE_FAKE_STORE_API}/products?limit=${limit}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

