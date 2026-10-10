import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/combos', label: 'Combos', badge: 'VR Mall' },
    { path: '/menu', label: 'Menu', badge: 'VR Mall' },
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
      <div className="w-full px-4 sm:px-6 lg:px-6 xl:px-12">
        <div className="flex justify-between h-20 md:h-24 items-center gap-2">
          <div className="flex items-center gap-3 xl:gap-8 2xl:gap-12 flex-shrink-0">
            <Link to="/" className="flex items-center group flex-shrink-0">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="/LOGO.png" 
                alt="Klickz & Dipz Cafe & Photobooth VR Mall Chennai" 
                className="h-12 sm:h-14 md:h-16 xl:h-20 w-auto object-contain drop-shadow-md flex-shrink-0" 
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3 flex-nowrap">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-2 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-extrabold font-display tracking-wider xl:tracking-widest uppercase transition-all duration-300 rounded-xl flex items-center gap-1 xl:gap-1.5 flex-shrink-0 whitespace-nowrap ${
                      active
                        ? 'text-brand-primary bg-brand-surface border border-brand-primary/20 shadow-sm'
                        : 'text-brand-dark hover:text-brand-primary hover:bg-brand-surface/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="hidden xl:inline-block text-[9px] font-black tracking-normal px-1.5 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/40 shadow-xs">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-0.5 bg-brand-accent rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/order" className="btn-reflex btn-reflex-red px-4 xl:px-7 py-2.5 xl:py-3 text-xs xl:text-sm flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
              <ShoppingBag size={17} />
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
                className={`flex items-center justify-between px-5 py-3 rounded-2xl text-base font-extrabold font-display uppercase tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-brand-dark hover:bg-brand-bg hover:text-brand-primary'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isActive(link.path)
                      ? 'bg-white/20 text-white border-white/30'
                      : 'bg-brand-accent/20 text-brand-accent border-brand-accent/40'
                  }`}>
                    At VR Mall
                  </span>
                )}
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
