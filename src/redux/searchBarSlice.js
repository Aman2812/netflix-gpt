import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggleSerachView: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleSerachView } = searchBarSlice.actions;
export default searchBarSlice.reducer;
