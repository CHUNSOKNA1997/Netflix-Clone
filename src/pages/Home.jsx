import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero_title.png";
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
      </div>
      <Navbar />
    </main>
  );
};

export default Home;
