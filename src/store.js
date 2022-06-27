import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clientsSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
