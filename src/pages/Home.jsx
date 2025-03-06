import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_OPTIONS = {
  method: "GET",
  header: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Home = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching data, try again later!");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main className="relative background-banner min-h-screen w-full">
      <Navbar />
      <div className="absolute bottom-[228px] left-[60px] text-white space-y-7 w-1/3">
        <img src={hero} alt="hero_titile" className="w-128" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern instanbul embarks on a quest to save a city from an immortal
          enemy.
        </p>
        <div className="flex gap-5">
          <button className="bg-white flex items-center justify-center px-7 py-3 rounded-md text-black gap-2 hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300">
            <Play size={24} />
            <span>Play</span>
          </button>
          <button className="bg-white-opacity flex items-center justify-center px-7 py-3 rounded-md text-white gap-2 hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300">
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
