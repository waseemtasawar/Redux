import { createSlice } from "@reduxjs/toolkit";

const initialAuthSatae = {
  isAuthantaed: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthSatae,
  reducers: {
    logon: (state) => {
      state.isAuthantaed = true;
    },
    logout: (state) => {
      state.isAuthantaed = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
