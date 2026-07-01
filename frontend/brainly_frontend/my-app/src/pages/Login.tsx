import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import "./Login.css"; 

const Login: React.FC = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");

    if (!username.trim() || !password.trim()) {
      setMessage("All fields are required.");
      return;
    }

    const success = await login(username, password);

    if (!success) {
      setMessage("Invalid email or password.");
      return;
    }

    navigate("/real");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ================= Left Section ================= */}
      <div className="w-full lg:w-1/2 bg-[#080808] px-6 py-8 sm:px-10 md:px-14 lg:px-20 flex flex-col justify-between gap-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
            <img
              className="w-full h-full object-contain"
              src="https://imgs.search.brave.com/i7g0ePX7k9hhCizCm2mQ0FjZSYQ9L0Q4apPwIYG7VTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NDMzLzczMS9zbWFs/bC9hLWxpbmstaWNv/bi1vbi1hLWJsdWUt/YmFja2dyb3VuZC1m/cmVlLXBuZy5wbmc"
              alt="Logo"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            LinkSaver
          </h1>
        </div>

        {/* Heading */}
        <div 
        className="animate-[slideLeft_0.8s_ease-out_forwards]">
          <h1 className=" italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Manage your work efficiently with a collaborative workspace that
            lets you organize tasks, store links, and work seamlessly with your
            team.
          </h1>
        </div>

        {/* Description */}
        <div
        className="animate-[rightslide_0.8s_ease-out_forwards]">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7">
            Stay organized and productive with an all-in-one workspace designed
            to simplify your daily workflow. Manage tasks, save important links,
            organize notes, and collaborate with your team from a single
            platform. Keep project details, resources, and conversations in one
            place so everything is easy to find and share. Whether you're
            working on personal goals, team projects, or client work, this
            workspace helps you stay focused, improve communication, track
            progress, and complete work more efficiently without switching
            between multiple apps.
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-xl rounded-xl overflow-hidden self-center">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://imgs.search.brave.com/0itheKD6xYjhkp3mYCa7PX_8FXe8119x30dKQolD9aM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjA5/NDMzNzY3Ni9waG90/by9kaXZlcnNlLXRl/YW0td29ya2luZy10/b2dldGhlci1pbi1t/b2Rlcm4tY28td29y/a2luZy1zcGFjZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RXZXUk9ac2ZybzFn/aE9WVmlYVmotdEtT/MzY0LU5lYWJ3Tk5Z/a3l2aHhvWT0"
            alt="Workspace"
          />
        </div>
      </div>

      {/* ================= Right Section ================= */}
      <div className="w-full lg:w-1/2 bg-[#040404] flex justify-center items-center p-6 sm:p-10">

        <div className="w-full max-w-md lg:max-w-lg bg-[#252525] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-6">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://imgs.search.brave.com/i7g0ePX7k9hhCizCm2mQ0FjZSYQ9L0Q4apPwIYG7VTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NDMzLzczMS9zbWFs/bC9hLWxpbmstaWNv/bi1vbi1hLWJsdWUt/YmFja2dyb3VuZC1m/cmVlLXBuZy5wbmc"
                alt="Logo"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            Login Into Your Account
          </h1>

          {message && (
            <p className="text-center text-red-500">{message}</p>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">

            <input
              type="email"
              placeholder="Email"
              className="animate-[bottomtotop_1.5s_ease-out_forwards]  w-full rounded-full px-6 py-3 sm:py-4 text-base sm:text-lg text-black focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="animate-[bottomtotop_1.5s_ease-out_forwards] w-full rounded-full px-6 py-3 sm:py-4 text-base sm:text-lg text-black focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="animate-[bottomtotop_1.5s_ease-out_forwards] w-full bg-[#EC4428] hover:bg-[#4a1810] transition text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold"
            >
              Login
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;