import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, cartCount } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [activeImage, setActiveImage] = useState(product?.images?.[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [addedMessage, setAddedMessage] = useState("");

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-not-found">
          <h1>Product not found</h1>
          <p>This product is unavailable or the link is incorrect.</p>
          <Link to="/shop">Back to Shop</Link>
        </div>
      </div>
    );
  }

  function handleAddToCart() {
    addToCart(product, selectedSize, selectedColor);
    setAddedMessage("Added to cart successfully");

    setTimeout(() => {
      setAddedMessage("");
    }, 1800);
  }

  return (
    <div className="product-details-page">
      <nav className="product-navbar">
        <Link to="/" className="product-logo">
          Try<span>Luxe</span>
        </Link>

        <div className="product-nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/try-on">AI Try-On</Link>
          <Link to="/stylist">AI Stylist</Link>
          <Link to="/cart" className="cart-nav-badge">
            Cart
            {cartCount > 0 && <span>{cartCount}</span>}
        </Link>
        </div>

        <Link to="/login" className="product-login-btn">
          Login
        </Link>
      </nav>

      <section className="product-details-layout">
        <div className="product-gallery">
          <div className="product-main-image">
            <img src={activeImage} alt={product.name} />
            <span>{product.tag}</span>
          </div>

          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={activeImage === image ? "active" : ""}
                onClick={() => setActiveImage(image)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-content">
          <p className="product-eyebrow">{product.category}</p>
          <h1>{product.name}</h1>

          <div className="product-rating-row">
            <span>★ {product.rating}</span>
            <p>Premium verified product</p>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-price-row">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <span>Inclusive of all taxes</span>
          </div>

          <div className="product-option-block">
            <div className="option-title-row">
              <h3>Select Size</h3>
              <button type="button">Size Guide</button>
            </div>

            <div className="product-options">
              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-option-block">
            <h3>Select Color</h3>

            <div className="product-options">
              {product.colors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={selectedColor === color ? "selected" : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="product-action-row">
            <button
              type="button"
              className="product-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <Link to="/try-on" className="product-try-btn">
              Try On With AI
            </Link>
          </div>

          {addedMessage && (
            <div className="cart-success-message">
              {addedMessage} · <Link to="/cart">View Cart</Link>
            </div>
          )}

          <div className="delivery-card">
            <div>
              <span>🚚</span>
              <strong>Fast Delivery</strong>
              <p>Estimated delivery in 3–5 days.</p>
            </div>

            <div>
              <span>↩</span>
              <strong>Easy Returns</strong>
              <p>Return support for eligible products.</p>
            </div>

            <div>
              <span>✨</span>
              <strong>AI Style Match</strong>
              <p>Preview styling before buying.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;