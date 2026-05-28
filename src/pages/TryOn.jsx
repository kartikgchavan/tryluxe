import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    text: "Add a clear front-facing photo so TryLuxe can prepare your virtual fitting preview.",
  },
  {
    number: "02",
    title: "Choose Outfit",
    text: "Select dresses, jackets, shoes, jewelry, sunglasses, or full curated looks.",
  },
  {
    number: "03",
    title: "Generate Try-On",
    text: "Preview how the outfit may look on you with AI-powered visual fitting.",
  },
];

const previews = [
  "Satin Dress",
  "Oversized Blazer",
  "Gold Jewelry",
  "Streetwear Fit",
];

function TryOn() {
  return (
    <div className="tryon-page">
      <section className="tryon-hero">
        <div className="tryon-left">
          <p className="tryon-eyebrow">Virtual Fashion Studio</p>
          <h1>Try outfits online before you buy them.</h1>
          <p>
            Experience a premium AI-powered try-on studio for clothes, jewelry,
            sunglasses and shoes. Upload your image, choose a look, and preview
            your style instantly.
          </p>

          <div className="tryon-actions">
            <button>Upload Photo</button>
            <Link to="/shop">Browse Products</Link>
          </div>

          <div className="tryon-trust">
            <span>Private Preview</span>
            <span>AI Fit Score</span>
            <span>Style Match</span>
          </div>
        </div>

        <div className="tryon-studio">
          <div className="tryon-main-preview">
            <div className="studio-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
              alt="AI try on model preview"
            />

            <div className="scan-line"></div>

            <div className="fit-score-card">
              <strong>Fit Score</strong>
              <h3>94%</h3>
              <p>Luxury blazer matched to your body profile</p>
            </div>
          </div>

          <div className="tryon-side-panel">
            <h3>Selected Look</h3>
            <p>Minimal Cream Oversized Blazer</p>

            <div className="mini-options">
              {previews.map((item, index) => (
                <button key={index}>{item}</button>
              ))}
            </div>

            <button className="generate-btn">Generate Preview</button>
          </div>
        </div>
      </section>

      <section className="tryon-steps">
        {steps.map((step, index) => (
          <article key={index}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="tryon-upload-section">
        <div>
          <p className="tryon-eyebrow">Smart Upload</p>
          <h2>Prepare your virtual fitting room.</h2>
          <p>
            For best results, use a clear photo with good lighting. The final
            real AI try-on feature will need an AI try-on API connection later,
            but this page is ready as the professional front-end UI.
          </p>
        </div>

        <div className="upload-box">
          <div className="upload-icon">＋</div>
          <h3>Drop your image here</h3>
          <p>PNG, JPG or WEBP supported</p>
          <button>Choose File</button>
        </div>
      </section>
    </div>
  );
}

export default TryOn;