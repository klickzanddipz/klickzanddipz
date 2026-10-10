import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data/galleryData';

interface GallerySectionProps {
  isHomeScreen?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isHomeScreen = false }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const modalPushedRef = useRef<boolean>(false);

  // On Home screen, show only 3 photos. On full Gallery page, show all photos.
  const displayImages = isHomeScreen ? GALLERY_IMAGES.slice(0, 3) : GALLERY_IMAGES;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    if (!modalPushedRef.current) {
      window.history.pushState({ galleryModalOpen: true }, '');
      modalPushedRef.current = true;
    }
  };

  const closeLightbox = () => {
    if (modalPushedRef.current) {
      modalPushedRef.current = false;
      window.history.back();
    } else {
      setSelectedImageIndex(null);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedImageIndex !== null) {
        modalPushedRef.current = false;
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const prevImg = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const nextImg = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % displayImages.length
    );
  };

  const activeImage = selectedImageIndex !== null ? displayImages[selectedImageIndex] : null;

  return (
    <section className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-3 border border-brand-primary/20">
              <Camera size={14} className="text-brand-accent animate-pulse" />
              <span>Studio & Cafe Captures</span>
              <Sparkles size={14} className="text-brand-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
              OUR <span className="text-brand-accent">GALLERY</span>
            </h2>
            <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2">
              Moments from VR Mall Chennai
            </p>
          </div>

          {isHomeScreen && (
            <div>
              <Link
                to="/gallery"
                className="btn-reflex btn-reflex-primary px-6 py-3 text-sm inline-flex items-center gap-2 uppercase tracking-wider"
              >
                <span>View Full Gallery</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          )}
        </div>

        {/* Gallery Grid - Clean visuals with zero title/text overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-3xl border-2 border-brand-primary/20 bg-brand-surface shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3] sm:aspect-square"
            >
              <img
                src={item.url}
                alt="Klickz & Dipz Photobooth & Cafe VR Mall Chennai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />
              
              {/* Elegant Subtle Vignette Hover Overlay (Zero Text) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Clean Lightbox Modal - Pure image with no text overlays */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Right Floating Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="fixed top-5 right-5 sm:top-7 sm:right-7 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer border border-white/25 z-50 shadow-2xl backdrop-blur-md active:scale-95"
            >
              <X size={26} />
            </button>

            {/* Modal Image Frame with Previous/Next Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-accent/40 shadow-2xl bg-black max-h-[85vh] flex items-center justify-center">
                <img
                  src={activeImage.url}
                  alt="Klickz & Dipz VR Chennai"
                  className="max-h-[85vh] w-auto max-w-full object-contain select-none"
                />

                {/* Previous Button */}
                <button
                  onClick={prevImg}
                  aria-label="Previous Image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer border border-white/20 shadow-xl active:scale-95"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextImg}
                  aria-label="Next Image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer border border-white/20 shadow-xl active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
