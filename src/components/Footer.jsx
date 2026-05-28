import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>Try</span>Luxe
          </Link>

          <p>
            Premium AI + AR fashion shopping platform for virtual try-on,
            smart styling, and luxury outfit discovery.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/try-on">AI Try-On</Link>
          <Link to="/stylist">AI Stylist</Link>
        </div>

        <div className="footer-column">
          <h4>Shopping</h4>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TryLuxe. All rights reserved.</p>
        <p>Designed for modern AI fashion shopping.</p>
      </div>
    </footer>
  );
};

export default Footer;