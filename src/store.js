import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clientsSlice";

// Reducers
// const reducer = combineReducers({
//   authReducer,
//   enterpriseReducer,
//   projectReducer,
// });

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
