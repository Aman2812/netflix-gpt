import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const SearchMovies = () => {

  const { searchMovieName, searchedMovieList } = useSelector(
    (store) => store?.search
  );

  return (
    <div className="py-40 px-11 bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-3xl py-16 md:py-4  text-white  text-center">
        You Searched For : {searchMovieName}
      </h1>
      <div className="flex flex-wrap justify-center">
        {searchedMovieList?.map((movie) => (
          <div className="p-1">
            <Link key={movie?.id} to={"/watch/" + movie?.id}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchMovies;