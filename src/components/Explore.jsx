import './Explore.css';

const Explore = () => {
  return (
    <section className="explore">
      <div className="explore-video">
        <video autoPlay loop muted playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-5g-network-tower-with-city-lights-6371/1080p.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="explore-content">
        <h2>5G Networking Revolution in India</h2>
        <p>Leading the future of connectivity with cutting-edge 5G infrastructure and networking solutions across India</p>
        <button className="explore-btn">Explore Our Solutions →</button>
      </div>
    </section>
  );
};

export default Explore;
