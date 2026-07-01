import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] flex items-center justify-center">

      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Content */}
      <div className="z-10 text-center px-6">

        <h1 className="animate-title text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          LinkSaver
        </h1>

        <p className="animate-subtitle text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-8 mb-12">
          Save important links, organize your memories, collaborate with your
          team, and access everything from one beautiful workspace designed for
          productivity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-buttons">

          <button
            onClick={() => navigate("/login")}
            className="px-10 py-4 rounded-full bg-[#EC4428] text-white text-lg font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-red-500/40"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-10 py-4 rounded-full border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Register
          </button>

        </div>

      </div>
    </div>
  );
};

export default Home;