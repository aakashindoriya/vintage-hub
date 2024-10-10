import { createSlice } from "@reduxjs/toolkit";
import { getCurrency } from "../actions/currencyActions";


const currencySlice=createSlice({
    name:"currency",
    initialState:{
        currencies:{},
        seletedRate:1,
        symbol:"$"
    },
    reducers:{
        selectCurrency:(state,action)=>{
            if(action.payload==="USD"){
                state.seletedRate=1
                state.symbol="$"
            }else{
                state.seletedRate=state.currencies[action.payload]
                state.symbol=action.payload==="AUD"?"AU$":"₹"
            }
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