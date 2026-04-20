import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 21 }, (_, i) => ({
    src: `/assets/humanitarian-support-${i + 1}.jpeg`,
    cap: `Dumelo Impact Event #${i + 1}`
  }));

  return (
    <div className="gallery-page animate-fade-in">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow--gold" style={{ display: 'block', marginBottom: '1rem' }}>Visual Journey</span>
          <h1 className="hero-title">Media Gallery</h1>
          <p className="subtitle-text" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '750px', margin: '0 auto' }}>
            Photos from outreach moments, community events, and empowerment programs across Nigeria.
          </p>
        </div>
      </header>

      <div className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                layoutId={`img-${idx}`}
                whileHover={{ y: -10 }}
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)',
                  aspectRatio: '4/5',
                  position: 'relative',
                  background: 'var(--clr-bg-light)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.cap} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, left: 0, right: 0, 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', 
                  padding: '2rem 1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between'
                }} className="gallery-overlay">
                  <span style={{ color: 'white', fontWeight: 600, fontSize: 'var(--fs-small)' }}>{img.cap}</span>
                  <FiMaximize2 style={{ color: 'var(--clr-gold)', fontSize: '1.25rem' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(2, 6, 23, 0.95)', zIndex: 2000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem', backdropFilter: 'blur(8px)'
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ position: 'relative', maxWidth: '100%', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.cap}
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} 
              />
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>{selectedImage.cap}</p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                style={{ 
                  position: 'absolute', top: '-60px', right: '0', 
                  color: 'white', background: 'rgba(255,255,255,0.1)', 
                  border: 'none', borderRadius: '50%', width: '45px', height: '45px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-page div:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
