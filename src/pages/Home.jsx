import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiUsers, FiActivity, FiAward } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section 
        className="hero py-hero" 
        style={{
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url("/assets/humanitarian-support-4.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.6rem 1.75rem', 
              background: 'rgba(222, 155, 37, 0.2)', /* Used new logo gold */
              borderRadius: '50px', 
              color: 'var(--clr-gold)', 
              fontWeight: 800, 
              fontSize: '1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              marginBottom: '2rem',
              border: '1px solid rgba(222, 155, 37, 0.4)'
            }}>
              Global Humanitarian Leadership
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
            style={{ maxWidth: '900px', fontSize: 'clamp(3rem, 6vw + 1rem, 5.5rem)' }}
          >
            Empowering Communities. <br/><span style={{ color: 'var(--clr-gold)' }}>Transforming Lives.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="subtitle-text"
            style={{ maxWidth: '750px', marginBottom: '3rem', opacity: 0.95, fontSize: 'clamp(1.2rem, 2vw + 0.5rem, 1.5rem)', lineHeight: 1.7 }}
          >
            Dumelo Development Foundation supports women, youth, and vulnerable communities through empowerment, education, and humanitarian services across Nigeria.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-responsive-row"
            style={{ gap: '1.5rem', marginTop: '1rem', justifyContent: 'flex-start' }}
          >
            <Link to="/get-involved" className="btn btn-gold hover-lift" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Partner With Us</Link>
            <Link to="/programs" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white', padding: '1.25rem 3rem', fontSize: '1.1rem', background: 'rgba(255,255,255,0.05)' }}>View Our Impact</Link>
          </motion.div>
        </div>
      </section>

      {/* Trust & Recognition Bar */}
      <section className="section-bg-light" style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="flex-responsive-row" style={{ justifyContent: 'center', gap: '4rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-blue)', marginBottom: '0.75rem', letterSpacing: '1.5px' }}>Affiliated With</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Humanitarian Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Women Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Nigeria Police</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', borderLeft: '1px solid var(--clr-bg-alt)', paddingLeft: '2rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-gold)', marginBottom: '0.75rem', letterSpacing: '1.5px' }}>Regulatory Compliance</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>CAMA 2004</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>SCUML (EFCC)</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>DSS Profiled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Short) */}
      <section className="section py-section">
        <div className="container flex-responsive-row">
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Purpose</span>
            <h2 className="section-title mb-4 mt-2">A Structured Approach to <br/><span className="text-gold">Humanitarian Impact</span></h2>
            <p className="subtitle-text mb-5" style={{ color: 'var(--clr-text-main)' }}>
              Dumelo Development Foundation is more than an NGO; we are a strategic partner for change. We map out pathways to international standards for governments and businesses through workforce development, brand durability, and impactful humanitarian services.
            </p>
            <Link to="/about" className="btn btn-outline hover-lift" style={{ padding: '1rem 2.5rem' }}>Learn Our Story</Link>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
             <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <img src="/assets/humanitarian-support-1.jpeg" alt="Our Work" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover' }} />
             </div>
             <div className="glass-panel" style={{ 
               position: 'absolute', 
               bottom: '-20px', 
               left: '-20px', 
               background: 'var(--clr-blue)', 
               color: 'white', 
               padding: '2rem', 
               borderRadius: '24px', 
               boxShadow: 'var(--shadow-lg)',
               maxWidth: '280px'
             }}>
                <h4 style={{ color: 'var(--clr-gold)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Professional Standards</h4>
                <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.4 }}>Committed to international best practices in NGO management.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="section premium-gradient-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">Our Global Impact</h2>
            <p className="subtitle-text" style={{ maxWidth: '800px', margin: '1.5rem auto' }}>
              Credible data reflecting our commitment to transforming lives across borders through strategic humanitarian excellence.
            </p>
          </div>
          
          <div className="grid-cols-cards">
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
                className="glass-panel hover-lift"
                style={{ padding: '3rem 2rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', color: 'var(--clr-gold)', marginBottom: '1.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem', letterSpacing: '-1px' }}>{stat.number}</div>
                <div style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Summary Section */}
      <section className="section section-bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <span style={{ color: 'var(--clr-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Strategic Areas</span>
               <h2 className="section-title mt-2">Global Program Pillars</h2>
               <p className="subtitle-text text-muted mb-4">Focused intervention areas designed for maximum community and economic growth.</p>
            </div>
            
            <div className="grid-cols-cards">
               {[
                 { title: 'Empowerment Programs', desc: 'Advanced skills acquisition and entrepreneurial training for sustainable global livelihoods.', icon: <FiAward /> },
                 { title: 'Humanitarian Services', desc: 'Critical support structures for widows, vulnerable women, and abandoned families.', icon: <FiHeart /> },
                 { title: 'Education Support', desc: 'Tertiary scholarships and learning provisions to ensure no leadership potential is lost.', icon: <FiBook /> },
                 { title: 'Healthcare Interventions', desc: 'Emergency medical support and healthcare infrastructure for rural communities.', icon: <FiActivity /> }
               ].map((prog, idx) => (
                 <motion.div 
                   key={idx}
                   className="hover-lift"
                   style={{ 
                     background: 'var(--clr-surface)', 
                     padding: '2.5rem', 
                     borderRadius: '24px', 
                     boxShadow: 'var(--shadow-md)',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                     border: '1px solid var(--clr-bg-alt)'
                   }}
                 >
                   <div>
                      <div style={{ width: '60px', height: '60px', background: 'var(--clr-bg-light)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: 'var(--clr-blue)', marginBottom: '1.5rem' }}>{prog.icon}</div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{prog.title}</h3>
                      <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{prog.desc}</p>
                   </div>
                   <Link to="/programs" style={{ color: 'var(--clr-gold)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem' }}>
                      Learn More &rarr;
                   </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Founder Spotlight (Leadership) */}
      <section className="section">
        <div className="container flex-responsive-row">
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/founder-image.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', backgroundColor: 'var(--clr-bg-alt)', minHeight: '400px', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>The Visionary</span>
              <h2 className="section-title mt-2 mb-2">Amb. Dr. Loretta Emetam Enwezor</h2>
              <p className="subtitle-text mb-4" style={{ color: 'var(--clr-text-muted)', fontStyle: 'italic', fontWeight: 500 }}>
                UN Peace Ambassador & Global Diplomat
              </p>
              
              <div className="glass-panel" style={{ background: 'var(--clr-bg-light)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', borderLeft: '5px solid var(--clr-blue)' }}>
                <p style={{ color: 'var(--clr-text-main)', fontSize: '1.15rem', lineHeight: 1.6, margin: 0 }}>
                  "We map out pathways to international standard for government and businesses through workforce development and global connectivity, while illuminating areas of humanitarian excellence."
                </p>
              </div>
              
              <Link to="/leadership" className="btn btn-primary hover-lift" style={{ padding: '1rem 2.5rem' }}>View Profile</Link>
            </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section">
         <div className="container">
            <div className="premium-gradient-bg" style={{ borderRadius: '32px', padding: '6rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
               <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 className="section-title text-white mb-4">Ready to Create Impact?</h2>
                  <p className="subtitle-text" style={{ maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
                    Join a credible, structured organization that transforms humanitarian passion into sustainable global excellence.
                  </p>
                  <div className="flex-responsive-row" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                     <Link to="/contact" className="btn btn-gold hover-lift" style={{ padding: '1.25rem 3rem' }}>Partner With Us</Link>
                     <Link to="/get-involved" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white', padding: '1.25rem 3rem' }}>Get Involved</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
