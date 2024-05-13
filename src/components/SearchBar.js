import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/languageConstants";

const SearchBar = () => {
  const languageKey = useSelector((store) => store?.config.language);

  const searchText = useRef(null);

  const handleSearchClick = () => {
    console.log(searchText.current.value);
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
