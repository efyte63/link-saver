import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store"; // ✅ fixed

const Login: React.FC = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login); // ✅ fixed

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[400px]">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        {message && <p className="mb-4 text-red-500">{message}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="email"
            className="border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;