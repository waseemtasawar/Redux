import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counter"; // Import the reducer
import authReducer from "./slices/Auth/Auth";
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer for the counter slice
    auth: authReducer,
  },
});
