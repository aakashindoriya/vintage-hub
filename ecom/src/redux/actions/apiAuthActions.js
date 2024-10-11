import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup=createAsyncThunk("authApi/signup",async(creads)=>{
try {
    let {data}=await axios.post(`${import.meta.env.VITE_FAKE_STORE_API}/api/user/register`,{...creads},{
        withCredentials:true
    })
    return data;
} catch (error) {
    console.log(error)
}
})

export const login=createAsyncThunk("authApi/login",async(creads)=>{
    
    try {
        let {data}=await axios.post(`${import.meta.env.VITE_FAKE_STORE_API}/api/user/login`,{...creads,"role":"user"},{
            withCredentials:true,
        })
        return data;
    } catch (error) {
        console.log(error)
    }
    })