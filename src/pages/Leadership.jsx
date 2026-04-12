import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <div className="leadership-page animate-fade-in">
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Organizational Structure</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            Meet the dedicated individuals driving the vision and operations of the Dumelo Development Foundation.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          
          {/* Main Leadership Image Board */}
          <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <h2 className="mb-4">National Executive Council & State Coordinators</h2>
            <div style={{ 
              background: 'var(--clr-surface)', 
              padding: '1rem', 
              borderRadius: '12px', 
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <img 
                src="/assets/leadership-structure.jpeg" 
                alt="Dumelo Development Foundation Leadership Board" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', backgroundColor: '#f0f0f0', minHeight: '300px' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1000x500?text=Leadership+Board+Image'; }}
              />
            </div>
          </div>

          {/* Founder Profile Section */}
          <div style={{ background: 'var(--clr-bg-light)', padding: '4rem 2rem', borderRadius: '12px', marginBottom: '5rem' }}>
            <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', color: 'var(--clr-gold)' }}>Founder Profile</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
               <div style={{ flex: '1 1 350px' }}>
                  <img src="/assets/founder's-speech-giving.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', objectFit: 'cover' }} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/500x600?text=Founder+Profile'; }}/>
               </div>
               <div style={{ flex: '1 1 500px' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--clr-heading)' }}>Amb. Dr. Loretta Emetam Enwezor</h3>
                  <h4 style={{ color: 'var(--clr-gold)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>President & Founder</h4>
                  <p style={{ color: 'var(--clr-text-main)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    A seasoned entrepreneur and humanitarian with extensive experience in corporate leadership, government service, and grassroots mobilization. She is recognized for her strong relationship management skills and commitment to impactful service.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                     <div>
                       <h5 style={{ color: 'var(--clr-heading)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Education</h5>
                       <ul style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8 }}>
                         <li><strong>MBA</strong> – Lagos State University</li>
                         <li><strong>MSc Human Resources</strong> – Lagos State University</li>
                         <li><strong>PGD Management</strong> – University of Calabar</li>
                         <li><strong>BSc Biology</strong> – University of Calabar</li>
                       </ul>
                     </div>
                     <div>
                        <h5 style={{ color: 'var(--clr-heading)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Global Recognition</h5>
                       <ul style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8 }}>
                         <li>UN Peace Ambassador</li>
                         <li>Global Diplomat</li>
                         <li>Honorary Doctorate in Global Peace & Humanities</li>
                         <li>African Digital Ambassador</li>
                       </ul>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <h2 className="text-center mb-5">Foundation Architecture</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2rem',
            textAlign: 'center' 
          }}>
            {[
              { title: 'Board of Trustees', icon: '🏛️' },
              { title: 'Executives', icon: '💼' },
              { title: 'State Coordinators', icon: '📍' },
              { title: 'Global Members', icon: '🌍' },
            ].map((exec, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                style={{ 
                  background: 'var(--clr-surface)', 
                  borderRadius: '8px', 
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)',
                  borderTop: '3px solid var(--clr-gold)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{exec.icon}</div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--clr-heading)' }}>{exec.title}</h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Leadership;
