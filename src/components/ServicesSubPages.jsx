import './SubPages.css';

const ServicesSubPages = () => {
  const services = [
    { title: 'Network Installation', desc: 'Complete network setup and configuration', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop' },
    { title: 'Fiber Optics', desc: 'High-speed fiber optic cable installation', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop' },
    { title: 'Wireless Solutions', desc: '5G and wireless network deployment', img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop' },
    { title: 'Security Systems', desc: 'Network security and firewall setup', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop' },
    { title: 'Maintenance & Support', desc: '24/7 network monitoring and support', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop' },
    { title: 'Consulting', desc: 'Expert network architecture consulting', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' }
  ];

  return (
    <div className="subpages">
      <section className="subpage">
        <h2>Our Services</h2>
        <div className="services-detail-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-detail-card">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSubPages;
