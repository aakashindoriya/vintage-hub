import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts=createAsyncThunk("product/getproducts",async()=>{
    try {
        const {data}= await axios.get(`${import.meta.env.VITE_FAKE_STORE_API}/api/product`)
        return data
    } catch (error) {
        console.log(error)
    }
})


export const filterData=(orignalData,category,rating,pricerange)=>{
    console.log(orignalData,category,rating,pricerange,"in action")
    let result=[]
    if(category&&rating){
        result=orignalData.filter((el)=>el.category===category&&el.totalRating>=rating&&el.price>=pricerange.min&&el.price<=pricerange.max)
        console.log("first")
    }
    else if(category){
        console.log("second")
        result=orignalData.filter((el)=>el.category===category&&el.price>=pricerange.min&&el.price<=pricerange.max)
    }
    else if(rating){
        
        result=orignalData.filter((el)=>el.totalRating>=rating&&el.price>=pricerange.min&&el.price<=pricerange.max)
    }else{
        result=orignalData.filter((el)=>el.price>=pricerange.min&&el.price<=pricerange.max)
    }
    return result
}
