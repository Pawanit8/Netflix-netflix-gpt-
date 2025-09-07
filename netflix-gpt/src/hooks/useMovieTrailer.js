import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer=(movieId)=>{
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // find trailer or fallback to first video
      const trailer =
        json.results.find((video) => video.type === "Trailer" && video.site === "YouTube") ||
        json.results[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

}

export default useMovieTrailer;