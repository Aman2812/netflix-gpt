import React, { useEffect } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchMovies from "../components/SearchMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const user = useSelector((store) => store?.user);

  const { searchMovieName, isSearchButtonClicked } = useSelector(
    (store) => store?.search
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      {searchMovieName?.length > 0 && isSearchButtonClicked ? (
        <SearchMovies />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
