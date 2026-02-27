import './Clients.css';

const Clients = () => {
  const clients = [
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=250&h=150&fit=crop'
  ];

  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <div className="clients-slider">
        <div className="clients-track">
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="client-card">
              <img src={client} alt={`Client ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
