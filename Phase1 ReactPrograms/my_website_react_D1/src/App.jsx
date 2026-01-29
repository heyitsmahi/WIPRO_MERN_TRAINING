import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";



export default function App() {
  return (
    
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}


