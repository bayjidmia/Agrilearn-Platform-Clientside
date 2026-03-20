import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { GiSprout } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-[#052016] text-white py-16 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#4CAF50] flex items-center justify-center text-white">
              <GiSprout className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              Agri<span className="text-primary">Learn</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Plumer is an electrician company that specializes in providing
            high-quality electrical services.
          </p>
          <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full transition-colors "
              >
                <Icon size={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-gray-400 uppercase tracking-widest text-lg font-semibold mb-6">
            Links
          </h3>
          <ul className="space-y-4 text-lg">
            {["About", "Services", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#C1FF4D] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Info */}
        <div>
          <h3 className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-6">
            Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="text-primary mt-1 shrink-0" size={30} />
              <span className="text-gray-300 italic">
                455 West Orchard Street
                <br />
                Kings Mountain, NC 28086
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-primary shrink-0" size={30} />
              <span className="text-gray-300">+1 (123) 985 789</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-primary shrink-0" size={30} />
              <span className="text-gray-300 text-sm">
                agrilearn989@gmail.com
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h3 className="text-gray-400 uppercase tracking-widest text-sm font-semibold">
            Newsletter
          </h3>
          <p className="text-gray-300">Sign up to get updates & news.</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-white transition-colors uppercase text-sm tracking-widest hover:text-black ">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Large Background Watermark */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 select-none opacity-5 pointer-events-none">
        <h1 className="text-[15rem] font-bold">AgriLearn</h1>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2023 All Rights Reserved by AgriLearn</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-700">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
