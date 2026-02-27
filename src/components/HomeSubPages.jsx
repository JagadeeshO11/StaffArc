import './SubPages.css';

const HomeSubPages = () => {
  return (
    <div className="subpages">
      <section id="welcome" className="subpage">
        <h2>Welcome to NxtVision</h2>
        <p>Your trusted partner in networking solutions since 2008. We deliver excellence in digital transformation.</p>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop" alt="Team" />
      </section>

      <section id="features" className="subpage">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>🚀 High Speed</h3>
            <p>Ultra-fast network connectivity</p>
          </div>
          <div className="feature-box">
            <h3>🔐 Secure</h3>
            <p>Enterprise-level security</p>
          </div>
          <div className="feature-box">
            <h3>📈 Scalable</h3>
            <p>Grow with your business</p>
          </div>
        </div>
      </section>

      <section id="testimonials-home" className="subpage">
        <h2>Client Success Stories</h2>
        <p>Over 500+ satisfied clients across India trust our networking solutions.</p>
      </section>
    </div>
  );
};

export default HomeSubPages;
