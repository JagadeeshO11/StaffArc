import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';

const Features = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1>Our Features</h1>
        <p>Advanced Technology Solutions</p>
      </section>

      <section className="page-content">
        <div className="features-grid">
          <div className="feature-item scroll-animate">
            <span className="feature-icon">🚀</span>
            <h3>High-Speed Connectivity</h3>
            <p>Ultra-fast 5G and fiber optic networks with 99.9% uptime guarantee</p>
          </div>

          <div className="feature-item scroll-animate">
            <span className="feature-icon">🔐</span>
            <h3>Enterprise Security</h3>
            <p>Military-grade encryption and advanced firewall protection</p>
          </div>

          <div className="feature-item scroll-animate">
            <span className="feature-icon">📈</span>
            <h3>Scalable Infrastructure</h3>
            <p>Grow seamlessly from startup to enterprise without downtime</p>
          </div>

          <div className="feature-item scroll-animate">
            <span className="feature-icon">⚡</span>
            <h3>Lightning Fast</h3>
            <p>Sub-millisecond latency for critical business applications</p>
          </div>

          <div className="feature-item scroll-animate">
            <span className="feature-icon">🛠️</span>
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical assistance and monitoring</p>
          </div>

          <div className="feature-item scroll-animate">
            <span className="feature-icon">💰</span>
            <h3>Cost Effective</h3>
            <p>Competitive pricing with flexible payment plans</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
