import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import configSlice from "./configSlice";
import searchBarSlice from "./searchBarSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    search: searchBarSlice,
    config: configSlice,
  },
});

export default appStore;
