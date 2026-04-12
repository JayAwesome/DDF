import React from 'react';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  return (
    <div className="get-involved-page animate-fade-in" style={{ paddingBottom: '6rem' }}>
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get Involved</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            We cannot do this alone. Join hands with us to bring hope, support, and lasting change.
          </p>
        </div>
      </div>

      <div className="container mt-5" style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
        
        {/* Volunteer/Partner Form column */}
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }}>
            <h2 className="mb-1">Join Our Mission</h2>
            <p className="mb-4" style={{ color: 'var(--clr-text-muted)' }}>Fill out the form below to become a volunteer or partner.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name</label>
                  <input type="text" style={inputStyle} placeholder="First Name" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name</label>
                  <input type="text" style={inputStyle} placeholder="Last Name" />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                <input type="email" style={inputStyle} placeholder="hello@example.com" />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>I want to...</label>
                <select style={inputStyle}>
                  <option>Volunteer my time and skills</option>
                  <option>Partner as an organization</option>
                  <option>Sponsor an initiative</option>
                  <option>Other inquiries</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                <textarea rows="4" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us how you'd like to get involved..."></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>

        {/* Donation Info Column */}
        <div style={{ flex: '1 1 350px' }}>
          <motion.div 
            whileHover={{ y: -5 }}
            style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '12px', borderTop: '4px solid var(--clr-gold)', height: '100%' }}
          >
            <h2 className="mb-3">Make a Donation</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--clr-text-main)', lineHeight: 1.7 }}>
              Every contribution directly impacts the lives of those who need it most. Whether it's funding a child's education or supplying clean water to a village, your generosity matters.
            </p>
            
            <div style={{ background: 'var(--clr-surface)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--clr-heading)', marginBottom: '0.5rem' }}>Bank Transfer (Naira Account)</h4>
              <p style={{ margin: 0 }}><strong>Bank Name:</strong> Guaranteed Trust Bank (GTB)</p>
              <p style={{ margin: 0 }}><strong>Account Name:</strong> Dumelo Development Foundation</p>
              <p style={{ margin: 0, color: 'var(--clr-gold)', fontWeight: 'bold' }}><strong>Account Number:</strong> 0123456789</p>
            </div>
            
            <div style={{ background: 'var(--clr-surface)', padding: '1.5rem', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--clr-heading)', marginBottom: '0.5rem' }}>International Transfers</h4>
              <p style={{ margin: 0 }}>Please contact us securely via the inquiry form to request SWIFT/Routing code information for international sponsorship.</p>
            </div>

            <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--clr-text-muted)', fontStyle: 'italic' }}>
              * Secure online payment integration is coming in Phase 2 of our digital roadmap.
            </div>

          </motion.div>
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

export default GetInvolved;
