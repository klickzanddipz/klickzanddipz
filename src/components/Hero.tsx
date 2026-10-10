import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Instagram, Youtube, Sparkles, ArrowRight, Utensils, Camera, ShoppingBag } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/galleryData';
import { StoreStatusBadge } from './StoreStatusBadge';

export const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const currentGalleryItem = GALLERY_IMAGES[slideIndex];

  return (
    <section className="relative overflow-hidden pt-10 pb-12 lg:pt-14 lg:pb-16 bg-brand-doodle-dark">
      {/* Background Ambience Slideshow using real Gallery captures spanning entire unified hero section */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.18, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3.5, ease: "linear" }}
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${currentGalleryItem.url})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
      
      {/* Floating Emojis across entire unified canvas */}
      <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 right-[10%] text-7xl drop-shadow-2xl z-0 hidden lg:block opacity-70 pointer-events-none">🍔</motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-28 left-[5%] text-7xl drop-shadow-2xl z-0 hidden lg:block opacity-70 pointer-events-none">🥤</motion.div>
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 left-[48%] text-6xl drop-shadow-2xl z-0 hidden lg:block opacity-35 pointer-events-none">🍟</motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/3 right-[15%] text-6xl drop-shadow-2xl z-0 hidden lg:block opacity-50 pointer-events-none">📸</motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header & Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 relative">
            
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.3, type: "spring" }} 
              className="inline-flex items-center gap-2 bg-brand-red text-white font-extrabold font-display px-4 py-2 rounded-2xl transform -rotate-3 border-2 border-white/40 shadow-lg text-xs sm:text-sm mb-3"
            >
              <Sparkles size={16} className="text-brand-accent animate-spin" />
              <span>Top Rated Cafe & Photobooth in Chennai ⭐</span>
            </motion.div>

            {/* Live Store Status & VR Chennai Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <StoreStatusBadge />
              <div className="py-2 px-4 bg-brand-accent text-brand-dark font-extrabold font-display text-xs sm:text-sm uppercase tracking-[0.2em] rounded-2xl shadow-md border border-white/30">
                NOW OPEN AT VR CHENNAI
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-white leading-[1.05] tracking-tight drop-shadow-lg relative z-10 uppercase">
              FEEL THE <span className="bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">CRUNCH.</span><br />
              CAPTURE THE <span className="bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">VIBE.</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-lg md:text-xl text-white/95 mb-6 font-medium leading-relaxed drop-shadow-md">
              The ultimate hangout at VR Mall Chennai for spicy Korean noodles, chilled craft mojitos, gourmet crunch burgers, and instant studio photobooth moments.
            </p>
            
            {/* Reflex Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <Link to="/menu" className="btn-reflex btn-reflex-accent px-8 py-4 text-base flex items-center justify-center gap-3">
                <Utensils size={20} />
                <span>View Menu</span>
              </Link>
              <Link to="/order" className="btn-reflex btn-reflex-light px-8 py-4 text-base flex items-center justify-center gap-3">
                <span>Available Offers</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-accent/30 shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Pluxee_Logo.svg" alt="Pluxee Accepted" className="h-6" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="text-brand-primary font-black font-display text-xs sm:text-sm tracking-wide uppercase">Pluxee Accepted Here!</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-extrabold font-display uppercase tracking-widest text-white/90 drop-shadow-md">Follow Us:</span>
                <a
                  href="https://www.instagram.com/klickz_dipz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 border-2 border-white/40 text-white rounded-2xl hover:bg-white hover:text-brand-primary transition-all shadow-md active:scale-95 bg-white/10 backdrop-blur-sm"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@KlickzDipz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-3 border-2 border-white/40 text-white rounded-2xl hover:bg-white hover:text-brand-primary transition-all shadow-md active:scale-95 bg-white/10 backdrop-blur-sm"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Interactive Slideshow using authentic Gallery captures */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 h-[340px] sm:h-[430px] hidden lg:block perspective-1000 z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY }} 
              className="w-full h-full rounded-[38px] border-4 border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform-style-3d cursor-pointer relative overflow-hidden bg-brand-dark"
            >
              {/* Image Slideshow Crossfade */}
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={slideIndex}
                  src={currentGalleryItem.url}
                  alt={currentGalleryItem.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.1, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30 pointer-events-none" />

              {/* Top Floating Logo & Studio Tag */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                  <Camera size={15} className="text-[#E89D25] animate-pulse" />
                  <span className="text-[11px] font-black font-display uppercase tracking-widest text-white">
                    LIVE AT VR CHENNAI
                  </span>
                </div>
                <img 
                  src="/LOGO.png" 
                  alt="Klickz & Dipz" 
                  className="h-9 w-auto object-contain drop-shadow-xl" 
                />
              </div>

              {/* Bottom Pagination Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {GALLERY_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      slideIndex === i
                        ? 'w-7 h-2 bg-brand-accent shadow-[0_0_10px_#E89D25]'
                        : 'w-2 h-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

            </motion.div>
          </motion.div>

        </div>

        {/* Seamless Integrated Delivery Block - Same section & continuous background slideshow */}
        <div id="order" className="pt-8 border-t border-white/15 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            <div className="max-w-3xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-accent/30">
                <Sparkles size={14} className="animate-spin" />
                <span>Safest Home Delivery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-3 uppercase">
                Craving the crunch <span className="text-brand-accent">at home?</span> 🛋️
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Don't feel like stepping out? We've got you covered. Experience the magic of Klickz & Dipz from the comfort of your couch.
              </p>
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 bg-[#E89D25] text-[#1D421E] font-black font-display px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg border border-white/40 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                  <Sparkles size={16} className="text-[#1D421E] flex-shrink-0" />
                  <span>Unlock exclusive offers on online orders!</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link 
                to="/order" 
                className="btn-reflex btn-reflex-red px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-2xl flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
              >
                <ShoppingBag size={26} />
                <span>Order Online</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
