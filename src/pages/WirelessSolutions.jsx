import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const WirelessSolutions = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Wireless Solutions</h1>
        <p>5G & Enterprise WiFi</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop" alt="Wireless" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Advanced Wireless Infrastructure</h2>
            <p>Deploy cutting-edge 5G networks and enterprise-grade WiFi 6/6E solutions with seamless roaming.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Our Offerings</h2>
            <ul>
              <li>5G private network deployment</li>
              <li>WiFi 6/6E access points</li>
              <li>Outdoor wireless bridges</li>
              <li>Wireless site surveys</li>
              <li>Spectrum analysis</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WirelessSolutions;
