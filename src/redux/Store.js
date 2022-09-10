import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import CartSlice from "./slice/CartSlice";
const store = configureStore({
  reducer: {
    ProductSlice,
    CartSlice,
  },
});

export default store;
