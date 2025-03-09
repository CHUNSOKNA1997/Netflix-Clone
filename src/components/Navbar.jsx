import React, { useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Search, ChevronDown, Bell } from "lucide-react";
import profile from "../assets/profile_img.png";

const links = [
  { href: "#Home", name: "Home" },
  { href: "#TV-Shows", name: "TV Shows" },
  { href: "#Movies", name: "Movies" },
  { href: "#New&Popular", name: "New & Popular" },
  { href: "#My-List", name: "My List" },
  { href: "#Browse-By-Language", name: "Browse By Language" },
];

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("bg-black");
      } else {
        navRef.current.classList.remove("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 flex justify-between items-center z-50 w-full h-[100px] transition-colors duration-300 px-14"
    >
      {/* Left Section */}
      <div className="flex items-center space-x-10">
        <img src={logo} alt="logo" className="w-40" />
        <ul className="flex space-x-5">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white hover:text-red-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <Search
          size={24}
          className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
        />
        <span className="text-white">Children</span>
        <Bell
          size={24}
          className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={profile}
              alt="profile_img"
              className="w-10 h-10 rounded-md"
            />
            <ChevronDown
              size={24}
              className="text-white group-hover:text-red-500 transition-colors duration-300"
            />
          </div>

          <div className="absolute top-10 right-0 w-40 bg-[#191919] p-3 py-4 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
            <p className="underline text-white text-center cursor-pointer text-[13px] hover:text-red-500">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
