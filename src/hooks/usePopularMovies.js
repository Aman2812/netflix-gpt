import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  
  const popularMovies = useSelector((store) => store?.movies.popularMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    !popularMovies && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
