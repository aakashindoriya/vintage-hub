 import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../actions/apiAuthActions";


const apiAuthSlice=createSlice({
    name:"apiAuth",
    initialState:{
        user:null,
        status: 'idle',
        isAuth:false,
        error: null,
        message:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(signup.fulfilled,(state,action)=>{
            state.user=action.payload.user
            state.status="success"
            state.message=action.payload.message
        }),
        builder.addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload.user
            state.isAuth=true,
            state.status="success"
            state.message=action.payload.message
            
        })
    }

})


export default apiAuthSlice.reducer