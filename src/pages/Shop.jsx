import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div>
          <p className="eyebrow">Luxury AI Shopping Experience</p>
          <h1>Shop fashion that fits before you buy.</h1>
          <p>
            Discover premium outfits, jewelry, sunglasses, shoes and accessories
            with AI try-on, smart recommendations and a clean luxury shopping
            experience.
          </p>

          <div className="shop-search">
            <input placeholder="Search dresses, jackets, jewelry, sneakers..." />
            <button type="button">Search</button>
          </div>

          <div className="shop-stats">
            <span>10K+ Products</span>
            <span>AI Try-On Ready</span>
            <span>Global Styles</span>
          </div>
        </div>

        <div className="shop-hero-card">
          <div className="hero-badge">Live Preview</div>
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
            alt="Luxury fashion model"
          />
          <div className="floating-card">
            <strong>AI Fit Score</strong>
            <p>96% match for your style</p>
          </div>
        </div>
      </section>

      <section className="shop-categories">
        <button type="button" className="active">All</button>
        <button type="button">Women</button>
        <button type="button">Men</button>
        <button type="button">Jewelry</button>
        <button type="button">Sunglasses</button>
        <button type="button">Shoes</button>
        <button type="button">Luxury Formals</button>
      </section>

      <section className="shop-section-header">
        <div>
          <p className="eyebrow">Curated Collection</p>
          <h2>Trending now on TryLuxe</h2>
        </div>

        <select>
          <option>Sort by: Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-card-link">
              <div className="product-image-wrap">
                <img src={product.images[0]} alt={product.name} />
                <span>{product.tag}</span>
                <button type="button" className="wishlist-btn">♡</button>
              </div>
            </Link>

            <div className="product-info">
              <p>{product.category}</p>
              <h3>{product.name}</h3>

              <div className="product-meta">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <span>★ {product.rating}</span>
              </div>

              <div className="product-actions">
                <Link to={`/product/${product.id}`}>View Details</Link>
                <Link to="/try-on" className="try-btn">Try On</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Shop;