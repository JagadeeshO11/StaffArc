import './SubPages.css';

const AboutSubPages = () => {
  return (
    <div className="subpages">
      <section id="company-profile" className="subpage">
        <h2>Company Profile</h2>
        <p>NxtVision is India's leading networking solutions provider with 15+ years of excellence. We specialize in digital transformation through cutting-edge network infrastructure.</p>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop" alt="Office" />
      </section>

      <section id="our-leaders" className="subpage">
        <h2>Leadership Team</h2>
        <div className="leaders-detail">
          <div className="leader-detail">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" alt="CEO" />
            <h3>John Anderson</h3>
            <p>CEO & Founder - 20+ years in networking</p>
          </div>
          <div className="leader-detail">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="CTO" />
            <h3>Sarah Mitchell</h3>
            <p>CTO - Expert in 5G technology</p>
          </div>
        </div>
      </section>

      <section id="service-locations" className="subpage">
        <h2>Service Locations</h2>
        <p>We serve clients across 15+ cities in India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and more.</p>
      </section>

      <section id="certifications" className="subpage">
        <h2>Certifications</h2>
        <div className="cert-list">
          <div className="cert-item">✓ ISO 9001:2015 Certified</div>
          <div className="cert-item">✓ Cisco Gold Partner</div>
          <div className="cert-item">✓ Microsoft Certified</div>
          <div className="cert-item">✓ AWS Partner Network</div>
        </div>
      </section>
    </div>
  );
};

export default AboutSubPages;
