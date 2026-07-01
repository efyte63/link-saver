import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Signup";
import Login from "./pages/Login";
import Real from "./pages/Real";
import Chat from "./pages/Chat";
import { useAuthStore } from "./store/auth.store";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAuthStore((store) => store.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/real"
          element={
            <ProtectedRoute>
              <Real />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;