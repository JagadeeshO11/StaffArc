import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Welcome = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Welcome to NxtVision</h1>
        <p>Your Trusted Partner in Digital Transformation</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>About Us</h2>
            <p>Since 2008, NxtVision has been at the forefront of networking innovation in India. We specialize in delivering cutting-edge 5G infrastructure, fiber optic solutions, and enterprise networking services.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Our Mission</h2>
            <p>To digitalize India through world-class networking solutions, empowering businesses with reliable, secure, and scalable infrastructure.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Why Choose NxtVision</h2>
            <ul>
              <li>15+ years of industry experience</li>
              <li>500+ satisfied clients across India</li>
              <li>24/7 technical support</li>
              <li>ISO 9001:2015 certified</li>
            </ul>
          </div>

          <div className="content-card scroll-animate">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation & Excellence</li>
              <li>Customer Success</li>
              <li>Integrity & Trust</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
