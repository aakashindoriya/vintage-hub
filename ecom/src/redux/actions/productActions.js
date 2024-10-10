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


export const filterData = (originalData, category, rating, priceRange,brand,inStock) => {

    return originalData.filter((el) => {
        const matchesCategory = !category || el.category === category;
        const matchesRating = !rating || el.totalRating >= rating;
        const matchesPrice = el.price >= priceRange.min && el.price <= priceRange.max;
        const matchesBrand =!brand||el.brand===brand
        const outOfStock=!inStock||el.inStock
        return matchesCategory && matchesRating && matchesPrice&&matchesBrand;
    });
};

