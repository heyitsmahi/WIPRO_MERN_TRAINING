import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SHOPSY</h1>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/men" className="hover:text-blue-400">Men</Link>
          <Link to="/women" className="hover:text-blue-400">Women</Link>
          <Link to="/shop" className="hover:text-blue-400">Shop</Link>
          
        </nav>
      </div>
    </header>
  );
}
