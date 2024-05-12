import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { toggleSerachView } from "../redux/searchBarSlice";
import LangDropDown from "./LangDropdown";
import SearchBar from "./SearchBar";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const showSearch = useSelector((store) => store?.search.showSearch);

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

  const handleSearchClick = () => {
    dispatch(toggleSerachView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          {showSearch && (
            <>
              <SearchBar />
              <LangDropDown />
            </>
          )}
          {/* ----------search btn----------- */}
          <button
            className="m-4 py-2 w-40 rounded-lg text-white bg-purple-500"
            onClick={handleSearchClick}
          >
            {showSearch ? "Homepage" : "Search Movies"}
          </button>

          {/* -------------Sign out------------- */}
          <img
            className="w-12 rounded-lg mt-4 h-10"
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
