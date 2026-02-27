import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const CaseStudies = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Case Studies</h1>
        <p>Success Stories from Our Clients</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>TechCorp Network Transformation</h2>
            <p><strong>Challenge:</strong> Legacy infrastructure unable to support 5000+ remote employees</p>
            <p><strong>Solution:</strong> Deployed enterprise-wide 5G network with SD-WAN</p>
            <p><strong>Results:</strong> 300% productivity increase, 99.9% uptime</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>FinanceHub Security Upgrade</h2>
            <p><strong>Challenge:</strong> Compliance requirements for financial data protection</p>
            <p><strong>Solution:</strong> Implemented zero-trust architecture</p>
            <p><strong>Results:</strong> Protected $10B+ daily transactions</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>HealthPlus Hospital Network</h2>
            <p><strong>Challenge:</strong> Unreliable WiFi affecting patient care</p>
            <p><strong>Solution:</strong> Deployed WiFi 6 across campus</p>
            <p><strong>Results:</strong> Zero downtime, improved outcomes</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>RetailMax Store Network</h2>
            <p><strong>Challenge:</strong> Slow POS systems affecting sales</p>
            <p><strong>Solution:</strong> Fiber optic network upgrade</p>
            <p><strong>Results:</strong> 50% faster transactions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
