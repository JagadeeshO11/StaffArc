import './Testimonials.css';
import { useScrollAnimation } from '../utils/scrollAnimation';

const Testimonials = () => {
  useScrollAnimation();
  
  const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', text: 'Outstanding service and support. Highly recommended!' },
    { name: 'Jane Smith', role: 'CTO, InnovateLab', text: 'Transformed our IT infrastructure completely.' },
    { name: 'Mike Johnson', role: 'Director, GlobalMart', text: 'Professional team with excellent expertise.' }
  ];

  return (
    <section className="testimonials">
      <h2 className="scroll-animate">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card scroll-animate">
            <p className="testimonial-text">"{item.text}"</p>
            <div className="testimonial-author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
