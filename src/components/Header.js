import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { toggleGptSerachView } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const showGptSearch = useSelector((store) => store?.gpt.showGptSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSerachView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
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
          )}
          <button
            className="py-2 px-4 mx-4 my-2 rounded-lg text-white bg-purple-800"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-lg"
            src={USER_AVATAR}
            alt="userIcon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
