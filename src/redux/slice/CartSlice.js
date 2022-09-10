import { createSlice } from "@reduxjs/toolkit";

const initialState = [];



const CartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      if (state.includes(action.payload)) {
        state.quantity++;
      }
      state.push(action.payload);
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
