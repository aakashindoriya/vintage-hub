import { createSlice } from "@reduxjs/toolkit";
import { getCurrency } from "../actions/currencyActions";


const currencySlice=createSlice({
    name:"currency",
    initialState:{
        currencies:{},
        seletedRate:1
    },
    reducers:{
        selectCurrency:(state,action)=>{
            state.seletedRate=state.currencies[action.payload]
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getCurrency.fulfilled,(state,action)=>{
            state.currencies=action.payload
        })
    }
})

export const {selectCurrency} =currencySlice.actions




export default currencySlice.reducer