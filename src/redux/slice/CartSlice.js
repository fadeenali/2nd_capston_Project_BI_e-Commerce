import { createSlice } from "@reduxjs/toolkit";

const initialState = []

 const CartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers:{

    addToCart: (state, action) => {
      state.push(action.payload);
    },
  
    removeFromCart: (state,action) =>{
      state = state.filter((item)=> item.id !=action.payload)
    }
  }

});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
