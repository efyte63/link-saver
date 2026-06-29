import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email , setemail] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = useAuthStore((store) => store.signup);
  const navigate = useNavigate();
async function handleSignup(e: React.FormEvent) {
  e.preventDefault();

  if (!email.trim() || !password.trim() || !username.trim()) {
    alert("Please fill all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  setLoading(true);

  const success = await signup(username ,email, password);

  setLoading(false);

  if (!success) {
    alert("Signup failed.");
    return;
  }

  alert("Signup successful!");
  navigate("/login");
}

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-[350px] flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

         <input
          type="email"
          placeholder="email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setemail(e.target.value)}
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

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;