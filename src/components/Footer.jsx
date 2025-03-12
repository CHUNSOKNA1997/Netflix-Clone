import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-10 lg:py-14 px-4 md:px-8 lg:px-14 flex flex-col gap-6 md:gap-10 lg:gap-14 text-[rgba(255,255,255,0.7)]">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center items-center text-center">
        <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-7 w-full max-w-xl">
          <input
            type="text"
            placeholder="Email address"
            className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 bg-[rgba(255,255,255,0.3)] rounded-full focus:outline-none w-full"
          />
          <button
            type="submit"
            className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 rounded-full bg-red-600 hover:bg-red-700 font-semibold text-white flex justify-center items-center whitespace-nowrap"
          >
            Get Started <ChevronRight size={24} className="ml-1 md:ml-2" />
          </button>
        </div>
      </div>

      <p className="w-full underline text-sm md:text-base cursor-pointer">
        Questions? Contact Us
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full underline text-xs sm:text-sm md:text-base">
        <ul className="space-y-2 md:space-y-4">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul className="space-y-2 md:space-y-4">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul className="space-y-2 md:space-y-4">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul className="space-y-2 md:space-y-4">
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact US</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
