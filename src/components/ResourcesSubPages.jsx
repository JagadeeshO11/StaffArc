import './SubPages.css';

const ResourcesSubPages = () => {
  return (
    <div className="subpages">
      <section id="blog" className="subpage">
        <h2>Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3>5G Revolution in India</h3>
            <p>How 5G is transforming Indian businesses...</p>
          </div>
          <div className="blog-card">
            <h3>Network Security Best Practices</h3>
            <p>Essential security measures for enterprises...</p>
          </div>
          <div className="blog-card">
            <h3>Future of Fiber Optics</h3>
            <p>The next generation of connectivity...</p>
          </div>
        </div>
      </section>

      <section id="case-studies" className="subpage">
        <h2>Case Studies</h2>
        <div className="case-study">
          <h3>TechCorp Network Transformation</h3>
          <p>Deployed enterprise-wide 5G network for 5000+ employees, resulting in 300% productivity increase.</p>
        </div>
        <div className="case-study">
          <h3>FinanceHub Security Upgrade</h3>
          <p>Implemented advanced security infrastructure protecting $10B+ in daily transactions.</p>
        </div>
      </section>

      <section id="documentation" className="subpage">
        <h2>Documentation</h2>
        <p>Access our comprehensive guides, API documentation, and technical resources.</p>
        <button className="btn-primary">Download Resources</button>
      </section>
    </div>
  );
};

export default ResourcesSubPages;
