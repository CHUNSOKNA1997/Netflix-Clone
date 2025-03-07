import React from "react";
import MovieList from "../components/MovieList";

const Movie = () => {
  return (
    <div className="flex flex-col gap-7">
      <MovieList Title="Popular Movies" Category="popular" />
      <MovieList Title="Now Playing" Category="now_playing" />
      <MovieList Title="Top Rated" Category="top_rated" />
      <MovieList Title="Up Coming" Category="upcoming" />
    </div>
  );
};

export default Movie;
