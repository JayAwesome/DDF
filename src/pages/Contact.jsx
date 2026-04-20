import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      {/* Page Header */}
      <div className="section-bg-blue py-section-header text-center">
        <div className="container">
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>Get in Touch</span>
          <h1 className="hero-title mt-2 mb-4 text-white">Contact Us</h1>
          <p className="subtitle-text text-white" style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            Reach out to coordinate partnerships, volunteer for our missions, or request organizational support.
          </p>
        </div>
      </div>

      <div className="section py-section">
        <div className="container">
          <div className="flex-responsive-row" style={{ alignItems: 'flex-start' }}>
            
            {/* Contact Info */}
            <div style={{ flex: '1 1 350px' }}>
              <h2 className="section-title mb-5">Connect With Us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                {[
                  { icon: <FiMapPin />, title: 'Our Location', content: 'Plot 31, Atta A. A. Street, Kado Estate, Abuja, Nigeria' },
                  { icon: <FiMail />, title: 'Email Address', content: 'info@dumelofoundation.org' },
                  { icon: <FiPhone />, title: 'Phone Number', content: '+234 803 300 0000' }
                ].map((item, i) => (
                  <div key={i} className="hover-lift" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--clr-surface)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--clr-bg-alt)' }}>
                    <div style={{ 
                      background: 'var(--clr-bg-light)', 
                      color: 'var(--clr-gold)', 
                      padding: '1.25rem', 
                      borderRadius: '16px', 
                      fontSize: '1.5rem', 
                      display: 'flex',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 700, color: 'var(--clr-blue)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.05rem' }}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel" style={{ 
                marginTop: '4rem', 
                background: 'var(--clr-bg-light)', 
                padding: '2.5rem', 
                borderRadius: '20px', 
                borderLeft: '5px solid var(--clr-blue)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <FiClock style={{ color: 'var(--clr-blue)', fontSize: '1.5rem' }} />
                  <h4 style={{ margin: 0, color: 'var(--clr-blue)' }}>Operating Hours</h4>
                </div>
                <p style={{ margin: '0 0 0.5rem', color: 'var(--clr-text-muted)', fontSize: '1rem' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p style={{ margin: 0, color: 'var(--clr-text-muted)', fontSize: '1rem' }}>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ flex: '1 1 450px' }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ 
                  background: 'var(--clr-surface)', 
                  padding: '3rem', 
                  borderRadius: '24px', 
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <h3 className="section-title mb-5" style={{ fontSize: '2rem' }}>Send us a Message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="grid-cols-cards" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div>
                      <label htmlFor="contactName" style={labelStyle}>Full Name</label>
                      <input id="contactName" type="text" style={inputStyle} placeholder="Full Name" />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" style={labelStyle}>Email Address</label>
                      <input id="contactEmail" type="email" style={inputStyle} placeholder="Email" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contactSubject" style={labelStyle}>Subject</label>
                    <input id="contactSubject" type="text" style={inputStyle} placeholder="Subject" />
                  </div>

                  <div>
                    <label htmlFor="contactMessage" style={labelStyle}>Message</label>
                    <textarea id="contactMessage" rows="5" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Your message here..."></textarea>
                  </div>

                  <button type="button" className="btn btn-primary hover-lift" style={{ padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <div style={{ marginTop: '6rem' }}>
            <div className="text-center mb-5">
              <h2 className="section-title mb-3">Our Global Office</h2>
              <p className="subtitle-text text-muted">Kado Estate, Abuja – The heart of our operations.</p>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '500px', background: 'var(--clr-bg-light)', border: '1px solid #eee' }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent('Plot 31, Atta A. A. Street, Kado Estate, Abuja, Nigeria')}&output=embed`}
                title="Dumelo Development Foundation Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block', 
  marginBottom: '0.75rem', 
  fontWeight: 700, 
  fontSize: '0.9rem', 
  textTransform: 'uppercase', 
  letterSpacing: '0.5px',
  color: 'var(--clr-blue)'
};

const inputStyle = {
  width: '100%',
  padding: '1.25rem',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  background: 'var(--clr-bg-light)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  outline: 'none'
};

export default Contact;
