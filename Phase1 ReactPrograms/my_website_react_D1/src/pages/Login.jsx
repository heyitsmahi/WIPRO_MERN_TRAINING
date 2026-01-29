import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
    const data = await res.json();

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow bg-white">
      <h2 className="text-xl mb-4">Login</h2>

      <input onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-3" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-3" />

      <button onClick={login} className="bg-green-600 text-white w-full p-2">
        Login
      </button>
    </div>
  );
}
