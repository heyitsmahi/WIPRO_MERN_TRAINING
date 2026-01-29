import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import { StoreProvider } from "./hooks/useStore.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
    <StoreProvider>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </StoreProvider>
  </BrowserRouter>
</React.StrictMode>

);
