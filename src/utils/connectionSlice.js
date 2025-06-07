/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeConnections: (state, action) => {
      return null;
    },
    deleteConnections: (state, payload) => {
      return null;
    },
  },
});

export const {addConnections , removeConnections , deleteConnections} = connectionSlice.actions;

export default connectionSlice.reducer;