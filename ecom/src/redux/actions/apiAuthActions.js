import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup=createAsyncThunk("authApi/signup",async(creads)=>{
try {
    let {data}=await axios.post(`${import.meta.env.VITE_FAKE_STORE_API}/api/user/register`,{...creads},{
        withCredentials:true
    })
    console.log(data)
    return data;
} catch (error) {
    console.log(error)
}
})
