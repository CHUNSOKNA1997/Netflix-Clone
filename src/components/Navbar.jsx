import React from "react";
import logo from "../assets/logo.png";
import { Search, ChevronDown, Bell } from "lucide-react";
import profile from "../assets/profile_img.png";

const links = [
  {
    href: "#Home",
    name: "Home",
  },
  {
    href: "#TV-Shows",
    name: "TV Shows",
  },
  {
    href: "#Movies",
    name: "Movies",
  },
  {
    href: "#New&Popular",
    name: "New & Popular",
  },
  {
    href: "#My-List",
    name: "My List",
  },
  {
    href: "#Browse-By-Language",
    name: "Browse By Language",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center pt-7 mx-15">
        <div className="flex items-center space-x-17">
          <img src={logo} alt="logo" className="w-40" />
          <ul>
            <li className="flex space-x-5">
              {links.map((link) => {
                return (
                  <a
                    href={link.href}
                    className="hover:text-red-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <Search size={24} />
          <span>Children</span>
          <Bell size={24} />
          <img src={profile} alt="profile_img" />
          <ChevronDown size={24} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
