import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Certifications = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Certifications & Partnerships</h1>
        <p>Industry-Leading Standards</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>Quality Certifications</h2>
            <p>ISO 9001:2015 - Quality Management System</p>
            <p>ISO 27001:2013 - Information Security Management</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Cisco Gold Partner</h2>
            <p>Authorized reseller and implementation partner</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Microsoft Certified</h2>
            <p>Azure networking solutions specialist</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>AWS Partner Network</h2>
            <p>Advanced consulting partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
