import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Link to="/about">
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-orange-500 to-rose-600 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome!</h1>
          <h2 className="text-2xl text-white">Click to get started!</h2>
        </div>
        {/* <div
          className="absolute w-8 h-8 bg-white rounded-full shadow-md"
          style={{ left: mousePosition.x, top: mousePosition.y }}
        ></div> */}
      </div>
    </Link>
  );
};

export default Home;