import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import {
  addSearchText,
  addSearchedMovies,
  searchButtonClicked,
} from "../redux/searchBarSlice";

const SearchBar = () => {
  const languageKey = useSelector((store) => store?.config.language);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const handleSearchChange = () => {
    const searchName = searchText?.current?.value;
    dispatch(addSearchText(searchName));
    if (!searchName) {
      dispatch(searchButtonClicked(false));
    }
  };

  const handleSearchClick = async () => {
    const searchName = searchText?.current?.value;
    if (!searchName) {
      dispatch(searchButtonClicked(false));
    } else {
      dispatch(searchButtonClicked(true));
    }
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current?.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    const searchedMovieList = json?.results;
    dispatch(addSearchedMovies(searchedMovieList));
  };

  return (
    <div className="py-2 md:py-6 px-8 md:px-0">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 mx-2 w-full md:w-72 rounded-lg"
          type="text"
          placeholder={language[languageKey].gptSearchPlaceHolder}
          onChange={handleSearchChange}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
