import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favouriteSlice";
import advertSlice from "./advertSlice";

const store = configureStore({
    reducer: {
    favourite: favouriteSlice,
      adverts: advertSlice,
  },
});
export default store;