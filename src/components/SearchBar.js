import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/languageConstants";

const SearchBar = () => {

  const languageKey = useSelector((store) => store?.config.language);

  const searchText = useRef(null);

  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
  };

  return (
    <div className="px-32">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-2 m-4 w-72 rounded-lg"
          type="text"
          placeholder={language[languageKey].gptSearchPlaceHolder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
