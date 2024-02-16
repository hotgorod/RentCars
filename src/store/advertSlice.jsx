import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const advertSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    fetchAdverts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchAdverts } = advertSlice.actions;
export default advertSlice.reducer;

export function getAdverts() {
  return async function getAdvertThunk(dispatch, getState) {
    const data = await fetch("https://653a2c90e3b530c8d9e942e1.mockapi.io/adverts");
    const result = data.json();
    dispatch(fetchAdverts(result));
  };
}
