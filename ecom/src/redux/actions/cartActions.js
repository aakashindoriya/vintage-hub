import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTocart=createAsyncThunk("cart/addtocart",async(product)=>{
    //we need 
    // "productId": "66f18c7e3ebaaeac81783c36",
    //  "quantity": 1,
    //  "attributes": {  } 
    try {
        let {data}=axios.post(`${import.meta.env.VITE_FAKE_STORE_API}/api/product`,{...product},{
            withCredentials:true
        })
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getCart=createAsyncThunk("cart/getcart",async()=>{
    try {
        let {data}=axios.get(`${import.meta.env.VITE_FAKE_STORE_API}/api/cart/get`,{
            withCredentials:true
        })
        return data
    } catch (error) {
        console.log(error)
    }
})