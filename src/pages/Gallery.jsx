import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 21 }, (_, i) => ({
    src: `/assets/humanitarian-support-${i + 1}.jpeg`,
    cap: `Humanitarian Support ${i + 1}`
  }));

  return (
    <div className="gallery-page animate-fade-in" style={{ paddingBottom: '5rem' }}>
      <div className="section-bg-blue" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Media Gallery</h1>
          <p style={{ fontSize: '1.25rem', color: '#d1e0ff', maxWidth: '600px', margin: '0 auto' }}>
            A glimpse into our outreach events and the lives we've touched along the way.
          </p>
        </div>
      </div>

      <div className="container mt-5" style={{ marginTop: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.03 }}
              style={{ 
                cursor: 'pointer', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-sm)',
                aspectRatio: '1'
              }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.cap} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
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
              backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem', flexDirection: 'column'
            }}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src} 
              alt={selectedImage.cap}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '4px' }} 
              onClick={(e) => e.stopPropagation()}
            />
            <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.25rem' }}>{selectedImage.cap}</p>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white', fontSize: '2rem' }}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
