import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Signup";
import Login from "./pages/Login";
import Real from "./pages/Real";
import { useAuthStore } from "./store/auth.store";
import Chat from "./pages/Chat";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((store) => store.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/real" element={<Real />} />
         <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;