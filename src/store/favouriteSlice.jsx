import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = favouriteSlice.actions;
export default favouriteSlice.reducer;
