import React from "react";
import { useNavigate } from "react-router-dom";

const NotfoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-[#FF4D00] text-white relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/register.png')] bg-cover bg-center pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl bg-[rgba(20,20,20,0.85)] border-4 border-orange-500">
        <h1 className="text-7xl  despina_ text-orange-500 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold molde_ mb-2 text-white">
          Page Not Found
        </h2>
        <p className="mb-6 text-white/80 text-center max-w-md text-base lg:text-lg">
          Oops! The page you are looking for does not exist or has been moved.
          <br />
          Let's get you back to the fun!
        </p>
        <button
          className="mt-2 px-8 py-3 rounded-lg bg-[#FF4D00] text-white  text-lg shadow-lg border-2 border-orange-500 hover:bg-orange-600 transition-all duration-200 molde_"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotfoundPage;
