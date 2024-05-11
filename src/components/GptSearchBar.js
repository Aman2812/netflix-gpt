import React from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/languageConstants";

const GptSearchBar = () => {
  
  const languageKey = useSelector((store) => store?.config.language);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={language[languageKey].gptSearchPlaceHolder}
        />
        <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
