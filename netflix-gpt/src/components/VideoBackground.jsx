import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
      {trailerVideo && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=${trailerVideo?.key}`}
          title="Movie Trailer"
          allow="autoplay; fullscreen"
        ></iframe>
      )}
    </div>
  );
}

export default VideoBackground;
