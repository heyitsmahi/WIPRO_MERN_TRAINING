import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useStore } from "../hooks/useStore.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const store = useStore();

  if (!store || !cartCtx) return null;

  const { state, dispatch } = store;
  const { cart } = cartCtx;

  const total = cart.reduce((sum, item) => sum + (item.qty || 0), 0);

  return (
    <header
      className={`w-full shadow sticky top-0 z-50 ${
        state.theme === "dark" ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">EZYShop</Link>
        </h1>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
        </nav>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="px-3 py-1 border rounded"
          >
            {state.theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link to="/cart" className="relative">
            My Cart
            {total > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {total}
              </span>
            )}
          </Link>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}
