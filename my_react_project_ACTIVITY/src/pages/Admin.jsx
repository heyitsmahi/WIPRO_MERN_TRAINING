import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "admin") {
      alert("Unauthorized access detected!");
      navigate("/login");
    }
  }, []);

  return (
    
    <div className="p-10 text-2xl font-bold">
      Welcome Admin 
    </div>
  );
}
