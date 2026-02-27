import './About.css';
import { useScrollAnimation } from '../utils/scrollAnimation';

const About = () => {
  useScrollAnimation();
  
  const leaders = [
    { name: 'John Anderson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop' },
    { name: 'Sarah Mitchell', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
    { name: 'David Chen', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' }
  ];

  const locations = ['New York, USA', 'London, UK', 'Singapore', 'Dubai, UAE', 'Sydney, Australia'];

  return (
    <section className="about" id="about">
      <div className="about-profile scroll-animate">
        <h2>Company Profile</h2>
        <p>Leading provider of networking solutions with 15+ years of excellence in delivering cutting-edge infrastructure services worldwide.</p>
      </div>

      <div className="about-leaders">
        <h2 className="scroll-animate">Our Leaders</h2>
        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card scroll-animate">
              <img src={leader.img} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-services">
        <h2 className="scroll-animate">Our Services</h2>
        <div className="services-list">
          <div className="service-item scroll-animate">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop" alt="Network Installation" />
            <h3>Network Installation</h3>
          </div>
          <div className="service-item scroll-animate">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop" alt="Fiber Optics" />
            <h3>Fiber Optics</h3>
          </div>
          <div className="service-item scroll-animate">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop" alt="Wireless Solutions" />
            <h3>Wireless Solutions</h3>
          </div>
          <div className="service-item scroll-animate">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop" alt="Security Systems" />
            <h3>Security Systems</h3>
          </div>
        </div>
      </div>

      <div className="about-locations">
        <h2 className="scroll-animate">Service Locations</h2>
        <div className="locations-grid">
          {locations.map((loc, idx) => (
            <div key={idx} className="location-card scroll-animate">📍 {loc}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
