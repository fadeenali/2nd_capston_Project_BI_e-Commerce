import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = state.cart.splice(0, state.length);
    },

    increaseQuantity: (state, action) => {
      // console.log(action.payload.amount);

      let cartItem = state.cart.find((item) => item.id === action.payload.id);
      cartItem.amount = cartItem.amount + 1;
      console.log(cartItem);
    },
    decreaseQuantity: (state, action) => {
      // console.log(action.payload.amount);

      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      cartItem.amount = cartItem.amount - 1;
      console.log(cartItem);
    },

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;

      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
