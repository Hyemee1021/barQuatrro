// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./redux/menuSlice.js";
import searchSlice from "./redux/searchSlice.js";
export const store = configureStore({
  reducer: {
    menu: menuSlice,
    search: searchSlice,
  },
});
