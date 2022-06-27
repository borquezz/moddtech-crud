import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
  search: "",
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setClients, setSearch } = clientsSlice.actions;

export default clientsSlice.reducer;
