import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";

const LangDropDown = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div>
      <select
        className="m-5 py-2 w-32 px-6 bg-gray-500 text-white rounded-lg"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((item) => {
          return (
            <option key={item.identifier} value={item.identifier}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default LangDropDown;
