import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ChevronDown, Utensils, GlassWater, Pizza, X } from 'lucide-react';
import { COMBOS, PHOTO_COMBOS } from '../data/comboData';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Combos' },
  { id: 'veg', label: 'Veg Combos' },
  { id: 'non-veg', label: 'Non-Veg Combos' },
  { id: 'photo', label: 'Photo Combos' },
];

const APPLICABLE_MENU = [
  {
    category: 'FOOD',
    icon: Utensils,
    items: ['Pasta', 'Wrap', 'Momo', 'Garlic Bread', 'Bread Pizza', 'Korean Noodles'],
    badgeColor: 'bg-[#2D5032] text-white',
  },
  {
    category: 'SNACKS',
    icon: Pizza,
    items: ['Fries', 'Omelettes', 'Quick Bites'],
    badgeColor: 'bg-[#E58E26] text-[#1A2318]',
  },
  {
    category: 'DRINKS',
    icon: GlassWater,
    items: ['Mojito', 'Milk Shakes'],
    badgeColor: 'bg-teal-700 text-white',
  },
];

export const CombosSection = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Pop-up Menu Modal State
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const modalPushedRef = useRef<boolean>(false);

  const photoCombosAsCombos = PHOTO_COMBOS.map((pc, idx) => ({
    id: 1000 + idx,
    displayId: pc.id.toUpperCase(),
    type: 'photo',
    category: pc.category,
    title: pc.title,
    items: [pc.strips, ...pc.foodItems],
    price: pc.price.toString(),
    originalPrice: (pc.price + pc.savings).toString(),
    savings: pc.savings.toString(),
    img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
  }));

  // Interleave photo combos: #c1,#f1,#p1,#u1,#c2,#f2,...
  const interleavePhotoCombos = () => {
    const cats = ['couple', 'friends', 'party', 'unlimited'] as const;
    const grouped = cats.map(cat => photoCombosAsCombos.filter(c => c.category === cat));
    const maxLen = Math.max(...grouped.map(g => g.length));
    const result: typeof photoCombosAsCombos = [];
    for (let i = 0; i < maxLen; i++) {
      for (const group of grouped) {
        if (i < group.length) result.push(group[i]);
      }
    }
    return result;
  };

  const filteredCombos = filter === 'all'
    ? COMBOS
    : filter === 'photo'
      ? interleavePhotoCombos()
      : COMBOS.filter(c => c.type === filter);

  const nextCombo = () => setCurrentIndex(prev => (prev + 1) % filteredCombos.length);
  const prevCombo = () => setCurrentIndex(prev => (prev - 1 + filteredCombos.length) % filteredCombos.length);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const f = params.get('filter');
    if (f) {
      setFilter(f);
      setCurrentIndex(0);
    }
  }, [location.search]);

  useEffect(() => {
    if (isPaused || filteredCombos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredCombos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, filteredCombos.length]);

  // Saved scroll position ref for body lock
  const savedScrollY = useRef(0);

  const lockBody = () => {
    savedScrollY.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
  };

  const unlockBody = () => {
    const scrollY = savedScrollY.current;
    const htmlEl = document.documentElement;
    const prevBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);

    htmlEl.style.scrollBehavior = prevBehavior;
  };

  const openMenuModal = () => {
    lockBody();
    setIsMenuModalOpen(true);

    if (!modalPushedRef.current) {
      window.history.pushState({ menuModalOpenCombos: true }, '');
      modalPushedRef.current = true;
    }
  };

  const closeMenuModal = () => {
    unlockBody();

    if (modalPushedRef.current) {
      modalPushedRef.current = false;
      window.history.back();
    } else {
      setIsMenuModalOpen(false);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isMenuModalOpen) {
        modalPushedRef.current = false;
        setIsMenuModalOpen(false);
        unlockBody();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isMenuModalOpen]);

  // Clean up body styles on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, []);

  const currentCombo = filteredCombos[currentIndex] || filteredCombos[0];
  const selectedLabel = FILTER_CATEGORIES.find(c => c.id === filter)?.label || 'All Combos';
  const isPhotoCombo = currentCombo?.type === 'photo';

  return (
    <section id="combos" className="py-10 md:py-16 bg-brand-doodle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Right-Aligned Custom Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-1 border border-brand-primary/20">
              <Sparkles size={14} className="text-brand-accent animate-spin" />
              <span>Best Value Meals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-brand-primary tracking-tight uppercase">
              OUR <span className="text-brand-accent">COMBOS</span>
            </h2>
          </div>

          {/* Right-Most Aligned Dropdown Selector & Photo Combo Menu Button */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Show COMBO MENU button only when Photo Combos filter is active */}
            {filter === 'photo' && (
              <button
                onClick={openMenuModal}
                className="btn-reflex btn-reflex-secondary px-4 py-3 text-xs sm:text-sm font-black uppercase flex items-center gap-2 shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Utensils size={16} className="text-brand-accent" />
                <span>COMBO MENU</span>
              </button>
            )}

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="btn-reflex btn-reflex-primary px-5 py-3 text-xs sm:text-sm font-black uppercase flex items-center justify-between gap-3 min-w-[180px] sm:min-w-[220px] shadow-lg cursor-pointer active:scale-95"
              >
                <span className="truncate">{selectedLabel}</span>
                <div className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Right-Aligned Dropdown Panel */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white rounded-2xl p-2 shadow-2xl border-2 border-brand-primary z-50 overflow-hidden"
                  >
                    {FILTER_CATEGORIES.map((cat) => {
                      const isSelected = filter === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setFilter(cat.id);
                            setCurrentIndex(0);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center justify-between cursor-pointer mb-1 last:mb-0 ${
                            isSelected
                              ? 'bg-brand-primary text-white shadow-md'
                              : 'text-brand-dark hover:bg-brand-primary/10 hover:text-brand-primary'
                          }`}
                        >
                          <span className="truncate">{cat.label}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {filteredCombos.length > 0 && currentCombo ? (
          /* Featured Combo Card */
          <div 
            className="floating-card relative w-full max-w-5xl mx-auto overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl border-2 border-brand-primary/20 shadow-[0_20px_50px_rgba(26,35,24,0.12)] group min-h-[480px] sm:min-h-[440px] md:h-[450px] lg:h-[480px] flex flex-col justify-between"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCombo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex flex-col lg:flex-row items-stretch h-full"
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-52 sm:h-60 md:h-64 lg:h-full relative overflow-hidden bg-brand-surface flex-shrink-0">
                  <img 
                    src={currentCombo.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={currentCombo.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                    <span className="px-3.5 py-1.5 bg-brand-accent text-brand-dark text-xs font-black uppercase font-display tracking-widest rounded-xl shadow-md border border-white/40">
                      COMBO #{currentCombo.displayId}
                    </span>
                    {currentCombo.type === 'veg' && (
                      <span className="flex items-center gap-1.5 text-brand-primary bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-extrabold border border-brand-primary/30 shadow-md">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-primary"></span> VEG
                      </span>
                    )}
                    {currentCombo.type === 'non-veg' && (
                      <span className="flex items-center gap-1.5 text-brand-red bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-extrabold border border-brand-red/30 shadow-md">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span> NON-VEG
                      </span>
                    )}
                    {currentCombo.type === 'photo' && (
                      <span className="flex items-center gap-1.5 text-brand-secondary bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-extrabold border border-brand-secondary/30 shadow-md">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span> PHOTO
                      </span>
                    )}
                  </div>

                  {/* Navigation Chevrons inside Image area for Mobile view */}
                  {filteredCombos.length > 1 && (
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 z-20 pointer-events-none lg:hidden">
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevCombo(); }} 
                        className="btn-reflex btn-reflex-light p-2 rounded-full shadow-lg pointer-events-auto active:scale-90"
                        aria-label="Previous combo"
                      >
                        <ChevronLeft size={20} className="text-brand-primary" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextCombo(); }} 
                        className="btn-reflex btn-reflex-light p-2 rounded-full shadow-lg pointer-events-auto active:scale-90"
                        aria-label="Next combo"
                      >
                        <ChevronRight size={20} className="text-brand-primary" />
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Details Section */}
                <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col justify-between bg-white flex-grow relative">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-brand-dark uppercase tracking-tight mb-3 line-clamp-2 leading-tight">
                      {currentCombo.title}
                    </h3>
                    
                    {/* Items List */}
                    <div className="space-y-2 mb-3">
                      {currentCombo.items?.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm lg:text-base font-semibold text-brand-dark/80">
                          <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Subtext below food listing */}
                    {!isPhotoCombo && (
                      <div className="text-[11px] sm:text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1.5 rounded-lg inline-block border border-brand-primary/20">
                        Food/Drinks - Add Ons Available
                      </div>
                    )}
                  </div>
                  
                  {/* Pricing Layout */}
                  <div className="pt-4 mt-4 border-t border-brand-surface">
                    <div className="flex items-end justify-between gap-3 mb-3">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <span className="text-sm sm:text-lg font-bold text-brand-dark/40 line-through decoration-brand-red decoration-2">
                          ₹{currentCombo.originalPrice}
                        </span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-brand-primary">
                          ₹{currentCombo.price}
                        </span>
                      </div>

                      <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#BE1E2D] via-[#D92B38] to-[#981420] text-white rounded-2xl shadow-lg border border-white/30 inline-flex flex-col items-center sm:items-end justify-center flex-shrink-0">
                        <span className="text-[10px] sm:text-xs font-black font-display uppercase tracking-widest text-white/95">
                          SAVE
                        </span>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-none text-white drop-shadow-md">
                          ₹{currentCombo.savings}!
                        </span>
                      </div>
                    </div>

                    {/* Custom Note Line */}
                    {!isPhotoCombo ? (
                      <div className="text-[9px] sm:text-xs font-bold text-brand-dark/70 italic text-center whitespace-nowrap overflow-hidden text-ellipsis pt-2 border-t border-dashed border-brand-primary/10">
                        *Make It Yours! ✨ Customise Your Combo with Your Favourite Add-Ons
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-dashed border-brand-primary/10 text-center">
                        <Link
                          to={`/photobooth?combo_filter=${(currentCombo as any).category || 'all'}#photo-combos`}
                          className="text-[9px] sm:text-xs font-bold text-brand-primary italic hover:text-brand-accent transition-colors underline underline-offset-2 decoration-dotted"
                        >
                          see full {(currentCombo as any).category === 'couple' ? "couple combo's" : (currentCombo as any).category === 'friends' ? "friends combo's" : (currentCombo as any).category === 'party' ? "party combo's" : (currentCombo as any).category === 'unlimited' ? "unlimited combo's" : "photo combo's"} →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation Chevrons */}
            {filteredCombos.length > 1 && (
              <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 pointer-events-none items-center justify-between px-3 z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevCombo(); }} 
                  className="btn-reflex btn-reflex-light p-2.5 rounded-full shadow-lg pointer-events-auto active:scale-90"
                  aria-label="Previous combo"
                >
                  <ChevronLeft size={22} className="text-brand-primary" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextCombo(); }} 
                  className="btn-reflex btn-reflex-light p-2.5 rounded-full shadow-lg pointer-events-auto active:scale-90"
                  aria-label="Next combo"
                >
                  <ChevronRight size={22} className="text-brand-primary" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/80 rounded-3xl border-2 border-dashed border-brand-primary/20">
            <h3 className="text-xl font-bold font-display text-brand-dark/50">No combos found in this category.</h3>
          </div>
        )}
      </div>

      {/* POP-UP MODAL WITH HIGH Z-INDEX & COMPLETE BACKGROUND BLUR */}
      <AnimatePresence>
        {isMenuModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
            onClick={closeMenuModal}
          >
            <motion.div
              id="combos-menu-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border-2 border-brand-primary relative overflow-y-auto max-h-[85vh] z-[10000] my-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeMenuModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
                aria-label="Close menu modal"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-1 rounded-full border border-brand-primary/20">
                  PHOTO COMBO MENU CHOICES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-brand-dark mt-2">
                  APPLICABLE FOODS, SNACKS & DRINKS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {APPLICABLE_MENU.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.category} className="bg-brand-surface p-5 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`p-2 rounded-lg ${sec.badgeColor}`}>
                          <Icon size={16} />
                        </span>
                        <h4 className="font-black font-display uppercase text-brand-dark text-sm">
                          {sec.category}
                        </h4>
                      </div>
                      <div className="space-y-1.5">
                        {sec.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs font-extrabold text-gray-700">
                            <CheckCircle2 size={14} className="text-brand-primary flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={closeMenuModal}
                  className="btn-reflex btn-reflex-primary px-6 py-2.5 text-xs font-black uppercase shadow-md"
                >
                  GOT IT 👍
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
