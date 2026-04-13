import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiUsers, FiActivity, FiAward } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--clr-blue) 0%, var(--clr-blue-light) 100%)',
        color: 'white',
        padding: '12rem 0 10rem', /* More generous padding */
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.6rem 1.75rem', 
              background: 'rgba(212, 175, 55, 0.15)', 
              borderRadius: '50px', 
              color: 'var(--clr-gold)', 
              fontWeight: 700, 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              marginBottom: '2rem',
              border: '1px solid rgba(197, 160, 40, 0.3)'
            }}>
              Global Humanitarian Leadership
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'white', fontWeight: 800, lineHeight: 1 }}
          >
            Building Pathways to <span className="text-gold">Sustainable</span> Growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '1.4rem', marginBottom: '4rem', fontWeight: 400, maxWidth: '850px', margin: '0 auto 4rem', opacity: 0.9, lineHeight: 1.6 }}
          >
            Dumelo Development Foundation is a credible, structured organization committed to transforming lives through strategic empowerment and humanitarian excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link to="/get-involved" className="btn btn-gold" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Partner With Us</Link>
            <Link to="/programs" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Our Programs</Link>
          </motion.div>
        </div>
      </section>

      {/* Trust & Recognition Bar */}
      <section style={{ 
        background: 'var(--clr-bg-light)', 
        padding: '3.5rem 0', 
        borderBottom: '1px solid #eee' 
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '4rem',
            opacity: 1
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-blue)', marginBottom: '0.75rem', letterSpacing: '1.5px' }}>Affiliated With</p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Humanitarian Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Women Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Nigeria Police</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', borderLeft: '1px solid #ddd', paddingLeft: '4rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-gold)', marginBottom: '0.75rem', letterSpacing: '1.5px' }}>Regulatory Compliance</p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>CAMA 2004</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>SCUML (EFCC)</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>DSS Profiled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Short) */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Purpose</span>
            <h2 className="mb-5" style={{ fontSize: '3rem', marginTop: '1rem' }}>A Structured Approach to <br/><span className="text-gold">Humanitarian Impact</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--clr-text-main)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Dumelo Development Foundation is more than an NGO; we are a strategic partner for change. We map out pathways to international standards for governments and businesses through workforce development, brand durability, and impactful humanitarian services.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Learn Our Story</Link>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
             <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <img src="/assets/humanitarian-support-1.jpeg" alt="Our Work" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
             </div>
             <div style={{ 
               position: 'absolute', 
               bottom: '-40px', 
               left: '-40px', 
               background: 'var(--clr-blue)', 
               color: 'white', 
               padding: '3rem', 
               borderRadius: '24px', 
               boxShadow: 'var(--shadow-lg)',
               maxWidth: '300px'
             }}>
                <h4 style={{ color: 'var(--clr-gold)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Professional Standards</h4>
                <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6 }}>Committed to international best practices in NGO management and operations.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="section section-bg-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ color: 'white', fontSize: '3rem' }}>Our Global Impact</h2>
            <p style={{ color: '#d1e0ff', fontSize: '1.25rem', maxWidth: '800px', margin: '1.5rem auto' }}>
              Credible data reflecting our commitment to transforming lives across borders through strategic humanitarian excellence.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {[
              { number: '200,000+', label: 'Beneficiaries Impacted', icon: <FiUsers /> },
              { number: '30+', label: 'Students Sponsored', icon: <FiBook /> },
              { number: 'Hundreds', label: 'Artisans & Widows', icon: <FiAward /> },
              { number: 'Multiple', label: 'State Outreaches', icon: <FiActivity /> },
              { number: 'Ongoing', label: 'Healthcare Support', icon: <FiHeart /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '4rem 2rem', 
                  borderRadius: '24px', 
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ fontSize: '2.5rem', color: 'var(--clr-gold)', marginBottom: '1.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem', letterSpacing: '-1px' }}>{stat.number}</div>
                <div style={{ fontSize: '1.1rem', color: '#cbd5e1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '8rem', background: 'var(--clr-white)', padding: '5rem', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }}>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                <div>
                   <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px' }}>Impact Story</span>
                   <h3 style={{ color: 'var(--clr-blue)', fontSize: '2.5rem', margin: '1rem 0 2rem' }}>Our Strategic Narrative</h3>
                   <p style={{ color: 'var(--clr-text-main)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                    Dumelo Development Foundation has reached and transformed lives across Nigeria through empowerment, education, and humanitarian services. We are dedicated to creating sustainable pathways for the vulnerable and empowering the next generation of global leaders.
                   </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                   {[
                     'Community outreach across multiple federal states',
                     'Full sponsorship through tertiary education',
                     'Strategic empowerment of hundreds of artisans',
                     'Immediate healthcare and emergency support'
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--clr-bg-light)', padding: '1.5rem 2rem', borderRadius: '16px', borderLeft: '5px solid var(--clr-gold)' }}>
                        <FiHeart style={{ color: 'var(--clr-gold)', fontSize: '1.2rem' }} />
                        <span style={{ fontWeight: 700, color: 'var(--clr-blue)', fontSize: '1.05rem' }}>{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Programs Summary Section */}
      <section className="section" style={{ background: 'var(--clr-bg-alt)' }}>
         <div className="container">
            <div className="text-center mb-8">
               <span style={{ color: 'var(--clr-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Strategic Areas</span>
               <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Global Program Pillars</h2>
               <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.25rem' }}>Focused intervention areas designed for maximum community and economic growth.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
               {[
                 { title: 'Empowerment Programs', desc: 'Advanced skills acquisition and entrepreneurial training for sustainable global livelihoods.', icon: <FiAward /> },
                 { title: 'Humanitarian Services', desc: 'Critical support structures for widows, vulnerable women, and abandoned families.', icon: <FiHeart /> },
                 { title: 'Education Support', desc: 'Tertiary scholarships and learning provisions to ensure no leadership potential is lost.', icon: <FiBook /> },
                 { title: 'Healthcare Interventions', desc: 'Emergency medical support and healthcare infrastructure for rural communities.', icon: <FiActivity /> }
               ].map((prog, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -15 }}
                   style={{ 
                     background: 'var(--clr-surface)', 
                     padding: '3.5rem', 
                     borderRadius: '24px', 
                     boxShadow: 'var(--shadow-md)',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                     border: '1px solid rgba(0,0,0,0.05)'
                   }}
                 >
                   <div>
                      <div style={{ width: '70px', height: '70px', background: 'var(--clr-bg-light)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--clr-blue)', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>{prog.icon}</div>
                      <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{prog.title}</h3>
                      <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '1.05rem' }}>{prog.desc}</p>
                   </div>
                   <Link to="/programs" style={{ color: 'var(--clr-gold)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                      Learn More &rarr;
                   </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Founder Spotlight (Leadership) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 450px', position: 'relative' }}>
              <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid #eee' }}>
                <img src="/assets/founder-image.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#eee', minHeight: '600px', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', top: '30px', left: '-30px', background: 'var(--clr-gold)', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', boxShadow: 'var(--shadow-md)', letterSpacing: '1px' }}>
                President & Founder
              </div>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem' }}>The Visionary</span>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>Amb. Dr. Loretta Emetam Enwezor</h2>
              <p style={{ fontSize: '1.35rem', color: 'var(--clr-text-muted)', marginBottom: '2.5rem', fontStyle: 'italic', fontWeight: 500 }}>
                UN Peace Ambassador & Global Diplomat
              </p>
              
              <div style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', borderLeft: '6px solid var(--clr-blue)', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ color: 'var(--clr-text-main)', fontSize: '1.25rem', lineHeight: 1.8, margin: 0 }}>
                  "We map out pathways to international standard for government and businesses through workforce development and global connectivity, while illuminating areas of humanitarian excellence."
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
                <div>
                   <h4 style={{ color: 'var(--clr-blue)', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Core Expertise</h4>
                   <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                     {['Corporate Leadership', 'Government Service', 'Grassroots Mobilization', 'Strategic Management'].map(ex => (
                       <li key={ex} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--clr-text-main)' }}>
                         <div style={{ width: '8px', height: '8px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
                         {ex}
                       </li>
                     ))}
                   </ul>
                </div>
                <div>
                   <h4 style={{ color: 'var(--clr-blue)', marginBottom: '1.5rem', fontSize: '1rem', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Global Credentials</h4>
                   <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                     {['Global Peace Doctorate', 'African Digital Ambassador', 'UN Certified Human Rights'].map(ac => (
                       <li key={ac} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--clr-text-main)' }}>
                         <div style={{ width: '8px', height: '8px', background: 'var(--clr-gold)', borderRadius: '50%' }}></div>
                         {ac}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
              
              <Link to="/leadership" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>View Full Leadership Profile</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{ padding: '0 0 8rem' }}>
         <div className="container">
            <div style={{ 
              background: 'linear-gradient(135deg, var(--clr-blue) 0%, var(--clr-blue-light) 100%)', 
              borderRadius: '40px', 
              padding: '8rem 4rem', 
              textAlign: 'center',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}>
               <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 style={{ color: 'white', fontSize: '4rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Create Impact?</h2>
                  <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 4rem', opacity: 0.9, lineHeight: 1.6 }}>
                    Join a credible, structured organization that transforms humanitarian passion into sustainable global excellence.
                  </p>
                  <div className="flex justify-center gap-4">
                     <Link to="/contact" className="btn btn-gold" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Partner With Us</Link>
                     <Link to="/get-involved" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Get Involved</Link>
                  </div>
               </div>
               {/* Accent decoration */}
               <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%' }}></div>
               <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%' }}></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
