import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import AuthSlice from './slices/AuthSlice'

//code for redux
export default configureStore({
  reducer: {
    product:productSlice,
    auth: AuthSlice
  }
})