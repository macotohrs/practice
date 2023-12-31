import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    text: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    text: (state) => {
      state.text = "aaaaa";
    },
  },
});

export const { increment, decrement, incrementByAmount, text } = counterSlice.actions;
export default counterSlice.reducer;
