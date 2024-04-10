import { useLocation } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-orange-500 to-rose-600">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Sorry! Page not found :(
        </h1>
      </div>
    </div>
  );
}

export default NotFound;