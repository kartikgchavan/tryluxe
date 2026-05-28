import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, cartCount } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const shipping = cartItems.length > 0 ? 99 : 0;
  const discount = cartItems.length > 0 ? 500 : 0;
  const total = Math.max(subtotal + shipping - discount, 0);

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <div>
          <p className="cart-eyebrow">Secure Checkout</p>
          <h1>Your luxury cart is ready.</h1>
          <p>
            Review your selected items, adjust quantity, apply offers and move
            to checkout.
          </p>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div>
            <span>🛍️</span>
            <h2>Your cart is empty</h2>
            <p>
              Start exploring TryLuxe and add premium fashion products to your
              cart.
            </p>
            <Link to="/shop">Continue Shopping</Link>
          </div>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items-panel">
            <div className="cart-panel-header">
              <h2>Shopping Bag</h2>
              <p>{cartItems.length} item type selected</p>
            </div>

            {cartItems.map((item) => (
              <article className="cart-item-card" key={item.cartId}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>
                    Size: {item.size} · Color: {item.color}
                  </p>

                  <div className="cart-item-controls">
                    <div className="qty-control">
                      <button
                        type="button"
                        onClick={() => decreaseQty(item.cartId)}
                      >
                        −
                      </button>

                      <span>{item.qty}</span>

                      <button
                        type="button"
                        onClick={() => increaseQty(item.cartId)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong className="cart-price">
                  ₹{(item.price * item.qty).toLocaleString("en-IN")}
                </strong>
              </article>
            ))}

            <div className="cart-recommend-box">
              <div>
                <p className="cart-eyebrow">AI Suggestion</p>
                <h3>Complete your outfit</h3>
                <p>
                  Add matching sunglasses, jewelry or shoes to improve your
                  full-look style score.
                </p>
              </div>

              <Link to="/stylist">Ask AI Stylist</Link>
            </div>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="coupon-box">
              <input placeholder="Enter coupon code" />
              <button type="button">Apply</button>
            </div>

            <div className="summary-lines">
              <div>
                <span>Subtotal</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>

              <div>
                <span>Shipping</span>
                <strong>₹{shipping}</strong>
              </div>

              <div>
                <span>Discount</span>
                <strong>-₹{discount}</strong>
              </div>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>

            <div className="secure-box">
              <span>🔒</span>
              <p>
                Secure checkout UI ready for future Razorpay, Stripe or PayPal
                payment integration.
              </p>
            </div>
          </aside>
        </section>
      )}
    </div>
  );
}

export default Cart;