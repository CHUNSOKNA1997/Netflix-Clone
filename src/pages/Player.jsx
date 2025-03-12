import React, { useState, useEffect } from "react";
import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Player = () => {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState({
    name: "",
    key: "",
  });
  const navigate = useNavigate();

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/movie/${id}/videos?language=en-US`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      if (data.results.length > 0) {
        setMovies(data.results[0]);
      } else {
        setErrorMessage("No video available for this movie.");
      }
    } catch (error) {
      setErrorMessage(`Error fetching data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full px-4">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-full max-w-5xl aspect-video bg-gray-700 rounded-lg"></div>
          <div className="h-6 bg-gray-700 rounded w-48 mt-4"></div>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6">
        <p className="text-red-500 text-center text-lg">{errorMessage}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-16 sm:px-6 relative">
      <button
        className="text-white absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-white rounded-full transition-transform hover:scale-110"
        onClick={() => navigate("/")}
        aria-label="Back to home"
      >
        <CircleArrowLeft
          size={36}
          className="sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      </button>

      <div className="w-full max-w-5xl aspect-video">
        {movies.key ? (
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${movies.key}`}
            title={`${movies.name || "Movie"} trailer`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
            <p className="text-white text-center text-lg px-4">
              No video available for this movie
            </p>
          </div>
        )}
      </div>

      <div className="w-full text-center mt-6">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          {movies.name}
        </h1>
      </div>
    </div>
  );
};

export default Player;
