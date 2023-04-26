import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: "" };

const variablesSlice = createSlice({
  name: "variablesSlice",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default variablesSlice.reducer;
export const { setMessage } = variablesSlice.actions;
