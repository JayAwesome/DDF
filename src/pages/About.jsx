import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            Dumelo… Greater Heights for Our Tomorrow
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
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="mb-4">Who We Are</h2>
          <div style={{ color: 'var(--clr-text-main)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p className="mb-3">
              Dumelo Development Foundation is a global facing Organization with the goal to map out pathways to international standard for Government, Businesses, and Global connectivity through workforce development, marketing and brand durability, while illuminating areas of humanitarian services, charitable services, empowerments for youths, widows, widowers, retirees, & single parents, for benefiting and as well performing at optimal capacity and capability.
            </p>
            <p className="mb-3">
              The thematic priorities of Dumelo Development Foundation are on humanitarian services, care giving services, community driven development projects, social works, charity and empowerment programmes for women, men, youths, and the aged. The Foundation was initiated from the passion of solving the basic challenges facing humanity.
            </p>
            <p className="mb-3">
              Her inter-personal relationship management, and her quest to be more impactful in the area of contributory financial control management & services to humanity birthed Dumelo Development Foundation.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--clr-heading)', fontWeight: 500 }}>
              We believe true impact comes from not just giving, but empowering individuals to become self-sufficient and productive members of society.
            </p>
          </div>
        </div>
      </section>

      {/* What DUMELO Means */}
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
