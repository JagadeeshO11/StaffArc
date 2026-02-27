import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const FiberOptics = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Fiber Optic Solutions</h1>
        <p>High-Speed Data Transmission</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop" alt="Fiber" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Next-Generation Fiber Infrastructure</h2>
            <p>Ultra-fast fiber optic networks supporting speeds up to 400Gbps for enterprise applications.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Services Offered</h2>
            <ul>
              <li>Fiber optic cable installation</li>
              <li>Splicing and termination</li>
              <li>OTDR testing and certification</li>
              <li>Dark fiber leasing</li>
              <li>Long-haul fiber networks</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiberOptics;
