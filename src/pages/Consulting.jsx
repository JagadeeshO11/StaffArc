import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Consulting = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>IT Consulting Services</h1>
        <p>Expert Network Architecture Guidance</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop" alt="Consulting" style={{width: '100%', borderRadius: '10px', marginBottom: '1rem'}} />
            <h2>Strategic Network Planning</h2>
            <p>Expert guidance on network design, technology selection, and digital transformation strategies.</p>
          </div>

          <div className="content-card scroll-animate">
            <img src={logo} alt="NxtVision" style={{height: '60px', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem'}} />
            <h2>Consulting Services</h2>
            <ul>
              <li>Network architecture design</li>
              <li>Technology assessment</li>
              <li>Capacity planning</li>
              <li>Security evaluation</li>
              <li>Cloud migration strategy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
