import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Sparkles,
  Printer,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Touchpad,
  Users,
  Image as ImageIcon,
  Wand2,
  Gift,
  Heart,
  Utensils,
  GlassWater,
  Pizza,
  X
} from 'lucide-react';
import { PHOTO_COMBOS } from '../data/comboData';

// Image 1 Feature Badges
const POSTER_BADGES = [
  { label: 'MULTIPLE FILTERS', icon: Wand2, color: 'bg-emerald-700 text-white' },
  { label: 'FUN PROPS', icon: Sparkles, color: 'bg-amber-600 text-white' },
  { label: 'MULTIPLE FRAMES', icon: ImageIcon, color: 'bg-teal-700 text-white' },
  { label: 'UPTO 8 PERSON', icon: Users, color: 'bg-indigo-700 text-white' },
  { label: 'COMBO OFFERS', icon: Gift, color: 'bg-rose-700 text-white' },
  { label: 'BEAUTIFUL MEMORIES', icon: Heart, color: 'bg-purple-700 text-white' },
];

// PDF Applicable Menu Items
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

// DSLR Booth Step-by-Step Guide
const BOOTH_STEPS = [
  { step: '01', title: 'TOUCH SCREEN TO BEGIN', icon: Touchpad },
  { step: '02', title: 'PICK PROPS & FILTER', icon: Sparkles },
  { step: '03', title: 'STRIKE 4 POSES', icon: Camera },
  { step: '04', title: 'INSTANT PHYSICAL PRINT', icon: Printer },
];

// Photobooth Gallery Sample Items (4 items)
const GALLERY_STRIPS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1516280440502-a720dc4aa39a?auto=format&fit=crop&w=800&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80' },
  { id: 4, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
];

const COMBO_CATEGORIES = [
  { id: 'all', label: 'All Photo Combos' },
  { id: 'couple', label: 'Couple Combos (1 Pair Strip)' },
  { id: 'friends', label: 'Friends Combos (2 Pairs Strip)' },
  { id: 'party', label: 'Party Combos (3 Pairs Strip)' },
  { id: 'unlimited', label: 'Unlimited Combos (4 Pairs Strip)' },
];

export const PhotoboothSection = () => {
  const location = useLocation();

  // Steps Collapsed State
  const [isStepsExpanded, setIsStepsExpanded] = useState(false);

  // Custom Dropdown Open & Category State
  const [comboCategory, setComboCategory] = useState<'all' | 'couple' | 'friends' | 'party' | 'unlimited'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Interactive Menu Pop-up Modal & History State
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const modalPushedRef = useRef<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Read combo_filter query param from URL to auto-select category & scroll to combo section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cf = params.get('combo_filter');
    if (cf && ['couple', 'friends', 'party', 'unlimited'].includes(cf)) {
      setComboCategory(cf as any);
    }

    if (cf || location.hash === '#photo-combos') {
      // Scroll to the combo section after a brief delay for DOM layout
      setTimeout(() => {
        const el = document.getElementById('photo-combos');
        if (el) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(el, { offset: -100, immediate: true });
          } else {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'auto' });
          }
        }
      }, 120);
    }
  }, [location.search, location.hash]);

  // Reset scroll to card #1 whenever combo category changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [comboCategory]);

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
    // Temporarily force instant scroll to prevent visible scroll animation
    const htmlEl = document.documentElement;
    const prevBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);

    // Restore original scroll behavior
    htmlEl.style.scrollBehavior = prevBehavior;
  };

  const openMenuModal = () => {
    lockBody();
    setIsMenuModalOpen(true);

    if (!modalPushedRef.current) {
      window.history.pushState({ menuModalOpenPhotobooth: true }, '');
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

  // Intercept browser back button when modal is open
  useEffect(() => {
    const handlePopState = () => {
      if (isMenuModalOpen) {
        modalPushedRef.current = false;
        setIsMenuModalOpen(false);
        unlockBody();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const filteredPhotoCombos = comboCategory === 'all'
    ? PHOTO_COMBOS
    : PHOTO_COMBOS.filter((c) => c.category === comboCategory);

  const selectedCategoryLabel = COMBO_CATEGORIES.find(c => c.id === comboCategory)?.label || 'All Photo Combos';

  return (
    <section id="photobooth" className="bg-[#FAF8F5] text-[#1A2318] relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. FULL-BLEED HERO SECTION WITH CRISP SHARP CUT AT BOTTOM */}
      {/* ========================================================================= */}
      <div className="relative w-full py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#0D150E] via-[#1A2E1C] to-[#101811] border-b-4 border-[#2D5032] shadow-md">
        
        {/* Desktop Landscape Video Loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 pointer-events-none z-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-friends-taking-photos-at-a-party-41544-large.mp4" type="video/mp4" />
        </video>

        {/* Mobile Vertical Portrait Video Loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 pointer-events-none z-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-young-friends-smiling-and-taking-a-selfie-41543-large.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay Gradient to ensure typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D150E]/90 via-[#0D150E]/75 to-[#0D150E]/90 z-0 pointer-events-none" />

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Headlines & Story */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white font-black font-display text-xs sm:text-sm uppercase tracking-widest border border-white/20 shadow-lg backdrop-blur-md">
                <Camera size={18} className="text-[#E58E26] animate-pulse" />
                <span>STUDIO PHOTOBOOTH AT VR CHENNAI</span>
                <Sparkles size={16} className="text-[#E58E26]" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#E58E26] italic font-serif drop-shadow-md">
                  Friends. Fun. Unforgettable. ✨
                </h3>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight uppercase text-white leading-none drop-shadow-lg">
                  Your photo booth moment awaits!
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                Step into our photobooth studio at VR Chennai! Strike 4 fun poses with friends, choose from exciting props & frames, and leave with instant glossy photo strip prints.
              </p>
            </div>

            {/* Right Column: Image 1 Feature Badges Box */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-[#1A2E1C]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl text-white border-2 border-[#E58E26]/40 relative overflow-hidden">
                
                <div className="text-center mb-6 border-b border-white/15 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E58E26]">
                    STUDIO FEATURES
                  </span>
                  <h4 className="text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
                    PHOTOBOOTH HIGHLIGHTS
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {POSTER_BADGES.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex items-center gap-3 transition-all shadow-md"
                      >
                        <div className={`p-2 rounded-xl ${badge.color} shadow-md flex-shrink-0`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-extrabold font-display uppercase text-white tracking-wide">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Slogan Pill */}
                <div className="mt-6 pt-4 border-t border-white/15 text-center">
                  <span className="inline-block bg-[#E58E26] text-[#1A2318] font-black text-xs uppercase px-5 py-2.5 rounded-full shadow-lg border border-white">
                    SAVE MORE IN COMBO'S 📸
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* UNIFIED SINGLE SURFACE MAIN BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">

        {/* ========================================================================= */}
        {/* 2. PHOTO COMBOS OFFERS */}
        {/* ========================================================================= */}
        <div id="photo-combos" className="scroll-mt-28">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#2D5032] bg-[#E8F0E6] px-4 py-1.5 rounded-full border border-[#2D5032]/20">
                SNAP • SIP • SMILE
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-[#2D5032] mt-2">
                PHOTO <span className="text-[#E58E26]">COMBO OFFERS</span>
              </h3>
            </div>

            {/* Right-Most Aligned Custom Dropdown & Navigation Arrows */}
            <div className="flex items-center justify-end gap-3 self-end sm:self-auto">

              {/* Custom Reflex Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="btn-reflex btn-reflex-primary px-5 py-3 text-xs sm:text-sm font-black uppercase flex items-center justify-between gap-3 min-w-[180px] sm:min-w-[220px] shadow-md cursor-pointer active:scale-95"
                >
                  <span className="truncate">{selectedCategoryLabel}</span>
                  <div className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Dropdown Panel bounded within screen */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute right-0 top-full mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-2xl p-2 shadow-2xl border-2 border-[#2D5032] z-50 overflow-hidden"
                    >
                      {COMBO_CATEGORIES.map((cat) => {
                        const isSelected = comboCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setComboCategory(cat.id as any);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center justify-between cursor-pointer mb-1 last:mb-0 ${
                              isSelected
                                ? 'bg-[#2D5032] text-white shadow-md'
                                : 'text-[#1A2318] hover:bg-[#E8F0E6] hover:text-[#2D5032]'
                            }`}
                          >
                            <span className="truncate">{cat.label}</span>
                            {isSelected && <CheckCircle2 size={16} className="text-[#E58E26] flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  className="p-3 rounded-full bg-white text-[#2D5032] border-2 border-[#2D5032]/20 shadow-md hover:bg-[#2D5032] hover:text-white transition-all cursor-pointer active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} strokeWidth={3} />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3 rounded-full bg-white text-[#2D5032] border-2 border-[#2D5032]/20 shadow-md hover:bg-[#2D5032] hover:text-white transition-all cursor-pointer active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>

            </div>
          </div>

          {/* Single Surface Cards Row Wrapper with Narrow Fade Mask */}
          <div className="relative group/track">
            
            {/* Narrow Subtle Edge Fade Mask at Right Edge */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent z-10" />

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#2D5032] scrollbar-track-transparent"
            >
              <AnimatePresence mode="wait">
                {filteredPhotoCombos.map((combo) => (
                  <motion.div
                    key={combo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 bg-white rounded-3xl p-6 border-2 border-[#2D5032]/20 hover:border-[#E58E26] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group snap-start"
                  >
                    <div>
                      {/* HIGH-CONTRAST ALWAYS AUTO-ANIMATING SHINING PHOTO STRIP BADGE */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            '0 0 0px rgba(229,142,38,0)',
                            '0 0 15px rgba(229,142,38,0.8)',
                            '0 0 0px rgba(229,142,38,0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-white bg-[#2D5032] px-3.5 py-1.5 rounded-full mb-3 border-2 border-[#E58E26] shadow-md"
                      >
                        <Camera size={14} className="text-[#E58E26] animate-pulse flex-shrink-0" />
                        <span className="drop-shadow-sm font-extrabold">{combo.strips}</span>
                      </motion.div>

                      <h4 className="text-xl sm:text-2xl font-black font-display uppercase text-[#1A2318] mb-2">
                        {combo.title}
                      </h4>

                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl sm:text-4xl font-black font-display text-[#2D5032]">
                          ₹{combo.price}
                        </span>
                        <span className="text-xs font-bold text-gray-400 line-through">
                          ₹{combo.price + combo.savings}
                        </span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-gray-100">
                        {combo.foodItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-gray-700">
                            <CheckCircle2 size={16} className="text-[#2D5032] flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BIGGER & PROMINENT SAVE BADGE AT THE BOTTOM */}
                    <div className="mt-6 pt-3 border-t border-gray-100">
                      <div className="w-full py-3 bg-gradient-to-r from-[#BE1E2D] via-[#D92B38] to-[#981420] text-white text-center rounded-2xl shadow-md border border-white/20 flex items-center justify-center gap-2">
                        <span className="text-xs font-black uppercase tracking-widest text-white/90">SAVE</span>
                        <span className="text-xl sm:text-2xl font-black font-display leading-none text-white drop-shadow-md">
                          ₹{combo.savings}!
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* COMBO MENU — left aligned dotted underline text link */}
          <div className="flex justify-start mt-5">
            <button
              onClick={openMenuModal}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black uppercase text-[#2D5032] decoration-dotted underline underline-offset-4 decoration-[#2D5032]/50 hover:text-[#E58E26] hover:decoration-[#E58E26] transition-all cursor-pointer active:scale-95"
            >
              <Utensils size={14} className="text-[#E58E26]" />
              <span>see combo menu</span>
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. PHOTOBOOTH GALLERY (SQUARED ASPECT-SQUARE THUMBNAILS) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs font-black uppercase text-[#E58E26] tracking-wider mb-1 block">
                VR Chennai Studio Memories
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-[#2D5032]">
                PHOTOBOOTH <span className="text-[#E58E26]">GALLERY</span>
              </h3>
            </div>
          </div>

          {/* 4 Cards Grid - Squared aspect-square thumbnails */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_STRIPS.map((strip, index) => {
              const isFourthItem = index === 3;

              return (
                <div
                  key={strip.id}
                  className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm border-2 border-[#2D5032]/20 bg-gray-100 cursor-pointer"
                >
                  <img
                    src={strip.image}
                    alt="Photobooth memory"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isFourthItem ? 'filter blur-md scale-105 pointer-events-none' : 'group-hover:scale-105'
                    }`}
                  />

                  {/* 4th Item Blurred Overlay with Hover-Underlined "View More" Link */}
                  {isFourthItem && (
                    <Link
                      to="/gallery/photobooth"
                      className="absolute inset-0 bg-[#2D5032]/60 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center group"
                    >
                      <Camera size={32} className="text-[#E58E26] mb-2 animate-pulse" />
                      <span className="text-base sm:text-lg font-black font-display text-white uppercase tracking-wider group-hover:underline transition-all drop-shadow-md">
                        VIEW MORE →
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. STEPS TO FOLLOW IN PHOTOBOOTH (PLACED AT THE VERY LAST POSITION) */}
        {/* ========================================================================= */}
        <div className="bg-[#2D5032] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-[#2D5032]/30">
          
          {/* Header Toggle Button */}
          <button
            onClick={() => setIsStepsExpanded(!isStepsExpanded)}
            className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#E58E26] text-[#1A2318] shadow-md group-hover:scale-110 transition-transform">
                <Camera size={22} />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E58E26] block">
                  PHOTOBOOTH GUIDE
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
                  STEPS TO FOLLOW IN PHOTOBOOTH
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white border border-white/20 group-hover:bg-white/20 transition-all flex-shrink-0">
              <span>{isStepsExpanded ? 'Hide Steps' : 'View Steps'}</span>
              <div className={`transition-transform duration-300 ${isStepsExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown size={18} />
              </div>
            </div>
          </button>

          {/* Zero-Flicker CSS Grid Expandable Container */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              isStepsExpanded ? 'grid-rows-[1fr] pt-6 mt-6 border-t border-white/15' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {BOOTH_STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-md hover:bg-white/15 transition-all min-w-0"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#E58E26] text-[#1A2318] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-md">
                        {step.step}
                      </span>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-xs sm:text-sm font-black font-display uppercase text-white tracking-wide whitespace-normal leading-snug break-words">
                          {step.title}
                        </h4>
                      </div>
                      <Icon size={18} className="text-[#E58E26] flex-shrink-0 hidden sm:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* POP-UP MODAL WITH HIGH Z-INDEX, HEAVY BLUR, AND INTERNAL SCROLL */}
      {/* ========================================================================= */}
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
              id="photobooth-menu-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border-2 border-[#2D5032] relative overflow-y-auto max-h-[85vh] z-[10000] my-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeMenuModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#2D5032] hover:text-white transition-all cursor-pointer"
                aria-label="Close menu modal"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#2D5032] bg-[#E8F0E6] px-4 py-1 rounded-full border border-[#2D5032]/20">
                  PHOTO COMBO MENU CHOICES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[#1A2318] mt-2">
                  APPLICABLE FOODS, SNACKS & DRINKS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {APPLICABLE_MENU.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.category} className="bg-[#FAF8F5] p-5 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`p-2 rounded-lg ${sec.badgeColor}`}>
                          <Icon size={16} />
                        </span>
                        <h4 className="font-black font-display uppercase text-[#1A2318] text-sm">
                          {sec.category}
                        </h4>
                      </div>
                      <div className="space-y-1.5">
                        {sec.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs font-extrabold text-gray-700">
                            <CheckCircle2 size={14} className="text-[#2D5032] flex-shrink-0" />
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
