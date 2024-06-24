import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {updateCache} from "../../utils/updateCache";

export interface CartItem {
  id: number;
  amount: number;
}

export interface CartState {
  value: Array<CartItem>;
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.value.push(action.payload);
      updateCache(state.value);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      let index;
      state.value.forEach((element, idx) => {
        if (element.id == action.payload.id) {
          index = idx;
        }
      });
      state.value.splice(index ? index : 0, 1);
      updateCache(state.value);
    },
    setCart: (state, action: PayloadAction<Array<CartItem>>) => {
      state.value = action.payload;
      updateCache(state.value);
    },
    increment: (state, action: PayloadAction<number>) => {
      for (let index = 0; index < state.value.length; index++) {
        if (state.value[index].id == action.payload) {
          state.value[index].amount++;
        }
      }
      updateCache(state.value);
    },
    decrement: (state, action: PayloadAction<number>) => {
      for (let index = 0; index < state.value.length; index++) {
        if (state.value[index].id == action.payload) {
          state.value[index].amount--;
        }
      }
      updateCache(state.value);
    },
  },
});

export const {addItem, removeItem, setCart, increment, decrement} =
  cartSlice.actions;

export default cartSlice.reducer;
