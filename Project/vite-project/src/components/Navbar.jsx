import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#222",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link
        to="/dashboard"
        style={{ color: "white" }}
      >
        Dashboard
      </Link>

      <Link
        to="/roadmap"
        style={{ color: "white" }}
      >
        Roadmap
      </Link>

      <Link
        to="/notes"
        style={{ color: "white" }}
      >
        Notes
      </Link>
    </nav>
  );
}

export default Navbar;