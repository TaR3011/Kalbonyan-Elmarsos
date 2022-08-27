import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitngItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!exisitngItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exisitngItem.quantity++;
        exisitngItem.totalPrice = exisitngItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const exisitngItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (exisitngItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitngItem.quantity--;
        exisitngItem.totalPrice = exisitngItem.totalPrice - exisitngItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
