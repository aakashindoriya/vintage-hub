import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";
//code for redux
export default configureStore({
  reducer: {
    product: productSlice,
    blog: blogSlice,
  },
});
