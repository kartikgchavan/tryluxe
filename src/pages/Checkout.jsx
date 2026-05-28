import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    if (!formData.payment) {
      newErrors.payment = "Please select a payment method";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setOrderPlaced(true);
    clearCart();

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
      payment: "",
    });
  };

  const closeSuccessPopup = () => {
    setOrderPlaced(false);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-left">
          <p className="checkout-label">Secure checkout</p>

          <h1>Complete your order</h1>

          <p className="checkout-subtitle">
            Enter your delivery details and choose a payment method to confirm
            your TryLuxe order.
          </p>

          <form className="checkout-form" onSubmit={handlePlaceOrder} noValidate>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                name="address"
                placeholder="House number, street, area, landmark"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              {errors.address && (
                <span className="error-text">{errors.address}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <span className="error-text">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength="6"
                />
                {errors.pincode && (
                  <span className="error-text">{errors.pincode}</span>
                )}
              </div>
            </div>

            <div className="payment-section">
              <h3>Payment Method</h3>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={formData.payment === "Cash on Delivery"}
                  onChange={handleChange}
                />
                <div>
                  <strong>Cash on Delivery</strong>
                  <p>Pay when your order arrives at your doorstep.</p>
                </div>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="UPI Payment"
                  checked={formData.payment === "UPI Payment"}
                  onChange={handleChange}
                />
                <div>
                  <strong>UPI Payment</strong>
                  <p>Pay using Google Pay, PhonePe, Paytm, or any UPI app.</p>
                </div>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Card Payment"
                  checked={formData.payment === "Card Payment"}
                  onChange={handleChange}
                />
                <div>
                  <strong>Card Payment</strong>
                  <p>Pay securely using debit card or credit card.</p>
                </div>
              </label>

              {errors.payment && (
                <span className="error-text payment-error">
                  {errors.payment}
                </span>
              )}
            </div>

            <button className="place-order-btn" type="submit">
              Place Order
            </button>
          </form>
        </div>

        <div className="checkout-right">
          <div className="order-summary-card">
            <h2>Order Summary</h2>

            {cartItems.length === 0 ? (
              <p className="empty-summary">Your cart is empty.</p>
            ) : (
              <>
                <div className="summary-products">
                  {cartItems.map((item) => (
                    <div className="summary-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                      </div>

                      <strong>₹{item.price * item.quantity}</strong>
                    </div>
                  ))}
                </div>

                <div className="summary-line">
                  <span>Subtotal</span>
                  <strong>₹{totalPrice}</strong>
                </div>

                <div className="summary-line">
                  <span>Delivery</span>
                  <strong>Free</strong>
                </div>

                <div className="summary-total">
                  <span>Total</span>
                  <strong>₹{totalPrice}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {orderPlaced && (
        <div className="success-overlay">
          <div className="success-box">
            <div className="success-icon">✓</div>

            <h2>Order Placed Successfully!</h2>

            <p>
              Thank you for shopping with TryLuxe. Your order has been confirmed
              and your cart has been cleared.
            </p>

            <button type="button" onClick={closeSuccessPopup}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;