import { useState } from "react";

export default function ControlledRegister() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name required";
    if (!form.lastName) newErrors.lastName = "Last name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password)
    )
      newErrors.password = "Weak password";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus("Registered Successfully!");
      setForm({ firstName: "", lastName: "", email: "", password: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={form.firstName} onChange={handleChange} />
      {errors.firstName}

      <input name="lastName" value={form.lastName} onChange={handleChange} />
      {errors.lastName}

      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email}

      <input name="password" value={form.password} onChange={handleChange} />
      {errors.password}

      <button>Register</button>
      {status}
    </form>
  );
}
