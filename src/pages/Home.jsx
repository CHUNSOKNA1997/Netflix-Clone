import React from "react";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import hero from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";

const Home = () => {
  return (
    <main className="background-banner bg-opacity-50 h-screen w-full">
      <Navbar />

      <div className="pt-32 px-15 text-white space-y-7 w-1/3">
        <img src={hero} alt="hero_title" className="w-full max-w-lg" />
        <p>
          Hundreds of cash-strapped players accept a strange invitation to
          compete in children's games. Inside, a tempting prize awaits — with
          deadly high stakes.
        </p>
        <div className="flex gap-5">
          <a
            href="https://www.youtube.com/watch?v=lQBmZBJCYcY"
            className="bg-white flex items-center justify-center px-7 py-3 rounded-md text-black gap-2 hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300"
          >
            <Play size={24} />
            <span>Play</span>
          </a>
          <a
            href="https://www.netflix.com/tudum/articles/squid-game-season-2-confirmed"
            className="bg-gray-700 bg-opacity-70 flex items-center justify-center px-7 py-3 rounded-md text-white gap-2 hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300"
          >
            <Info size={24} />
            <span>More Info</span>
          </a>
        </div>
      </div>

      <div className="mt-16 space-y-7">
        <MovieList Title="Popular Movies" Category="popular" />
        <MovieList Title="Now Playing" Category="now_playing" />
        <MovieList Title="Top Rated" Category="top_rated" />
        <MovieList Title="Up Coming" Category="upcoming" />
      </div>
    </main>
  );
};

export default Home;
