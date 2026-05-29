import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/roadmap">
        Roadmap
      </Link>

      <Link to="/notes">
        Notes
      </Link>
    </nav>
  );
}

export default Navbar;