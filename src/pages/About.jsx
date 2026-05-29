import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>ABOUT TRYLUXE</p>
        <h1>Luxury fashion shopping powered by AI.</h1>
        <p>
          TryLuxe helps users discover outfits, preview styles virtually,
          and get AI-powered fashion guidance before shopping.
        </p>
      </section>

      <section className="about-stats">
        <div>
          <h2>96%</h2>
          <p>AI Match Accuracy</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Virtual Try-Ons</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Fashion Styles</p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make online fashion shopping smarter, more personal,
          and more luxurious using AI-powered style recommendations and virtual try-on.
        </p>
      </section>
    </main>
  );
};

export default About;