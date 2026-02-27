import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const ServiceLocations = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Service Locations</h1>
        <p>Nationwide Coverage Across India</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" alt="Map" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Pan-India Presence</h2>
            <p>Offices and service centers across 15 major cities providing local support with national reach.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>North India</h2>
            <p>📍 Delhi NCR, Chandigarh, Jaipur</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>West India</h2>
            <p>📍 Mumbai, Pune, Ahmedabad</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>South India</h2>
            <p>📍 Bangalore, Chennai, Hyderabad</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLocations;
