import React from "react";
import { motion } from "framer-motion";
import {
  FaReddit,
  FaGithub,
  FaDribbble,
  FaMedium,
  FaLeaf,
} from "react-icons/fa"; // Added FaLeaf
import { FloatingInput } from "./FloatingInput";
import { SocialIcon } from "./SocialIcon";

const AgriContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden selection:bg-lime-200">
      {/* 1. BACKGROUND PATTERN (Subtle agricultural data & topography)
       */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="agri_pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Stylized topography lines */}
              <path
                d="M0,30 C30,10 70,50 100,30"
                stroke="#166534"
                fill="none"
                strokeWidth="0.5"
              />
              <path
                d="M0,60 C40,40 80,80 100,60"
                stroke="#166534"
                fill="none"
                strokeWidth="0.5"
              />
              {/* Leaf Icons */}
              <FaLeaf className="absolute top-10 left-10 text-lime-800 text-[8px]" />
              <FaLeaf className="absolute top-70 left-50 text-lime-800 text-[10px]" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#agri_pattern)" />
        </svg>
      </div>

      {/* 7. DECORATIVE ELEMENT: Stylized Farm Rows / Terraced Fields
       */}
      <div
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-lime-600 rounded-full opacity-60 z-0"
        style={{
          backgroundImage: "radial-gradient(#166534 10%, transparent 10%)",
          backgroundSize: "30px 15px",
        }}
      />

      <div className=" container mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">
        {/* Left Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2 relative">
            <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 flex items-center gap-3 tracking-tighter">
              {/* 1 & 2. HEADER & ICON: Plant a Query 🌱
               */}
              Let's Grow Together
              <span className="text-lime-600 animate-pulse text-6xl">🌱</span>
            </h1>

            {/* 2. SUB-HEADER TYPOGRAPHY: Subtle leaf detail */}
            <p className="text-xl font-semibold text-stone-800 pt-5 relative">
              <span className="absolute -top-3 left-0 w-8 h-1 bg-lime-500/20 rounded-full" />
              Interested in a sustainable partnership?
            </p>
            <p className="text-lg text-stone-700 font-light">
              Fill in the form below to sow the seeds of collaboration.
            </p>
          </div>

          <form className="space-y-11 pt-8 max-w-md">
            {/* 4. FORM INPUTS: Themed with roots/soil feel
             */}
            <FloatingInput
              label="Your Name"
              type="text"
              defaultValue=""
              rootEffect
            />
            <FloatingInput
              label="Farm Email / Company"
              type="email"
              rootEffect
            />
            <FloatingInput
              label="Describe your vision"
              type="text"
              rootEffect
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#15803d" }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white px-12 py-3 rounded-full shadow-[0_4px_14px_0_rgba(21,128,61,0.3)] font-bold text-sm tracking-wide transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Middle Divider: Subtly textured like a stalk */}
        <div className="hidden md:block w-[1.5px] h-96 bg-lime-500/10" />

        {/* 5. INFO CARD: Themed with nature textures
         */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="bg-[#fffdf9] rounded-2xl overflow-hidden shadow-xl border border-stone-100 max-w-sm"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='0 0 24 24'%3E%3Cg fill='%23a8a29e' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          >
            {/* Top Bar: Rich Soil Brown */}
            <div className="h-3 bg-[#5c4033] w-full" />

            <div className="p-10 space-y-7">
              {/* 5. CARD TEXT: Agri-focused messaging */}
              <h3 className="text-2xl font-bold text-stone-900 leading-snug tracking-tight">
                Not ready to plant a seed just yet?
              </h3>
              <p className="text-stone-700 leading-relaxed font-light">
                That’s okay. Growth takes time. We understand that sometimes you
                just want to observe the landscape. We’ve got you covered—there
                are other ways to monitor our progress and keep up to date with
                the innovations sprouting in our studio field.
              </p>

              {/* 5. SOCIAL ICONS: Forest Green
               */}
              <div className="flex gap-6 pt-5 text-green-700 text-2xl">
                <SocialIcon Icon={FaReddit} />
                <SocialIcon Icon={FaGithub} />
                <SocialIcon Icon={FaDribbble} />
                <SocialIcon Icon={FaMedium} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgriContactPage;
