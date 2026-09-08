import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TOP_SLIDER_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80',
    title: 'Gourmet Crunch Burgers',
    link: '/menu',
    buttonText: 'Explore Menu'
  },
  {
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1920&q=80',
    title: 'Exclusive Best Value Combos',
    link: '/combos',
    buttonText: 'View Combos'
  },
  {
    url: 'https://images.unsplash.com/photo-1594212684813-7d722d3d9229?auto=format&fit=crop&w=1920&q=80',
    title: 'Unlimited Studio Photobooth',
    link: '/photobooth',
    buttonText: 'Book Studio'
  }
];

export const TopSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOP_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = TOP_SLIDER_IMAGES[currentIndex];

  return (
    <section className="w-full bg-brand-doodle py-4 sm:py-6 relative overflow-hidden">
      {/* Container aligned edge-to-edge with Navbar logo & Order button */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        
        {/* Expanded Billboard Frame matching container edges */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 shadow-[0_12px_35px_rgba(232,157,37,0.15)] bg-brand-dark w-full h-48 sm:h-64 md:h-[320px] lg:h-[380px] transition-all duration-500">
          
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentIndex}
              src={currentSlide.url}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              alt={currentSlide.title}
            />
          </AnimatePresence>

          {/* Fader Sheen & Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent pointer-events-none"></div>

          {/* Action Mark Button - 85% BG Opacity & 100% Text Opacity */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`action-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20"
            >
              <Link 
                to={currentSlide.link}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-[#E89D25]/85 hover:bg-[#F3A622] backdrop-blur-md border border-white/40 shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-xs sm:text-sm md:text-base font-black font-display uppercase tracking-wider text-brand-dark opacity-100 drop-shadow-sm">
                  {currentSlide.buttonText}
                </span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-dark/20 flex items-center justify-center text-brand-dark opacity-100 flex-shrink-0">
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Billboard Reflex Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 flex items-center gap-1.5 sm:gap-2 z-20">
            {TOP_SLIDER_IMAGES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)} 
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i 
                    ? 'w-6 sm:w-10 h-2.5 sm:h-3 bg-brand-accent shadow-[0_0_12px_#E89D25]' 
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white'
                }`} 
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>

          {/* Subtle Sheen Highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};
