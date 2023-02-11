import { createSlice } from "@reduxjs/toolkit";

const initialState = { link: "http://localhost:7000" };

const apiSlice = createSlice({
  name: "apiAdress",
  initialState,
  reducers: {
    setlink: (state, action) => {
      state.link = action.payload;
    },
  },
});

export default apiSlice.reducer;
export const { setlink } = apiSlice.actions;
