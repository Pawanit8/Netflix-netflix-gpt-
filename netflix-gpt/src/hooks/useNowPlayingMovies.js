import {API_OPTIONS}from '../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies=()=>{
     const dispatch=useDispatch();
  const getNowPLayingMOvies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json= await data.json();
    
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPLayingMOvies()
  },[])
}

export default useNowPlayingMovies;