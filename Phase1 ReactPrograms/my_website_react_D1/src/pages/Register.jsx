import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Registered successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow bg-white">
      <h2 className="text-xl mb-4">Register</h2>

      <input name="name" onChange={handleChange} placeholder="Name" className="border p-2 w-full mb-3" />
      <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-3" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full mb-3" />

      <button onClick={register} className="bg-blue-600 text-white w-full p-2">
        Register
      </button>
    </div>
  );
}
