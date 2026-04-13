import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <div className="section-bg-blue" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ color: 'var(--clr-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>Who We Are</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Dumelo Development Foundation is a structured, global-standard organization dedicated to transformational humanitarian excellence and sustainable development.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '8px', borderTop: '4px solid var(--clr-gold)' }}
            >
              <h2 className="mb-3">Our Mission</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                To serve humanity through empowerment, charity, and compassionate service rooted in love and unity.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '8px', borderTop: '4px solid var(--clr-heading)' }}
            >
              <h2 className="mb-3">Our Vision</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                To build a transformed society driven by empowered individuals and sustainable entrepreneurship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story / About */}
      <section className="section">
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="mb-4">Our Professional Identity</h2>
          <div style={{ color: 'var(--clr-text-main)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            <p className="mb-4">
              Dumelo Development Foundation is a global-facing organization committed to establishing international benchmarks for governments and private sectors. We specialize in mapping out strategic pathways for growth through workforce development, brand sustainability, and global connectivity.
            </p>
            <p className="mb-4">
              Simultaneously, we lead high-impact humanitarian initiatives, charitable services, and targeted empowerment programs. Our focus extends to youths, widows, retirees, and single parents, ensuring they perform at their optimal capacity and capability in a modern economy.
            </p>
            <p className="mb-4">
              Born from a passion for solving human challenges and a commitment to professional excellence, Dumelo was founded to bridge the gap between humanitarian aid and sustainable, structured development.
            </p>
            <div style={{ padding: '2rem', background: 'var(--clr-bg-light)', borderRadius: '16px', borderLeft: '5px solid var(--clr-gold)', textAlign: 'left', marginTop: '2rem' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--clr-blue)', fontWeight: 600, margin: 0 }}>
                "We believe true impact is achieved when individuals are not just supported, but empowered to become self-sufficient, productive pillars of society."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status & Compliance */}
      <section className="section" style={{ background: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="mb-4">Legal Status & Compliance</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>
                Dumelo Development Foundation is a duly registered non-governmental organization under **Part C of the Companies and Allied Matters Act (CAMA), 2004**.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>
                The organization is also registered with the **Special Control Unit Against Money Laundering (SCUML)** under the Economic and Financial Crimes Commission (EFCC), and profiled with the **Department of State Services (DSS), Abuja**.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['CAMA 2004', 'SCUML Certified', 'DSS Profiled'].map(tag => (
                   <span key={tag} style={{ background: 'var(--clr-blue)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--clr-surface)', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Organizational Classification</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Non-profit Organization', icon: '💎' },
                  { title: 'Non-political Organization', icon: '⚖️' },
                  { title: 'Constitutionally Governed Body', icon: '📜' },
                  { title: 'Board of Trustees Leadership', icon: '👥' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Recognition */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem' }}>Institutional Recognition</h2>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              We maintain active engagement and institutional recognition with key government bodies to ensure transparency and wide-reaching impact.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
             {[
               { title: 'Ministry of Humanitarian Affairs', subtitle: 'Disaster Management and Social Development' },
               { title: 'Ministry of Women Affairs', subtitle: 'Federal Republic of Nigeria' },
               { title: 'Nigeria PoliceForce', subtitle: 'Community & Security Collaboration' }
             ].map((gov, i) => (
               <div key={i} style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--clr-bg-light)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🏛️</div>
                  <h4 style={{ color: 'var(--clr-blue)', marginBottom: '0.5rem' }}>{gov.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>{gov.subtitle}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      <section className="section section-bg-blue">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'white' }}>The Essence of D.U.M.E.L.O</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { letter: 'D', word: 'Development', desc: '' },
              { letter: 'U', word: 'Unions', desc: '(Widows, Students, Retirees, etc.)' },
              { letter: 'M', word: 'Multi-Purpose', desc: '(Cooperative and income systems)' },
              { letter: 'E', word: 'Entrepreneurship', desc: '' },
              { letter: 'L', word: 'Labour', desc: '(Workforce and structure)' },
              { letter: 'O', word: 'Organization', desc: '' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', color: 'var(--clr-gold)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{item.letter}</div>
                <h3 style={{ color: 'white', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{item.word}</h3>
                <p style={{ color: '#d1e0ff', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 350px' }}>
              <h2 className="mb-3">Our Core Values</h2>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                The principles that guide our interactions, outline our operational standards, and fortify our organizational culture.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {['Teamwork', 'Patriotism', 'Accountability', 'Transparency', 'Integrity', 'Empowerment', 'Innovation', 'Collaboration'].map(value => (
                  <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--clr-heading)' }}>
                    <FiCheckCircle style={{ color: 'var(--clr-gold)' }} />
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: '1 1 300px', background: 'var(--clr-bg-light)', padding: '3rem', borderRadius: '12px' }}>
               <h3 className="mb-3">Affiliations</h3>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--clr-text-main)' }}>
                 <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}><strong>WESHNET</strong> - We Serve Humanity Network</li>
                 <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}><strong>WOLPANEF</strong> - Widows, Orphans & Needy Empowerment Foundation</li>
                 <li><strong>TU-E</strong> Capital Investments</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
