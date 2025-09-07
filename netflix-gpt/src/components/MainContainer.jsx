import React from 'react'
import { useSelector } from 'react-redux'
import VideoTittle from './VideoTittle'
import VideoBackground from './VideoBackground'

function MainContainer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies) return; // safeguard

  // Pick a random movie
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;


  return (
    <div>
      <VideoTittle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
