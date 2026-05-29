import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span>Try</span>Luxe
      </Link>

      <nav className={menuOpen ? "navbar-links active" : "navbar-links"}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>

        <NavLink to="/try-on" onClick={closeMenu}>
          Try On
        </NavLink>

        <NavLink to="/stylist" onClick={closeMenu}>
          AI Stylist
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/login" onClick={closeMenu}>
          Login
        </NavLink>
      </nav>

      <div className="navbar-actions">
        <Link to="/cart" className="cart-link" onClick={closeMenu}>
          Cart
          {cartCount > 0 && <span>{cartCount}</span>}
        </Link>

        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;