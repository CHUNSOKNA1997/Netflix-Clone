import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";

const Home = () => {
  return (
    <main className="relative background-banner min-h-screen w-full">
      <div className="absolute bottom-[228px] left-[60px] text-white space-y-7 w-1/3">
        <img src={hero} alt="hero_titile" className="w-128" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern instanbul embarks on a quest to save a city from an immortal
          enemy.
        </p>
        <div className="flex gap-5">
          <button className="bg-white flex items-center justify-center px-7 py-3 rounded-md text-black gap-2 hover:cursor-pointer hover:bg-gray-700">
            <Play size={24} />
            <span>Play</span>
          </button>
          <button className="bg-white-opacity flex items-center justify-center px-7 py-3 rounded-md text-white gap-2">
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <Navbar />
    </main>
  );
};

export default Home;
