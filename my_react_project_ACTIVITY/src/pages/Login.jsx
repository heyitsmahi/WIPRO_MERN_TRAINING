import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
   
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      navigate("/admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("userRole", "user");
      localStorage.setItem("currentUser", JSON.stringify(found));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-80 p-6 shadow rounded bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      {/*  <p className="text-sm text-center mt-4">
  New user?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-blue-600 cursor-pointer hover:underline"
  >
    Create an account
  </span>
</p>*/}

      </div>
    </div>
  );
}
