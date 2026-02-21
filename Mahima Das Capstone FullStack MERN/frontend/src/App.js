import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OwnerDashboard from "./components/OwnerDashboard";
import EditApp from './pages/EditApp';
import AppDetails from './pages/AppDetails';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
<>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<OwnerDashboard />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="/edit-app/:id" element={
        <ProtectedRoute>
            <EditApp />
        </ProtectedRoute>}/>
        <Route path="/dashboard" element={
    <ProtectedRoute requiredRole="owner">
      <OwnerDashboard />
    </ProtectedRoute>
  } 
/>
      </Routes>

    </>
  );
}

export default App;
