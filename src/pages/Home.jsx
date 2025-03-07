import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";
import PopularMovieGrid from "../components/PopularMovieGrid";

const Home = () => {
  return (
    <main className="relative background-banner bg-opacity-50 h-screen w-full">
      <Navbar />
      <div className="absolute bottom-77 left-16 text-white space-y-7 w-1/3">
        <img src={hero} alt="hero_title" className="w-full max-w-lg" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save a city from an immortal
          enemy.
        </p>
        <div className="flex gap-5">
          <button className="bg-white flex items-center justify-center px-7 py-3 rounded-md text-black gap-2 hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300">
            <Play size={24} />
            <span>Play</span>
          </button>
          <button className="bg-gray-700 bg-opacity-70 flex items-center justify-center px-7 py-3 rounded-md text-white gap-2 hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300">
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 mb-[-165px] w-full space-y-5 ">
        <p className="text-4xl font-bold uppercase px-14">popular movies</p>
        <PopularMovieGrid />
      </div>
    </main>
  );
};

export default Home;
