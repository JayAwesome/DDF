import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in" style={{ paddingBottom: '6rem' }}>
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            We'd love to hear from you. Reach out to coordinate partnerships, volunteer, or request support.
          </p>
        </div>
      </div>

      <div className="container mt-5" style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Contact Info */}
        <div style={{ flex: '1 1 350px' }}>
          <h2 className="mb-4">Get In Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--clr-gold)', color: 'white', padding: '1rem', borderRadius: '50%', fontSize: '1.5rem', display: 'flex' }}>
                <FiMapPin />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Our Location</h4>
                <p style={{ color: 'var(--clr-text-muted)' }}>Plot 31, Atta A. A. Street, Kado Estate, Abuja, Nigeria</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--clr-gold)', color: 'white', padding: '1rem', borderRadius: '50%', fontSize: '1.5rem', display: 'flex' }}>
                <FiMail />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Email Address</h4>
                <p style={{ color: 'var(--clr-text-muted)' }}>info@dumelofoundation.org</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--clr-gold)', color: 'white', padding: '1rem', borderRadius: '50%', fontSize: '1.5rem', display: 'flex' }}>
                <FiPhone />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Phone Number</h4>
                <p style={{ color: 'var(--clr-text-muted)' }}>+234 XXXXXXXX</p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '4rem', background: 'var(--clr-bg-light)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--clr-heading)' }}>
            <h4 className="mb-2">Operating Hours</h4>
            <p style={{ margin: 0, color: 'var(--clr-text-muted)' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p style={{ margin: 0, color: 'var(--clr-text-muted)' }}>Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 500px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
          >
            <h3 className="mb-4">Send us a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                <input type="text" style={inputStyle} placeholder="Your Full Name" />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                <input type="email" style={inputStyle} placeholder="you@example.com" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                <input type="text" style={inputStyle} placeholder="How can we help?" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                <textarea rows="5" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Your message here..."></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>Send Message</button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div style={{ flex: '1 1 100%', marginTop: '2rem' }}>
          <h3 className="mb-4 text-center">Find Us on the Map</h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '450px', background: 'var(--clr-bg-light)' }}>
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
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontFamily: 'inherit',
  fontSize: '1rem'
};

export default Contact;
