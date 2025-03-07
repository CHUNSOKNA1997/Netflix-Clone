import React, { useState, useEffect } from "react";
import { CircleArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom"; // To get movie ID from URL

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
  const [movies, setMovies] = useState({
    name: "",
    key: "",
    publish_at: "",
    typeof: "",
  });

  const fetchMovies = async () => {
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
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [id]);

  if (errorMessage) {
    return <div className="text-red-500 px-14">{errorMessage}</div>;
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <CircleArrowLeft
        size={42}
        className="text-white absolute top-24 left-6 hover:cursor-pointer"
        onClick={() => window.history.back()}
      />
      {movies.key ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${movies.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white">No video available</p>
      )}
      <div className="absolute bottom-24 flex justify-center w-full px-12 font-semibold text-white">
        <h1>{movies.name}</h1>
      </div>
    </div>
  );
};

export default Player;
