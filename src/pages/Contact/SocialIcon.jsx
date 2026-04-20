import React from "react";
import { motion } from "framer-motion";
export const SocialIcon = ({ Icon }) => (
  <motion.a
    href="#"
    whileHover={{ y: -3, color: "#166534" }}
    className="transition-colors cursor-pointer text-green-700/80 hover:text-green-800"
  >
    <Icon />
  </motion.a>
);
