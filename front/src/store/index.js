import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./appSlice";

const Store = configureStore({
  reducer: { api: apiReducer },
});

export default Store;
