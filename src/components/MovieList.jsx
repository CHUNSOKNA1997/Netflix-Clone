import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MovieList = ({ Title, Category }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef();

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/movie/${
        Category ? Category : "popular"
      }?language=en-US&page=1`;
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
  }, [Category]);
  if (errorMessage) {
    return <div className="text-red-500 px-14">{errorMessage}</div>;
  }

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    scrollElement.addEventListener("wheel", handleWheel);
    return () => scrollElement.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-4xl font-bold ml-14">{Title}</p>
      <div
        className="flex gap-8 px-14 overflow-x-scroll pb-8 hover:cursor-pointer"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {movies.map((movie) => (
          <Link
            to={`/player/${movie.id}`}
            key={movie.id}
            className="flex flex-col gap-2 min-w-[200px] transform transition-transform duration-300 hover:scale-110 pt-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md w-full"
            />
            <p className="text-white truncate">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
