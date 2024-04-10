import React from "react";
import { FaHome, FaUser, FaCode, FaEnvelope, FaCog } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center bg-gradient-to-b from-[#62b1c8] to-[#4abea0] p-5 w-28 border-l-4 border-white">
      <ul className="list-none p-0 flex flex-col items-center h-4/5 justify-between">
        <li>
          <a
            href="/"
            className="flex flex-col items-center text-white no-underline"
          >
            <FaHome size={28} />
            <span className="mt-2 text-sm">Home</span>
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="flex flex-col items-center text-white no-underline"
          >
            <FaUser size={28} />
            <span className="mt-2 text-sm">About</span>
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="flex flex-col items-center text-white no-underline"
          >
            <FaCode size={28} />
            <span className="mt-2 text-sm">Projects</span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="flex flex-col items-center text-white no-underline"
          >
            <FaEnvelope size={28} />
            <span className="mt-2 text-sm">Contact</span>
          </a>
        </li>
        <li>
          <a
            href="/settings"
            className="flex flex-col items-center text-white no-underline"
          >
            <FaCog size={28} />
            <span className="mt-2 text-sm">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;