import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const OurLeaders = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Our Leadership Team</h1>
        <p>Experienced Professionals Driving Innovation</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" alt="CEO" style={{width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>John Anderson</h2>
            <p>CEO & Founder</p>
            <p style={{fontSize: '0.9rem'}}>20+ years in networking industry</p>
          </div>

          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="CTO" style={{width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Sarah Mitchell</h2>
            <p>Chief Technology Officer</p>
            <p style={{fontSize: '0.9rem'}}>Expert in 5G technology</p>
          </div>

          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" alt="COO" style={{width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>David Chen</h2>
            <p>Chief Operations Officer</p>
            <p style={{fontSize: '0.9rem'}}>15 years managing deployments</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Our Vision</h2>
            <p>Building India's digital future through innovative networking solutions and exceptional service delivery.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLeaders;
