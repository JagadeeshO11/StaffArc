import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const NetworkInstallation = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Network Installation Services</h1>
        <p>Professional Setup & Configuration</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop" alt="Network" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Complete Network Setup</h2>
            <p>End-to-end network installation services including planning, deployment, and testing for optimal performance.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>What We Offer</h2>
            <ul>
              <li>Site survey and network design</li>
              <li>Structured cabling installation</li>
              <li>Router and switch configuration</li>
              <li>Wireless access point deployment</li>
              <li>Network security implementation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInstallation;
