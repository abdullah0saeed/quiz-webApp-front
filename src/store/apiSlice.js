import { createSlice } from "@reduxjs/toolkit";

// https://quiz-web-backend-server.onrender.com
// http://localhost:7000

const initialState = { link: "https://quiz-web-backend-server.onrender.com" };

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
