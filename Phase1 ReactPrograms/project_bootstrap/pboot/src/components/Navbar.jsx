import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">MyApp</Link>

      <div className="ms-auto">
        <Link className="m-2 nav-link d-inline text-white" to="/">Login</Link>
        <Link className="m-2 nav-link d-inline text-white" to="/about">About</Link>
        <Link className="m-2 nav-link d-inline text-white" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
