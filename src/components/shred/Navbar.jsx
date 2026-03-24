import React, { useState } from "react";
import { GiSprout } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>,
    <Link to="/solutions">Solutions</Link>,
    <Link to="/blog">Blog</Link>,
    <Link to="/contact">Contact Us</Link>,
    <Link to="/dashboard">Dashboard</Link>,
  ];

  return (
    <div className="">
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] container bg-black backdrop-blur-md z-50 border-b border-gray-100 py-2 rounded-4xl">
        <div className="  flex mx-2 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#4CAF50] flex items-center justify-center text-white">
              <GiSprout className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              Agri<span className="text-primary">Learn</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg transition-colors hover:border-white hover:border-b-2 pb-1"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex">
            <Link
              to="/login"
              className="bg-[#3D7A41] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-lg font-medium hover:bg-[#346636] transition-colors"
            >
              <PiLockKeyOpenBold />
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-100 py-4 gap-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg transition-colors hover:border-white hover:border-b-2 pb-1 "
              >
                {link}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-lg font-medium hover:bg-[#346636] transition-colors">
              <PiLockKeyOpenBold />
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
