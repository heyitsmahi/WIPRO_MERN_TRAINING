import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
   
    if (email === "admin@gmail.com" && password === "admin123") {
      setUser({ email, role: "admin" });
      return "admin";
    }

    const saved = JSON.parse(localStorage.getItem("users")) || [];
    const found = saved.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser({ email: found.email, role: "user" });
      return "user";
    }

    return null;
  };

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
