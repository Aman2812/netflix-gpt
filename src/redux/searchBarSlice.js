import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    searchMovieName: null,
    searchedMovieList: null,
    isSearchButtonClicked: false,
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      state.searchedMovieList = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchMovieName = action.payload;
    },
    searchButtonClicked: (state, action) => {
      state.isSearchButtonClicked = action.payload;
    },
  },
});

export const { addSearchedMovies, addSearchText, searchButtonClicked } =
  searchBarSlice.actions;
export default searchBarSlice.reducer;
