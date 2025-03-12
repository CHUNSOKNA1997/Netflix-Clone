import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Search, Bell, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const homeNavigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 flex justify-between items-center z-50 w-full transition-colors duration-300 px-4 md:px-8 lg:px-14 h-[70px] md:h-[80px] lg:h-[100px]"
    >
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-24 md:w-32 lg:w-40" />

        <ul className="hidden md:flex space-x-2 lg:space-x-5 ml-4 lg:ml-10">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white text-sm lg:text-base hover:text-red-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
        <Search
          size={20}
          className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300 hidden sm:block"
        />
        <Bell
          size={20}
          className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300 hidden sm:block"
        />
        <div className="relative">
          <p
            className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300 text-sm md:text-base"
            onClick={() => {
              homeNavigate("/login");
            }}
          >
            Sign In
          </p>
        </div>

        <button className="text-white md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] background-input-field z-40 md:hidden">
          <div className="flex flex-col p-5">
            <ul className="flex flex-col space-y-4 mb-8">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-lg block py-2 hover:text-red-500 transition-colors duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6 mt-4">
              <Search
                size={24}
                className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
              />
              <Bell
                size={24}
                className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
