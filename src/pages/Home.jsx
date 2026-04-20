import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiUsers, FiActivity, FiAward } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url("/assets/humanitarian-support-4.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          padding: 'clamp(8rem, 15vw, 12rem) 0 clamp(6rem, 10vw, 8rem)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                display: 'inline-block', 
                padding: '0.6rem 1.75rem', 
                background: 'rgba(222, 155, 37, 0.2)', 
                borderRadius: '50px', 
                color: 'var(--clr-gold)', 
                fontWeight: 800, 
                fontSize: '0.9rem', 
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
              style={{ color: 'white' }}
            >
              Empowering Communities. <br/><span style={{ color: 'var(--clr-gold)' }}>Transforming Lives.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="subtitle-text"
              style={{ maxWidth: '750px', marginBottom: '3rem', opacity: 0.95 }}
            >
              Dumelo Development Foundation supports women, youth, and vulnerable communities through empowerment, education, and humanitarian services across Nigeria.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex-responsive-row"
              style={{ gap: '1.5rem', justifyContent: 'flex-start' }}
            >
              <Link to="/get-involved" className="btn btn-gold hover-lift">Partner With Us</Link>
              <Link to="/programs" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white', border: '1px solid white' }}>View Our Impact</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Recognition Bar */}
      <section className="section-bg-light" style={{ padding: '4rem 0', borderBottom: '1px solid var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="flex-responsive-row" style={{ justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-blue)', marginBottom: '1rem', letterSpacing: '1px' }}>Affiliated With</p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Humanitarian Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Ministry of Women Affairs</span>
                <span style={{ fontWeight: 700, color: 'var(--clr-text-muted)', fontSize: '0.95rem' }}>Nigeria Police</span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--clr-gold)', marginBottom: '1rem', letterSpacing: '1px' }}>Regulatory Compliance</p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
        <div className="container flex-responsive-row">
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Our Purpose</span>
            <h2 className="section-title">A Structured Approach to <br/><span className="text-gold">Humanitarian Impact</span></h2>
            <p className="subtitle-text mb-5">
              Dumelo Development Foundation is more than an NGO; we are a strategic partner for change. We map out pathways to international standards for governments and businesses through workforce development, brand durability, and impactful humanitarian services.
            </p>
            <Link to="/about" className="btn btn-outline hover-lift">Learn Our Story</Link>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
             <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <img src="/assets/humanitarian-support-1.jpeg" alt="Our Work" style={{ width: '100%', height: 'auto', minHeight: '350px', objectFit: 'cover' }} />
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
                <h4 style={{ color: 'var(--clr-gold)', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>Professional Standards</h4>
                <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.4, margin: 0 }}>Committed to international best practices in NGO management.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Global Impact</h2>
            <p className="subtitle-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Credible data reflecting our commitment to transforming lives across borders through strategic humanitarian excellence.
            </p>
          </div>
          
          <div className="grid-cols-cards">
            {[
              { number: '200,000+', label: 'Beneficiaries Reached', icon: <FiUsers /> },
              { number: '30+', label: 'Students Sponsored', icon: <FiBook /> },
              { number: 'Multiple', label: 'States Covered', icon: <FiActivity /> },
              { number: 'Hundreds', label: 'Empowered Through Programs', icon: <FiAward /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="hover-lift"
                style={{ background: 'var(--clr-surface)', padding: '3.5rem 2rem', textAlign: 'center', borderRadius: '24px', border: '1px solid var(--clr-bg-alt)', boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--clr-gold)', marginBottom: '1.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--clr-blue)', marginBottom: '1rem', letterSpacing: '-2px', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--clr-text-main)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Summary Section */}
      <section className="section">
         <div className="container">
            <div className="text-center mb-5">
               <span style={{ color: 'var(--clr-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Strategic Areas</span>
               <h2 className="section-title">Global Program Pillars</h2>
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
                      <h3 className="card-title">{prog.title}</h3>
                      <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem' }}>{prog.desc}</p>
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
      <section className="section section-bg-light">
        <div className="container">
          <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '40px', background: 'var(--clr-surface)' }}>
            <div className="flex-responsive-row" style={{ alignItems: 'center', gap: '4rem' }}>
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '8px solid white' }}>
                  <img src="/assets/founder-image.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', backgroundColor: 'var(--clr-bg-alt)', minHeight: '450px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ flex: '1 2 500px', textAlign: 'left' }}>
                <span style={{ color: 'var(--clr-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Our Leadership</span>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--clr-blue)' }}>Amb. Dr. Loretta Emetam Enwezor</h2>
                <h3 className="card-title" style={{ fontSize: '1.5rem', color: 'var(--clr-gold)', marginBottom: '2rem' }}>President & Founder</h3>
                
                <p className="subtitle-text" style={{ marginBottom: '2.5rem', maxWidth: '600px' }}>
                  A visionary leader and global diplomat dedicated to uplifting the vulnerable. With decades of experience in humanitarian service, she drives the foundation's mission to create sustainable pathways for growth and empowerment across Nigeria and beyond.
                </p>
                
                <div style={{ background: 'var(--clr-bg-light)', padding: '2.5rem', borderRadius: '24px', borderLeft: '6px solid var(--clr-gold)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '4rem', color: 'var(--clr-gold)', opacity: 0.2, fontFamily: 'serif' }}>&ldquo;</span>
                  <p style={{ color: 'var(--clr-blue)', fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', fontWeight: 600, fontStyle: 'italic', margin: 0, lineHeight: 1.4, position: 'relative', zIndex: 1 }}>
                    Philanthropy is not about money, but about compassion and action.
                  </p>
                </div>
                
                <div style={{ marginTop: '3rem' }}>
                  <Link to="/leadership" className="btn btn-primary hover-lift">Read Full Bio</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section">
         <div className="container">
            <div className="premium-gradient-bg" style={{ borderRadius: '32px', padding: 'clamp(4rem, 8vw, 6rem) 2rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
               <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 className="section-title text-white">Ready to Create Impact?</h2>
                  <p className="subtitle-text" style={{ maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9, color: 'white' }}>
                    Join a credible, structured organization that transforms humanitarian passion into sustainable global excellence.
                  </p>
                  <div className="flex-responsive-row" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                     <Link to="/contact" className="btn btn-gold hover-lift">Partner With Us</Link>
                     <Link to="/get-involved" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white' }}>Get Involved</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
