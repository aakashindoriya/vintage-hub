import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";
import cartSlice from "./slices/cartSlice";
//code for redux
export default configureStore({
  reducer: {
    product: productSlice,
    blog: blogSlice,
    cart:cartSlice
  },
});
