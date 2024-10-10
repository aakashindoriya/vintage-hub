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
        filter: (state, action) => {
            const { products, category, rating, pricerange,brand,inStock } = action.payload;
        
            if (!products?.length) {
                state.filtered = [];
                return;
            }
        
            state.filtered = filterData(products, category, rating, pricerange,brand,inStock);
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