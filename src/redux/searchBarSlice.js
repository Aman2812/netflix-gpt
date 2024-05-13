import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    searchMovieName: null,
    searchedMovieList: null,
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      const { searchName, searchedMovieList } = action.payload;
      state.searchMovieName = searchName;
      state.searchedMovieList = searchedMovieList;
    },
  },
});

export const { addSearchedMovies } =
  searchBarSlice.actions;
export default searchBarSlice.reducer;
