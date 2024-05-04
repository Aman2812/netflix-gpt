import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  // Early return :- if movies value is null, it will return from here. It won't go ahead.
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
