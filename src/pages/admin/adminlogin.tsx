// src/pages/admin/AdminLogin.tsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") === "true") {
      navigate("/admin/update");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      sessionStorage.setItem("isAdmin", "true");
      navigate("/admin/update");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Form */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
