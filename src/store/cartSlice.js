import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("addToCart dari redux", action.payload);

      const isItemExist = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (isItemExist) {
        isItemExist.quantity++;
        return;
      }
      state.value.push({ ...action.payload, quantity: 1 });
    },
    deleteCart: (state, action) => {
      const filterCart = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = filterCart;
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
