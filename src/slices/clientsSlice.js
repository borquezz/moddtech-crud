import { createSlice } from "@reduxjs/toolkit";

// Initial slice state
const initialState = {
  clients: [],
  search: "",
};

// Slice creation
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
