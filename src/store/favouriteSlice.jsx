import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = favouriteSlice.actions;
export default favouriteSlice.reducer;