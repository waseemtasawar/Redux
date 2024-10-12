import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    showCounter: true,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toogle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

// Export the actions
export const counterActions = counterSlice.actions;

// Export the reducer (this is what we need for the store)
export default counterSlice.reducer;
