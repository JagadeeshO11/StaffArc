import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Documentation = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Documentation & Resources</h1>
        <p>Technical Guides and Whitepapers</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>Technical Documentation</h2>
            <ul>
              <li>Network Design Best Practices Guide</li>
              <li>5G Deployment Handbook</li>
              <li>Security Implementation Checklist</li>
              <li>Fiber Optic Installation Manual</li>
            </ul>
          </div>

          <div className="content-card scroll-animate">
            <h2>Whitepapers</h2>
            <ul>
              <li>The Future of 5G in Enterprise Networks</li>
              <li>Zero Trust Architecture Implementation</li>
              <li>Network Automation with AI/ML</li>
            </ul>
          </div>

          <div className="content-card scroll-animate">
            <h2>Video Tutorials</h2>
            <p>Access our library of video tutorials covering network configuration, troubleshooting, and best practices.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>API Documentation</h2>
            <p>Complete API reference for integrating with our network management platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
