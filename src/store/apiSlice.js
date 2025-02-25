import { createSlice } from "@reduxjs/toolkit";

// https://registration-system-api.onrender.com
// http://localhost:7000

const initialState = { link: "https://registration-system-api.onrender.com" };

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
