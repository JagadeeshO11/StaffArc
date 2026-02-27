import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const SecuritySystems = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Network Security Systems</h1>
        <p>Protect Your Infrastructure</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop" alt="Security" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Enterprise Security Solutions</h2>
            <p>Comprehensive network security including next-generation firewalls and zero-trust architecture.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Security Services</h2>
            <ul>
              <li>Next-gen firewall deployment</li>
              <li>VPN and secure remote access</li>
              <li>Network segmentation</li>
              <li>DDoS protection</li>
              <li>24/7 security monitoring</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecuritySystems;
