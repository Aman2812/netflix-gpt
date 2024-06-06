import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo, clearTrailerVideo } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearTrailerVideo());
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, dispatch]);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailersData = json?.results.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = trailersData.length ? trailersData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;