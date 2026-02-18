import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <div className="logo">PRIME XPRESS</div>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/booking" className="btn primary">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
