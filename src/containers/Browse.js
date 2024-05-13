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
  const searchName = useSelector((store) => store?.search.searchMovieName);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      {searchName?.length > 0 ? (
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
