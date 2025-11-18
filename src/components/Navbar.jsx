import React, { useState } from "react";
import logo from "../Images/logo.png";
import scissorIcon from "../Images/scissor.png";
import Vector from "../Images/Vector.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
    setOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md py-2 px-3 md:px-12 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide">
        <img
          src={logo}
          className="max-w-full object-contain h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24"
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-sm items-center">
        {["home", "about", "services", "contact"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer hover:text-yellow-400 flex items-center gap-1 ${
              activeTab === item ? "text-yellow-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {/* Show scissor image only when active */}
            {activeTab === item && (
              <img src={scissorIcon} alt="icon" className="w-4 h-3" />
            )}
          </li>
        ))}
      </ul>
      <div className="relative inline-block">
        {/* Button */}
        <button
          className="hidden md:block border border-white px-5 py-2
            rounded-tl-[25px]
            rounded-br-[40px]
            rounded-bl-[25px]
          "
        >
          BOOK NOW
        </button>
        <img
          src={Vector}
          alt="icon"
          className="absolute top-7  right-2 w-5 h-5 rotate-35 text-white"
        />
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black py-6 text-center text-white transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {["home", "about", "services", "contact"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === item ? "text-yellow-400 font-semibold" : ""
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeTab === item && (
                <img src={scissorIcon} alt="icon" className="w-4 h-3" />
              )}
            </li>
          ))}
        </ul>
        <div className="relative inline-block">
          {/* Button */}
          <button
            className="mt-4 border border-white px-5 py-2
            rounded-tl-[25px]
            rounded-br-[40px]
            rounded-bl-[25px]
          "
          >
            BOOK NOW
          </button>
          <img
            src={Vector}
            alt="icon"
            className="absolute lg:top-7 top-11 right-2 w-5 h-5 rotate-35 text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
