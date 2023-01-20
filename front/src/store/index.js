import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";

const Store = configureStore({
  reducer: { api: apiReducer },
});

export default Store;
