import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-150 flex flex-col justify-center p-14 gap-14 text-[rgba(255,255,255,0.7)]">
      <div className="flex flex-col gap-17 justify-center items-center">
        <p className="text-white font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-7">
          <input
            type="text"
            placeholder="Email address"
            className="px-12 py-4 bg-[rgba(255,255,255,0.3)] rounded-full focus:outline-none"
          />
          <button
            type="submit"
            className="px-12 rounded-full button-footer font-semibold text-white flex justify-center items-center"
          >
            Get Started <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <p className="w-[1fr] underline">Questions? Contact Us</p>

      <div className="flex items-center justify-between w-full pr-72 underline">
        <ul className="space-y-4">
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

        <ul className="space-y-4">
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

        <ul className="space-y-4">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corperate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>

        <ul className="space-y-4">
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
