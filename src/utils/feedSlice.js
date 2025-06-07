/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
    deleteFeed: (state, payload) => {
      return null;
    },
  },
});

export const { addFeed, removeFeed,deleteFeed } = feedSlice.actions;

export default feedSlice.reducer;
