import React from 'react';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  return (
    <div className="get-involved-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Support the Mission</span>
          <h1 className="hero-title">Get Involved</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Volunteer, partner, or sponsor a program—your support turns into direct help for people and communities.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="flex-responsive-row" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            
            {/* Volunteer/Partner Form column */}
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ background: 'var(--clr-surface)', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--clr-bg-alt)' }}>
                <h2 className="section-title">Join Our Mission</h2>
                <p className="subtitle-text text-muted mb-5">Fill out the form below to become a volunteer or institutional partner.</p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="grid-cols-cards" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input type="text" style={inputStyle} placeholder="First Name" />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input type="text" style={inputStyle} placeholder="Last Name" />
                    </div>
                  </div>
                  
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" style={inputStyle} placeholder="hello@example.com" />
                  </div>
                  
                  <div>
                    <label style={labelStyle}>I want to...</label>
                    <select style={inputStyle}>
                      <option>Volunteer my time and skills</option>
                      <option>Partner as an organization</option>
                      <option>Sponsor an initiative</option>
                      <option>Other inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea rows="5" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us how you'd like to get involved..."></textarea>
                  </div>

                  <button type="button" className="btn btn-primary hover-lift" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem' }}>Submit Inquiry</button>
                </form>
              </div>
            </div>

            {/* Donation Info Column */}
            <div style={{ flex: '1 1 350px' }}>
              <motion.div 
                whileHover={{ y: -5 }}
                style={{ background: 'var(--clr-bg-light)', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '40px', borderTop: '8px solid var(--clr-gold)', height: '100%', boxShadow: 'var(--shadow-md)' }}
              >
                <h2 className="section-title">Make a Donation</h2>
                <p className="subtitle-text" style={{ marginBottom: '2.5rem', fontWeight: 600, color: 'var(--clr-blue)' }}>
                  Every contribution directly impacts lives across Nigeria. Your generosity facilitates:
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem', marginBottom: '4rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{ background: 'var(--clr-blue)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', flexShrink: 0 }}>✓</div>
                    <span className="subtitle-text" style={{ fontSize: '1.1rem' }}>Scholarships for out-of-school youth</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{ background: 'var(--clr-blue)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', flexShrink: 0 }}>✓</div>
                    <span className="subtitle-text" style={{ fontSize: '1.1rem' }}>Clean water & emergency relief</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{ background: 'var(--clr-blue)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', flexShrink: 0 }}>✓</div>
                    <span className="subtitle-text" style={{ fontSize: '1.1rem' }}>Micro-finance for widow entrepreneurs</span>
                  </li>
                </ul>
                
                <div style={{ background: 'var(--clr-surface)', padding: '2.5rem', borderRadius: '24px', marginBottom: '2rem', border: '1px solid var(--clr-bg-alt)' }}>
                  <h4 className="eyebrow eyebrow--blue" style={{ marginBottom: '1.5rem' }}>Local Bank Transfer</h4>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}><strong>GT Bank (Naira)</strong></p>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}><strong>Account:</strong> Dumelo Development Foundation</p>
                  <p style={{ margin: 0, color: 'var(--clr-gold)', fontWeight: 800, fontSize: '1.35rem' }}>0123456789</p>
                </div>
                
                <div style={{ background: 'var(--clr-surface)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--clr-bg-alt)' }}>
                  <h4 className="eyebrow eyebrow--blue" style={{ marginBottom: '1rem' }}>International Pledges</h4>
                  <p style={{ margin: 0, fontSize: '1rem', opacity: 0.8 }}>Please request SWIFT codes via the inquiry form for global sponsorship.</p>
                </div>

                <div className="glass-panel" style={{ marginTop: '4rem', padding: '1.5rem', borderRadius: '16px', fontSize: '0.9rem', fontStyle: 'italic', background: 'rgba(0,0,0,0.03)' }}>
                  * Phase 2 of our digital roadmap includes secure online payment and tracking integrations.
                </div>

              </motion.div>
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
  color: 'var(--clr-blue)'
};

const inputStyle = {
  width: '100%',
  padding: '1.25rem',
  borderRadius: '12px',
  border: '1px solid var(--clr-bg-alt)',
  background: 'var(--clr-bg-light)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none'
};

export default GetInvolved;
