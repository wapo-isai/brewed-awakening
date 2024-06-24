import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  userId: string;
  username: string;
  orders?: Orders[];
}

export interface ProductResponse {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productCalories: number;
  imageUrl: string;
}

export interface Orders {
  orderNumber: number;
  userId: string;
  productIds: Array<number>;
}

let userState: UserResponse = {
  userId: "",
  username: "",
  orders: undefined,
};

const initialState = {
  userState,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<UserResponse>) => {
      state.userState.userId = action.payload.userId;
      state.userState.username = action.payload.username;
      if (action.payload.orders) {
        state.userState.orders = action.payload.orders;
      }
    },
  },
});

export const {setUserState} = userSlice.actions;

export default userSlice.reducer;
