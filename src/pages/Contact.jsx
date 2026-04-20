import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Get in Touch</span>
          <h1 className="hero-title">Contact Us</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Send a message to partner, volunteer, sponsor a program, or request support.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="flex-responsive-row" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            
            {/* Contact Info */}
            <div style={{ flex: '1 1 350px' }}>
              <h2 className="section-title">Connect With Us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {[
                  { icon: <FiMapPin />, title: 'Our Location', content: 'Plot 31, Atta A. A. Street, Kado Estate, Abuja, Nigeria' },
                  { icon: <FiMail />, title: 'Email Address', content: 'info@dumelofoundation.org' },
                  { icon: <FiPhone />, title: 'Phone Number', content: '+234 803 300 0000' }
                ].map((item, i) => (
                  <div key={i} className="hover-lift" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'var(--clr-surface)', padding: '1.5rem 2rem', borderRadius: '24px', border: '1px solid var(--clr-bg-alt)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ 
                      background: 'var(--clr-blue)', 
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
                      <h4 className="card-title" style={{ marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.1rem' }}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel" style={{ 
                marginTop: '4rem', 
                background: 'var(--clr-bg-light)', 
                padding: '3rem', 
                borderRadius: '32px', 
                borderLeft: '8px solid var(--clr-gold)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <FiClock style={{ color: 'var(--clr-blue)', fontSize: '2rem' }} />
                  <h4 className="card-title" style={{ margin: 0 }}>Operating Hours</h4>
                </div>
                <p className="subtitle-text" style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: 'var(--clr-text-muted)' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="subtitle-text" style={{ fontSize: '1.1rem', margin: 0, color: 'var(--clr-text-muted)' }}>Saturday - Sunday: Closed</p>
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
                  padding: 'clamp(2rem, 5vw, 4rem)', 
                  borderRadius: '40px', 
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--clr-bg-alt)'
                }}
              >
                <h3 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', textAlign: 'left' }}>Send us a Message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="grid-cols-cards" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
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

                  <button type="button" className="btn btn-primary hover-lift" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <div style={{ marginTop: '10rem' }}>
            <div className="text-center mb-5">
              <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Global HQ</span>
              <h2 className="section-title">Our Global Office</h2>
              <p className="subtitle-text text-muted">Plot 31, Atta A. A. Street, Kado Estate, Abuja – The heart of our operations.</p>
            </div>
            <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '550px', background: 'var(--clr-bg-light)', border: '1px solid var(--clr-bg-alt)' }}>
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
      </section>
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
