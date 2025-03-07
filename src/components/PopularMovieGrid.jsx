import React, { useEffect, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const PopularMovieGrid = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(
          `Error fetching data: ${response.status} - ${
            errorData?.status_message || "Unknown error"
          }`
        );
      }

      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.error("Fetch error:", error.message);
      setErrorMessage(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="h-screen w-full ">
        <div className="grid grid-cols-6 gap-4 p-15">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-md"
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovieGrid;
