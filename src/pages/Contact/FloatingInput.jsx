import React from "react";
import { FaLeaf } from "react-icons/fa";

export const FloatingInput = ({ label, type, defaultValue, rootEffect }) => (
  <div className="relative">
    <input
      type={type}
      defaultValue={defaultValue}
      required
      className={`peer w-full pt-6 pb-2 bg-transparent outline-none text-stone-800 placeholder-transparent border-b-2 ${
        rootEffect
          ? "border-lime-200 focus:border-lime-500"
          : "border-stone-300 focus:border-blue-500"
      }`}
      placeholder=" " // important!
    />

    <label
      className={`absolute left-0 top-2 text-sm transition-all duration-300 
        peer-placeholder-shown:top-5 
        peer-placeholder-shown:text-base 
        peer-focus:top-0 
        peer-focus:text-sm 
        ${rootEffect ? "text-lime-700" : "text-blue-500"}`}
    >
      {label}
    </label>

    {rootEffect && (
      <div className="absolute -bottom-[2px] left-0 w-4 h-4 text-lime-500/20 rotate-12">
        <FaLeaf className="text-[10px]" />
      </div>
    )}
  </div>
);
