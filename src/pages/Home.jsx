import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI Clothes Try-On",
    text: "Preview outfits on your photo before buying.",
  },
  {
    title: "AR Accessories Preview",
    text: "Try sunglasses, jewelry and shoes virtually.",
  },
  {
    title: "AI Stylist",
    text: "Get complete outfit ideas for any occasion.",
  },
];

const categories = [
  "Women",
  "Men",
  "Jewelry",
  "Sunglasses",
  "Shoes",
  "Luxury Formals",
];

const products = [
  {
    name: "Satin Evening Dress",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Designer Sunglasses",
    price: "₹2,299",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gold Necklace Set",
    price: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-eyebrow">AI + AR Luxury Shopping Platform</p>
          <h1>Try fashion virtually before you buy.</h1>
          <p>
            TryLuxe is a premium AI shopping experience where users can discover
            outfits, preview styles, get AI fashion advice and shop with
            confidence.
          </p>

          <div className="home-actions">
            <Link to="/shop">Start Shopping</Link>
            <Link to="/try-on" className="secondary-action">
              Try AI Preview
            </Link>
          </div>

          <div className="home-stats">
            <span>AI Try-On</span>
            <span>AR Preview</span>
            <span>Global Fashion</span>
          </div>
        </div>

        <div className="home-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
            alt="TryLuxe luxury fashion"
          />

          <div className="home-floating-card top">
            <span>AI Fit Score</span>
            <strong>96% Match</strong>
          </div>

          <div className="home-floating-card bottom">
            <span>Styled For You</span>
            <strong>Luxury Minimal Look</strong>
          </div>
        </div>
        </section>

<section className="featured-products">
  <div className="featured-header">
    <p>FEATURED COLLECTION</p>
    <h2>Shop AI-picked luxury styles</h2>
  </div>

  <div className="featured-grid">
    <div className="featured-card">
      <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80" alt="Luxury Streetwear" />
      <h3>Luxury Streetwear</h3>
      <p>Premium everyday outfits with bold modern styling.</p>
    </div>

    <div className="featured-card">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" alt="Elegant Dresses" />
      <h3>Elegant Dresses</h3>
      <p>Chic looks selected for confident fashion moments.</p>
    </div>

    <div className="featured-card">
      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" alt="Smart Casual" />
      <h3>Smart Casual</h3>
      <p>Balanced styles for work, outings, and lifestyle wear.</p>
    </div>
  </div>
</section>

<section className="home-features">
      </section>
      

      <section className="home-features">
        {features.map((feature, index) => (
          <article key={index}>
            <span>0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="home-category-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Explore Categories</p>
          <h2>Shop by style, mood and occasion.</h2>
        </div>

        <div className="home-category-grid">
          {categories.map((category, index) => (
            <Link to="/shop" key={index}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-products-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Trending Picks</p>
          <h2>Luxury products ready for AI preview.</h2>
        </div>

        <div className="home-product-grid">
          {products.map((product, index) => (
            <article key={index}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Link to="/shop">View Product</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="home-eyebrow">Future-Ready Fashion Tech</p>
          <h2>Build your look with AI, then shop smarter.</h2>
          <p>
            The front-end is ready for future real services like login,
            database, payment gateway, AI try-on API, AR engine and product
            inventory.
          </p>
        </div>

        <Link to="/stylist">Open AI Stylist</Link>
      </section>
    </div>
  );
}

export default Home;