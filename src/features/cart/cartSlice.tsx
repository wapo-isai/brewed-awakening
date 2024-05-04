import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface CartState {
  value: Array<number>;
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index);
    },
    setCart: (state, action: PayloadAction<Array<number>>) => {
      state.value = action.payload;
    },
  },
});

export const {addItem, removeItem, setCart} = cartSlice.actions;

export default cartSlice.reducer;
