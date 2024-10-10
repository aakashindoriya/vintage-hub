import { createSlice } from "@reduxjs/toolkit";
import { filterData, getProducts } from "../actions/productActions";


const productSlice=createSlice({
    name:"product",
    initialState:{
       products:[],
       filtered:[],
       loading:false,
       error:false
    },reducers:{
        filter:(state,action)=>{
            let result=filterData(action.payload.products,action.payload.category,action.payload.rating,action.payload.pricerange)
            state.filtered=result
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.error=false
            state.products=action.payload
        }).addCase(getProducts.rejected,(state)=>{
            state.error=true
        })
    }   

})
export const {filter} =productSlice.actions
export default productSlice.reducer