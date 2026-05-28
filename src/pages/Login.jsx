import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <nav className="login-navbar">
        <Link to="/" className="login-logo">
          Try<span>Luxe</span>
        </Link>

        <div className="login-nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/try-on">AI Try-On</Link>
          <Link to="/stylist">AI Stylist</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <Link to="/shop" className="login-shop-btn">
          Explore Shop
        </Link>
      </nav>

      <section className="login-layout">
        <div className="login-visual">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
            alt="TryLuxe fashion model"
          />

          <div className="login-floating-card top">
            <span>AI Style Profile</span>
            <strong>Luxury Minimal · 96%</strong>
          </div>

          <div className="login-floating-card bottom">
            <span>Saved Looks</span>
            <strong>24 outfits ready</strong>
          </div>
        </div>

        <div className="login-card">
          <p className="login-eyebrow">Welcome Back</p>
          <h1>Login to your TryLuxe account.</h1>
          <p className="login-subtitle">
            Save your outfits, wishlist products, use AI try-on history, and get
            personalized fashion recommendations.
          </p>

          <form className="login-form">
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button">Forgot Password?</button>
            </div>

            <button type="button" className="main-login-btn">
              Login
            </button>
          </form>

          <div className="login-divider">
            <span></span>
            <p>or continue with</p>
            <span></span>
          </div>

          <div className="social-login">
            <button>Google</button>
            <button>Apple</button>
          </div>

          <p className="signup-text">
            New to TryLuxe? <button>Create account</button>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;