import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Instagram, Youtube, Sparkles, ArrowRight, Utensils } from 'lucide-react';
import { TOP_SLIDER_IMAGES } from './TopSlider';

export const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % TOP_SLIDER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="bg-brand-doodle-dark relative overflow-hidden pt-10 pb-6 lg:pt-14 lg:pb-8 shadow-[0_15px_40px_rgba(26,35,24,0.3)]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.2, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 6, ease: "linear" }}
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${TOP_SLIDER_IMAGES[bgIndex]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
      
      {/* Floating Emojis */}
      <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-[10%] text-7xl drop-shadow-2xl z-0 hidden lg:block opacity-70 pointer-events-none">🍔</motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-[5%] text-7xl drop-shadow-2xl z-0 hidden lg:block opacity-70 pointer-events-none">🥤</motion.div>
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 left-[45%] text-6xl drop-shadow-2xl z-0 hidden lg:block opacity-40 pointer-events-none">🍟</motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/4 right-[20%] text-6xl drop-shadow-2xl z-0 hidden lg:block opacity-50 pointer-events-none">📸</motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

            <div className="inline-block mt-1 py-1.5 px-4 bg-brand-accent text-brand-dark font-extrabold font-display text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 rounded-xl shadow-md border border-white/30">
              NOW OPEN AT VR CHENNAI
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-white leading-[1.05] tracking-tight drop-shadow-lg relative z-10 uppercase">
              FEEL THE <span className="bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">CRUNCH.</span><br />
              CAPTURE THE <span className="bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">VIBE.</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-lg md:text-xl text-white/95 mb-6 font-medium leading-relaxed drop-shadow-md">
              The ultimate destination for mouth-watering gourmet bites, signature dips, and unforgettable studio memories.
            </p>
            
            {/* Rounded Rectangle Reflex Buttons */}
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
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 h-[320px] sm:h-[420px] hidden lg:block perspective-1000 z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div style={{ rotateX, rotateY }} className="w-full h-full bg-gradient-to-br from-[#F3A622] via-[#E89D25] to-[#DF8A14] rounded-[40px] border-4 border-white/90 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] transform-style-3d cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80')] opacity-25 mix-blend-multiply bg-cover bg-center pointer-events-none"></div>
              <img src="/LOGO.png" alt="Logo 3D" className="w-72 h-auto drop-shadow-2xl translate-z-20 pointer-events-none" style={{ transform: 'translateZ(80px)' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
