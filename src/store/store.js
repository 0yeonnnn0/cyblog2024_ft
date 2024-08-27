import { configureStore, createSlice } from "@reduxjs/toolkit";

let isLoggedIn = createSlice({
  name: "isLoggedIn",
  initialState: false,
  reducers: {
    logIn() {
      return true;
    },
    logOut() {
      return false;
    },
  },
});

export let { logIn, logOut } = isLoggedIn.actions;

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedIn.reducer,
  },
});
