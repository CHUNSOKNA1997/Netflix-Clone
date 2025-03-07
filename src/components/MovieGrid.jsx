import React, { useEffect, useRef, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MovieGrid = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/movie/${category}?language=en-US&page=1`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setErrorMessage(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (errorMessage) {
    return <div className="text-red-500 px-14">{errorMessage}</div>;
  }
  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div>
      <div
        className="flex gap-5 px-14 overflow-x-scroll pb-8 hover:cursor-pointer"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <p className="text-4xl font-bold uppercase px-14">popular movies</p>
        {movies.map((movie) => (
          <div key={movie.id} className="flex flex-col gap-2 min-w-[200px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md w-full"
            />
            <p className="text-white truncate">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
