import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/combos', label: 'Combos' },
    { path: '/menu', label: 'Menu' },
    { path: '/photobooth', label: 'Photobooth' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/location', label: 'Location' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-brand-doodle/95 backdrop-blur-md shadow-[0_4px_20px_rgba(26,35,24,0.06)] transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <div className="flex items-center gap-8 xl:gap-12">
            <Link to="/" className="flex items-center group flex-shrink-0">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="/LOGO.png" 
                alt="Klickz & Dipz" 
                className="h-14 md:h-20 w-auto object-contain drop-shadow-md" 
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-extrabold font-display tracking-widest uppercase transition-all duration-300 rounded-xl ${
                      active
                        ? 'text-brand-primary bg-brand-surface border border-brand-primary/20 shadow-sm'
                        : 'text-brand-dark hover:text-brand-primary hover:bg-brand-surface/60'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-accent rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center">
            <Link to="/order" className="btn-reflex btn-reflex-red px-7 py-3 text-sm flex items-center gap-2">
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-2xl border-2 border-brand-primary text-brand-primary bg-brand-surface hover:bg-brand-accent/10 transition-all active:scale-95 cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth GPU CSS Grid Mobile Dropdown Menu with zero reflow flicker */}
      <div 
        className={`lg:hidden bg-brand-surface border-t-2 border-brand-primary/20 shadow-xl grid transition-all duration-300 ease-in-out transform-gpu ${
          isMobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-5 py-3 rounded-2xl text-base font-extrabold font-display uppercase tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-brand-dark hover:bg-brand-bg hover:text-brand-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-reflex btn-reflex-red w-full py-3.5 text-base flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                <span>Order Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
