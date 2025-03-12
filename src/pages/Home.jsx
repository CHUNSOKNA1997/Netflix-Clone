import React from "react";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import hero from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";

const Home = () => {
  return (
    <main className="background-banner h-screen w-full">
      <Navbar />
      <div className="pt-20 md:pt-24 lg:pt-32 px-4 sm:px-8 md:px-12 lg:px-15 text-white space-y-4 md:space-y-5 lg:space-y-7 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img
          src={hero}
          alt="hero_title"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
        <p className="text-sm md:text-base">
          Hundreds of cash-strapped players accept a strange invitation to
          compete in children's games. Inside, a tempting prize awaits — with
          deadly high stakes.
        </p>
        <div className="flex gap-3 md:gap-4 lg:gap-5">
          <a
            href="https://www.youtube.com/watch?v=lQBmZBJCYcY"
            className="bg-white flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-7 py-2 md:py-3 rounded-md text-black gap-1 md:gap-2 text-sm md:text-base hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300"
          >
            <Play size={20} className="hidden sm:block" />
            <Play size={16} className="sm:hidden" />
            <span>Play</span>
          </a>
          <a
            href="https://www.netflix.com/tudum/articles/squid-game-season-2-confirmed"
            className="bg-gray-700 bg-opacity-70 flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-7 py-2 md:py-3 rounded-md text-white gap-1 md:gap-2 text-sm md:text-base hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300"
          >
            <Info size={20} className="hidden sm:block" />
            <Info size={16} className="sm:hidden" />
            <span>More Info</span>
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16 space-y-4 md:space-y-5 lg:space-y-7">
        <MovieList Title="Popular Movies" Category="popular" />
        <MovieList Title="Now Playing" Category="now_playing" />
        <MovieList Title="Top Rated" Category="top_rated" />
        <MovieList Title="Up Coming" Category="upcoming" />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
