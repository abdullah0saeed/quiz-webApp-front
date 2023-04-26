import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import variablesReducer from "./variablesSlice";

const Store = configureStore({
  reducer: { api: apiReducer, variables: variablesReducer },
});

export default Store;
