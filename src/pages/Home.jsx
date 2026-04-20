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
          backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.45)), url("/assets/humanitarian-support-4.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          padding: 'clamp(10rem, 18vw, 14rem) 0 clamp(7rem, 12vw, 10rem)'
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
              style={{ color: 'white', fontWeight: 800 }}
            >
              Empowering Communities. <span style={{ color: 'var(--clr-gold)' }}>Transforming Lives.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="subtitle-text"
              style={{ maxWidth: '780px', marginBottom: '3rem', opacity: 0.92, color: 'rgba(255,255,255,0.88)' }}
            >
              We partner with women, youth, and vulnerable communities to deliver empowerment, education, and humanitarian services across Nigeria.
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
            <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Our Purpose</span>
            <h2 className="section-title">A Structured Approach to <br/><span className="text-gold">Humanitarian Impact</span></h2>
            <p className="subtitle-text" style={{ marginBottom: '1.5rem' }}>
              We show up where support is needed most—turning compassion into practical help that helps families stand stronger, sooner.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <li style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ color: 'var(--clr-gold)', marginTop: '0.2rem', fontSize: '1.25rem', flexShrink: 0 }}><FiUsers /></span>
                <span className="subtitle-text" style={{ margin: 0 }}>
                  <strong>Who we serve:</strong> women, youth, and vulnerable communities across Nigeria.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ color: 'var(--clr-gold)', marginTop: '0.2rem', fontSize: '1.25rem', flexShrink: 0 }}><FiHeart /></span>
                <span className="subtitle-text" style={{ margin: 0 }}>
                  <strong>What we do:</strong> empowerment programs, education support, and humanitarian services that meet real needs.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ color: 'var(--clr-gold)', marginTop: '0.2rem', fontSize: '1.25rem', flexShrink: 0 }}><FiAward /></span>
                <span className="subtitle-text" style={{ margin: 0 }}>
                  <strong>Why it matters:</strong> because dignified support today creates stability, opportunity, and hope tomorrow.
                </span>
              </li>
            </ul>
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
      <section className="section section-bg-blue">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow eyebrow--on-dark" style={{ display: 'block', marginBottom: '1rem' }}>Trusted Results</span>
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="subtitle-text" style={{ maxWidth: '820px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
              Clear metrics reflecting our commitment to empowering communities and delivering lasting, measurable change.
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
                style={{
                  background: 'rgba(255,255,255,0.98)',
                  padding: '3.25rem 2.25rem',
                  textAlign: 'center',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    margin: '0 auto 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'color-mix(in oklab, var(--clr-gold) 22%, transparent)',
                    color: 'var(--clr-gold)',
                    fontSize: '2rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ fontSize: 'clamp(3.25rem, 5vw, 4.25rem)', fontWeight: 900, color: 'var(--clr-blue)', marginBottom: '0.75rem', letterSpacing: '-2px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--clr-text-main)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', lineHeight: 1.35 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Summary Section */}
      <section className="section">
         <div className="container">
            <div className="text-center mb-5">
               <span className="eyebrow eyebrow--blue" style={{ display: 'block', marginBottom: '1rem' }}>Strategic Areas</span>
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
                   className="program-card"
                   initial={{ opacity: 0, y: 14 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: idx * 0.05 }}
                   viewport={{ once: true }}
                 >
                   <div>
                      <div className="program-card__icon" aria-hidden="true">{prog.icon}</div>
                      <h3 className="card-title">{prog.title}</h3>
                      <p className="line-clamp-2" style={{ color: 'var(--clr-text-muted)', margin: 0 }}>{prog.desc}</p>
                   </div>
                   <Link to="/programs" className="program-card__link">
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
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 5vw, 4.5rem)',
              borderRadius: '40px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 100%)',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div className="flex-responsive-row" style={{ alignItems: 'center', gap: '4.5rem' }}>
              <div style={{ flex: '1.1 1 460px' }}>
                <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '10px solid rgba(255,255,255,0.9)' }}>
                  <img src="/assets/founder-image.jpeg" alt="Amb. Dr. Loretta Emetam Enwezor" style={{ width: '100%', height: 'auto', backgroundColor: 'var(--clr-bg-alt)', minHeight: '500px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ flex: '1 1 520px', textAlign: 'left' }}>
                <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Our Leadership</span>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--clr-blue)' }}>Amb. Dr. Loretta Emetam Enwezor</h2>
                <h3 className="card-title" style={{ fontSize: '1.5rem', color: 'var(--clr-gold)', marginBottom: '2rem' }}>President & Founder</h3>
                
                <p className="subtitle-text" style={{ marginBottom: '1.75rem', maxWidth: '620px' }}>
                  A trusted humanitarian leader committed to building opportunity, dignity, and lasting support for vulnerable communities.
                </p>
                
                <div style={{ background: 'color-mix(in oklab, var(--clr-gold) 10%, var(--clr-bg-light))', padding: '2.25rem', borderRadius: '24px', borderLeft: '6px solid var(--clr-gold)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '4rem', color: 'var(--clr-gold)', opacity: 0.2, fontFamily: 'serif' }}>&ldquo;</span>
                  <p style={{ color: 'var(--clr-blue)', fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 650, fontStyle: 'italic', margin: 0, lineHeight: 1.45, position: 'relative', zIndex: 1 }}>
                    “Philanthropy is not about money, but about compassion and action.”
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
            <div
              className="premium-gradient-bg"
              style={{
                borderRadius: '32px',
                padding: 'clamp(4rem, 8vw, 6rem) 2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
               <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 className="section-title text-white">Join Us in Transforming Lives</h2>
                  <p className="subtitle-text" style={{ maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9, color: 'rgba(255,255,255,0.88)' }}>
                    Partner with Dumelo Development Foundation to create lasting impact in communities.
                  </p>
                  <div className="flex-responsive-row" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                     <Link to="/get-involved" className="btn btn-gold hover-lift">Partner With Us</Link>
                     <Link to="/contact" className="btn btn-outline hover-lift" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
