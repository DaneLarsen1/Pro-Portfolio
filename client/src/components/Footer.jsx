import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 -mb-8 -ml-8 left-0 transform rotate-45">
      <div className="relative">
        <FaHeart className="text-[#22d3ee] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
        <div className="absolute -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xxs sm:text-xs md:text-sm lg:text-base text-white">
            Landon Kimber
          </p>
          <p className="text-xxs sm:text-xs md:text-sm lg:text-base text-white">
            2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;