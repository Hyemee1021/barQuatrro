// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./redux/menuSlice";
export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});
