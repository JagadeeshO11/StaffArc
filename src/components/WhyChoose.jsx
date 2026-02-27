import './WhyChoose.css';
import { useScrollAnimation } from '../utils/scrollAnimation';

const WhyChoose = () => {
  useScrollAnimation();
  
  const reasons = [
    { icon: '⚡', title: 'Fast Performance', desc: 'Lightning-fast solutions' },
    { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
    { icon: '💰', title: 'Cost Effective', desc: 'Best value for money' },
    { icon: '🎯', title: 'Expert Team', desc: '10+ years experience' }
  ];

  return (
    <section className="why-choose">
      <h2 className="scroll-animate">Why Choose Us</h2>
      <div className="why-grid">
        {reasons.map((item, idx) => (
          <div key={idx} className="why-card scroll-animate">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
