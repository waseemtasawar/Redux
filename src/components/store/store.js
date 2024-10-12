import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counter"; // Import the reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer for the counter slice
  },
});
