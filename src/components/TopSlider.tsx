import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export interface TopSliderSlide {
  url: string;        // Desktop billboard (3:1 ratio, 2172x724)
  mobileUrl: string;  // Mobile billboard (2:1 ratio, 1774x887)
  title: string;
  link?: string;
}

export const TOP_SLIDER_IMAGES: TopSliderSlide[] = [
  {
    url: '/Billboard/food-desktop.png',
    mobileUrl: '/Billboard/food-mobile.png',
    title: 'Good Food, Bigger Memories - Klickz & Dipz VR Mall',
    link: '/menu'
  },
  {
    url: '/Billboard/mojitos-desktop.png',
    mobileUrl: '/Billboard/mojitos-mobile.png',
    title: 'Mojitos, Milkshakes and Good Times',
    link: '/menu'
  },
  {
    url: '/Billboard/photobooth-desktop.png',
    mobileUrl: '/Billboard/photobooth-mobile.png',
    title: 'Studio Photobooth Memories at VR Mall Chennai',
    link: '/photobooth'
  }
];

export const TopSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOP_SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = TOP_SLIDER_IMAGES[currentIndex];

  const billboardContent = (
    <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 shadow-[0_12px_35px_rgba(232,157,37,0.15)] bg-brand-dark w-full aspect-[2/1] md:aspect-[3/1] max-h-[420px] transition-all duration-300 group">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <picture className="w-full h-full block">
            <source
              media="(max-width: 767px)"
              srcSet={currentSlide.mobileUrl}
            />
            <source
              media="(min-width: 768px)"
              srcSet={currentSlide.url}
            />
            <img
              src={currentSlide.url}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
              alt={currentSlide.title}
              loading="eager"
            />
          </picture>
        </motion.div>
      </AnimatePresence>

      {/* Fader Sheen & Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-brand-dark/10 pointer-events-none"></div>

      {/* Billboard Reflex Navigation Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 md:left-8 flex items-center gap-1.5 sm:gap-2 z-20">
        {TOP_SLIDER_IMAGES.map((_, i) => (
          <button 
            key={i} 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(i);
            }} 
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === i 
                ? 'w-6 sm:w-10 h-2.5 sm:h-3 bg-brand-accent shadow-[0_0_12px_#E89D25]' 
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/60 hover:bg-white'
            }`} 
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>

      {/* Subtle Sheen Highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
    </div>
  );

  return (
    <section className="w-full bg-brand-doodle py-3 sm:py-5 relative overflow-hidden">
      {/* Container aligned edge-to-edge with Navbar */}
      <div className="w-full px-4 sm:px-6 lg:px-6 xl:px-12">
        {currentSlide.link ? (
          <Link to={currentSlide.link} className="block cursor-pointer">
            {billboardContent}
          </Link>
        ) : (
          billboardContent
        )}
      </div>
    </section>
  );
};
