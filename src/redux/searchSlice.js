// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: false,
  },
  reducers: {
    toggleSearch: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
