import React from "react";
import VideoBackground from "../components/VideoBackground";
import { useParams } from "react-router-dom";

const Watch = () => {

  const { id } = useParams();

  return (
    <div>
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Watch;