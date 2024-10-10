 import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../actions/apiAuthActions";


const apiAuthSlice=createSlice({
    name:"apiAuth",
    initialState:{
        user:null,
        status:'false',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(signup.fulfilled,(state,action)=>{
            console.log(action.payload)
        })
    }

})


export default apiAuthSlice.reducer