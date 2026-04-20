import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Leadership = () => {
  return (
    <div className="leadership-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Institutional Governance</span>
          <h1 className="hero-title">Leadership & Trust</h1>
          <p className="subtitle-text" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Meet the people and structure guiding our work—built on accountability, clear roles, and service.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          {/* Main Leadership Image Board */}
          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
            <h2 className="section-title">National Executive Council & State Coordinators</h2>
            <div style={{ 
              background: 'var(--clr-surface)', 
              padding: '1.5rem', 
              borderRadius: '32px', 
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '1000px',
              margin: '0 auto',
              border: '1px solid var(--clr-bg-alt)'
            }}>
              <img 
                src="/assets/leadership-structure.jpeg" 
                alt="Dumelo Development Foundation Leadership Board" 
                style={{ width: '100%', height: 'auto', borderRadius: '24px', backgroundColor: '#f0f0f0', minHeight: '300px', display: 'block' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1000x500?text=Leadership+Board+Image'; }}
              />
            </div>
          </div>

          {/* Founder Profile Section */}
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 8vw, 6rem)', borderRadius: '40px', background: 'var(--clr-bg-light)', marginBottom: '8rem' }}>
            <div className="text-center mb-5">
              <span className="eyebrow eyebrow--blue" style={{ display: 'block', marginBottom: '1rem' }}>The Visionary</span>
              <h2 className="section-title" style={{ color: 'var(--clr-gold)' }}>Founder Profile</h2>
            </div>
            
            <div className="flex-responsive-row" style={{ alignItems: 'flex-start', gap: '4rem' }}>
               <div style={{ flex: '1 1 350px' }}>
                  <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '8px solid white' }}>
                    <img src="/assets/founder's-speech-giving.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/500x600?text=Founder+Profile'; }}/>
                  </div>
               </div>
               <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
                  <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--clr-blue)' }}>Amb. Dr. Loretta Emetam Enwezor</h3>
                  <h4 className="card-title" style={{ color: 'var(--clr-gold)', marginBottom: '2rem' }}>President & Founder</h4>
                  
                  <p className="subtitle-text" style={{ marginBottom: '2rem' }}>
                    A seasoned entrepreneur and distinguished humanitarian recognized globally for her commitment to impactful service. Her core career expertise spans across:
                  </p>
                  
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.25rem', marginBottom: '3rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Corporate leadership and governance</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Government service and compliance</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Grassroots community mobilization</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><FiCheckCircle style={{ color: 'var(--clr-gold)', flexShrink: 0 }} /> Diplomatic relationship management</li>
                  </ul>

                  <div className="grid-cols-cards" style={{ gap: '3rem' }}>
                     <div>
                       <h5 className="card-title" style={{ color: 'var(--clr-blue)', fontSize: '1rem', textTransform: 'uppercase' }}>Education</h5>
                       <ul style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                         <li><strong>MBA</strong> – Lagos State University</li>
                         <li><strong>MSc Human Resources</strong> – LASU</li>
                         <li><strong>PGD Management</strong> – UNICAL</li>
                         <li><strong>BSc Biology</strong> – UNICAL</li>
                       </ul>
                     </div>
                     <div>
                        <h5 className="card-title" style={{ color: 'var(--clr-blue)', fontSize: '1rem', textTransform: 'uppercase' }}>Global Recognition</h5>
                       <ul style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                         <li>UN Peace Ambassador</li>
                         <li>Global Diplomat</li>
                         <li>Honorary Doctorate</li>
                         <li>African Digital Ambassador</li>
                       </ul>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Board of Trustees Section */}
          <div style={{ marginBottom: '10rem' }}>
            <div className="text-center mb-5">
              <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Strategic Direction</span>
              <h2 className="section-title">Board of Trustees</h2>
              <p className="subtitle-text text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>The governing body ensuring the foundation's strategic direction and compliance.</p>
            </div>
            <div className="grid-cols-cards">
              {[
                { name: 'Amb. Dr. Loretta Emetam Enwezor', role: 'President & Founder' },
                { name: 'Lord Amb. Adebayo Ola Oso', role: 'Vice President' },
                { name: 'Engr. Chukwunonso Chiejina Obi', role: 'Secretary' },
                { name: 'Mrs Chinwe Vivian Ichoku', role: 'Treasurer' },
                { name: 'Mrs Theresa Nwagboliwe Obi', role: 'Matron / Welfare' }
              ].map((member, i) => (
                <motion.div 
                   key={i}
                   className="hover-lift"
                   style={{ 
                     background: 'var(--clr-surface)', 
                     padding: '2.5rem', 
                     borderRadius: '24px', 
                     boxShadow: 'var(--shadow-md)',
                     borderLeft: '6px solid var(--clr-gold)'
                   }}
                >
                  <h4 className="card-title" style={{ marginBottom: '1rem' }}>{member.name}</h4>
                  <p style={{ color: 'var(--clr-gold)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mb-5">
            <h2 className="section-title">Foundation Architecture</h2>
            <p className="subtitle-text text-muted">A structured hierarchy built for national and global sustainability.</p>
          </div>
          <div className="grid-cols-cards" style={{ marginBottom: '4rem' }}>
            {[
              { title: 'National Executive Council', icon: '🏛️' },
              { title: 'State Coordinators', icon: '📍' },
              { title: 'Special Committees', icon: '💼' },
              { title: 'Global Members', icon: '🌍' },
            ].map((exec, idx) => (
              <div 
                key={idx}
                className="hover-lift glass-panel"
                style={{ 
                   borderRadius: '24px', 
                   padding: '3rem 2rem',
                   textAlign: 'center',
                   background: 'var(--clr-surface)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{exec.icon}</div>
                <h4 className="card-title" style={{ margin: 0 }}>{exec.title}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Leadership;
