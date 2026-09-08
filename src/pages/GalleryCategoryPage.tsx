import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export const GalleryCategoryPage = () => {
  const { categoryId } = useParams();
  const title = categoryId ? categoryId.toUpperCase() : 'GALLERY';
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const modalPushedRef = useRef<boolean>(false);
  
  const IMAGES = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621996311210-9113a96092b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1510693202936-398df9959f63?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516280440502-a720dc4aa39a?auto=format&fit=crop&w=800&q=80'
  ];

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

  const prevImg = () => {
    setSelectedImageIndex((prev) => (prev === null ? null : prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % IMAGES.length));
  };

  const CATEGORIES = [
    { id: 'cafe', title: 'CAFE', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
    { id: 'photobooth', title: 'PHOTOBOOTH', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
    { id: 'food', title: 'FOOD', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
    { id: 'drinks', title: 'DRINKS', img: 'https://images.unsplash.com/photo-1510693202936-398df9959f63?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <Helmet>
        <title>{title} Gallery | Klickz & Dipz Cafe</title>
        <meta name="description" content={`View our ${title.toLowerCase()} gallery.`} />
      </Helmet>
      <div className="py-16 md:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-primary/20">
              <Sparkles size={14} className="text-brand-accent animate-spin" />
              <span>Gallery Collection</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">{title}</h2>
            <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2">Explore our captures</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {IMAGES.map((img, i) => (
              <div 
                key={i} 
                onClick={() => openLightbox(i)}
                className="floating-card aspect-square rounded-3xl overflow-hidden border-2 border-brand-primary/20 shadow-md hover:shadow-2xl cursor-pointer group"
              >
                <img src={img} alt={`${title} ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jump to other categories section */}
      <div className="bg-brand-surface py-16 border-t-2 border-brand-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-black font-display text-brand-dark uppercase tracking-tight mb-8 text-center">More Galleries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.filter(c => c.id !== categoryId).map((c) => (
              <Link 
                key={c.id} 
                to={`/gallery/${c.id}`} 
                className="floating-card group relative h-32 md:h-48 rounded-2xl overflow-hidden border-2 border-brand-primary/20 block shadow-md"
              >
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/30 transition-colors flex items-center justify-center">
                  <span className="text-white font-black font-display tracking-widest text-lg md:text-xl uppercase drop-shadow-md">{c.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-brand-dark/95 flex items-center justify-center backdrop-blur-xs"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors p-2 cursor-pointer z-10" 
              onClick={closeLightbox}
            >
              <X size={40} />
            </button>
            
            <button 
              className="btn-reflex btn-reflex-accent absolute left-4 md:left-10 text-brand-dark p-3 rounded-full z-10 cursor-pointer" 
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
            >
              <ChevronLeft size={36} />
            </button>
            
            <div className="w-full h-full max-w-5xl max-h-[85vh] p-4 flex items-center justify-center">
              <motion.img 
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={IMAGES[selectedImageIndex]} 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-2 border-brand-accent/40" 
                alt="Fullscreen view" 
              />
            </div>
            
            <button 
              className="btn-reflex btn-reflex-accent absolute right-4 md:right-10 text-brand-dark p-3 rounded-full z-10 cursor-pointer" 
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
