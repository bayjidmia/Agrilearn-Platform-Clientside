import React, { useState } from "react";
import { GiSprout } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import image from "../../assets/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const navLinks = [
    <Link to="/">Home</Link>,
    <Link to="/courses">Courses</Link>,
    <Link to="/about">About</Link>,
    <Link to="/solutions">Solutions</Link>,
    <Link to="/blog">Blog</Link>,
    <Link to="/contact">Contact Us</Link>,
    <Link to="/dashboard">Dashboard</Link>,
  ];

  return (
    <div className="">
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] container bg-black backdrop-blur-md z-50 border-b border-gray-100 py-2 rounded-4xl">
        <div className="  flex mx-3 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl focus:outline-none"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
            {/* Logo and Brand */}
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
              <p
                key={link}
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg transition-colors hover:border-white hover:border-b-2 pb-1"
              >
                {link}
              </p>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className=" lg:flex">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL || image}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="  bg-primary text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-lg font-medium hover:bg-[#346636] transition-colors">
                  <PiLockKeyOpenBold />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-100 py-4 gap-4 animate-slide-down">
            {navLinks.map((link) => (
              <p
                key={link}
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg transition-colors hover:border-white hover:border-b-2 pb-1 "
              >
                {link}
              </p>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
