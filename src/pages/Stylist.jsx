import React from "react";
import { Link } from "react-router-dom";

const occasions = [
  "Date Night",
  "College Look",
  "Office Formal",
  "Wedding Guest",
  "Streetwear",
  "Vacation",
];

const looks = [
  {
    title: "Luxury Minimal Look",
    text: "Cream blazer, satin top, straight trousers, gold jewelry.",
    score: "98%",
  },
  {
    title: "Indian Fusion Look",
    text: "Modern kurti styling with statement earrings and heels.",
    score: "94%",
  },
  {
    title: "Street Luxe Look",
    text: "Oversized jacket, cargo pants, sunglasses and sneakers.",
    score: "91%",
  },
];

function Stylist() {
  return (
    <div className="stylist-page">
      <nav className="stylist-navbar">
        <Link to="/" className="stylist-logo">
          Try<span>Luxe</span>
        </Link>

        <div className="stylist-nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/try-on">AI Try-On</Link>
          <Link to="/stylist">AI Stylist</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <Link to="/login" className="stylist-login-btn">
          Login
        </Link>
      </nav>

      <section className="stylist-hero">
        <div className="stylist-content">
          <p className="stylist-eyebrow">Personal AI Fashion Assistant</p>
          <h1>Get outfits styled for your mood, event and body profile.</h1>
          <p>
            TryLuxe AI Stylist helps users discover complete outfit combinations
            based on occasion, weather, budget, color preference and fashion
            personality.
          </p>

          <div className="stylist-input-card">
            <label>What are you dressing for?</label>
            <div className="stylist-search-row">
              <input placeholder="Example: RCB match, wedding, college, date night..." />
              <button>Generate Look</button>
            </div>
          </div>

          <div className="occasion-tags">
            {occasions.map((item, index) => (
              <button key={index}>{item}</button>
            ))}
          </div>
        </div>

        <div className="stylist-visual">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
            alt="AI stylist fashion"
          />

          <div className="stylist-floating-card top">
            <span>Style DNA</span>
            <strong>Elegant + Modern</strong>
          </div>

          <div className="stylist-floating-card bottom">
            <span>Recommended</span>
            <strong>Gold jewelry + nude heels</strong>
          </div>
        </div>
      </section>

      <section className="stylist-panel-section">
        <div className="stylist-generator">
          <p className="stylist-eyebrow">AI Outfit Builder</p>
          <h2>Build a complete look</h2>

          <div className="builder-grid">
            <div>
              <label>Gender / Style</label>
              <select>
                <option>Women</option>
                <option>Men</option>
                <option>Unisex</option>
              </select>
            </div>

            <div>
              <label>Occasion</label>
              <select>
                <option>Party</option>
                <option>Wedding</option>
                <option>Office</option>
                <option>Casual</option>
              </select>
            </div>

            <div>
              <label>Budget</label>
              <select>
                <option>Under ₹2,000</option>
                <option>₹2,000 - ₹5,000</option>
                <option>₹5,000+</option>
              </select>
            </div>

            <div>
              <label>Color Mood</label>
              <select>
                <option>Luxury Neutrals</option>
                <option>Bold Colors</option>
                <option>Pastel</option>
                <option>Black & Gold</option>
              </select>
            </div>
          </div>

          <button className="builder-btn">Create AI Outfit</button>
        </div>

        <div className="look-results">
          {looks.map((look, index) => (
            <article key={index}>
              <div>
                <span>{look.score}</span>
                <h3>{look.title}</h3>
                <p>{look.text}</p>
              </div>
              <button>View Look</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Stylist;