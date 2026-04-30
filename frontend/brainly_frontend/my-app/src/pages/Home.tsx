import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-8">
      <h1 className="text-4xl font-bold">Welcome to Memory Saver</h1>

      <div className="flex gap-6">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;