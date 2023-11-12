import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: 1
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
