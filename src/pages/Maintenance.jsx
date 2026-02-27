import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Maintenance = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Maintenance & Support</h1>
        <p>24/7 Technical Assistance</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop" alt="Support" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Proactive Network Management</h2>
            <p>Round-the-clock monitoring and support services ensuring 99.9% uptime with rapid response.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Support Plans</h2>
            <ul>
              <li>24/7 helpdesk support</li>
              <li>Proactive network monitoring</li>
              <li>Preventive maintenance</li>
              <li>Emergency response (2-hour SLA)</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
