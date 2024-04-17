import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counterSlice",
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      return state + 1;
    },
    decrease: (state, action) => {
      return state - 1;
    },
  },
});

export default counter;
export const { increase, decrease } = counter.actions;
