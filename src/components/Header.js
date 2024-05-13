import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import LangDropDown from "./LangDropdown";
import SearchBar from "./SearchBar";

const Header = () => {
  const user = useSelector((store) => store?.user);

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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="flex flex-wrap">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        {user && <SearchBar />}
      </div>

      {user && (
        <div className="flex p-2 justify-center">
          <LangDropDown />
          {/* -------------Sign out------------- */}
          <img
            className="w-12 rounded-lg mt-4 h-10"
            src={USER_AVATAR}
            alt="userIcon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
