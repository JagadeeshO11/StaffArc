import './PageLayout.css';
import { useScrollAnimation } from '../utils/scrollAnimation';
import logo from '../assets/logo.png';

const Blog = () => {
  useScrollAnimation();
  
  return (
    <div className="page-container">
      <section className="page-hero">
        <img src={logo} alt="NxtVision" style={{height: '80px', marginBottom: '1rem'}} />
        <h1>Blog & Insights</h1>
        <p>Latest News and Technology Trends</p>
      </section>

      <section className="page-content">
        <div className="two-column-grid">
          <div className="content-card scroll-animate">
            <h2>5G Revolution in India</h2>
            <p>The rollout of 5G networks across India is transforming how businesses operate with ultra-low latency and IoT capabilities.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Network Security Best Practices</h2>
            <p>Essential security strategies including zero-trust architecture and continuous monitoring for enterprises.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>Future of Fiber Optics</h2>
            <p>Next-generation fiber infrastructure supporting 400Gbps and beyond to future-proof your network.</p>
          </div>

          <div className="content-card scroll-animate">
            <h2>AI in Networking</h2>
            <p>How artificial intelligence is revolutionizing network management and predictive maintenance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
