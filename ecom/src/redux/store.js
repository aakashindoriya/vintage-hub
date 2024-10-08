import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'

//code for redux
export default configureStore({
  reducer: {
    product:productSlice
  }
})