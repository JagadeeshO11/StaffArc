import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    const whatsappNumber = '919177067341';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    window.history.back();
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      flexDirection: 'column'
    }}>
      <h2>Redirecting to WhatsApp...</h2>
      <p>If you're not redirected automatically, <a href={`https://wa.me/919177067341?text=${encodeURIComponent('Hello! I would like to know more about your services.')}`} target="_blank" rel="noopener noreferrer">click here</a></p>
    </div>
  );
};

export default ContactUs;