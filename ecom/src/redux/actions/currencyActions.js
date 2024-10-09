import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCurrency=createAsyncThunk("currency/getcurrency",async()=>{
    try {
        let {data}=await axios(import.meta.env.VITE_CURRENCY_API,{
            headers:{
                "x-rapidapi-host":"currency-conversion-and-exchange-rates.p.rapidapi.com",
                "x-rapidapi-key":import.meta.env.VITE_CURRENCY_KEY
              }
        })
        let INR=data.rates.INR
        let AUD=data.rates.AUD
        return {INR,AUD}
    } catch (error) {
        console.log(error)
    }
})