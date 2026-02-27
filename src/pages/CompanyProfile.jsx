import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const CompanyProfile = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Company Profile</h1>
        <p>Leading Networking Solutions Provider in India</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>About NxtVision</h2>
            <p>Established in 2008, NxtVision serves over 500 enterprise clients across 15 major cities in India.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Our Expertise</h2>
            <ul>
              <li>5G Network Deployment</li>
              <li>Fiber Optic Infrastructure</li>
              <li>Enterprise Wireless Solutions</li>
              <li>Network Security & Firewalls</li>
            </ul>
          </div>

          <div className="content-card scroll-animate">
            <h2>Certifications</h2>
            <p>ISO 9001:2015 | Cisco Gold Partner | Microsoft Certified | AWS Partner Network</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Global Reach</h2>
            <p>Serving clients across India with world-class networking infrastructure and 24/7 support.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
