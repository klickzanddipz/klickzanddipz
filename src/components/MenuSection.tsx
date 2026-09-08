import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, X, Flame, Eye, ChevronDown } from 'lucide-react';
import { MENU_DATA, MenuSectionData } from '../data/data';

export const MenuSection: React.FC = () => {
  const [activeMenuType, setActiveMenuType] = useState<string>(MENU_DATA[0].id);
  const [selectedSection, setSelectedSection] = useState<MenuSectionData | null>(null);

  // Active highlighted carousel index (updates on scroll / tap / hover fallback)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Track expanded subcategory inside modal
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Hover timer and progress for 3-second auto-open
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [hoverProgress, setHoverProgress] = useState<number>(0);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const modalPushedRef = useRef<boolean>(false);

  const currentMenuType = MENU_DATA.find((m) => m.id === activeMenuType) || MENU_DATA[0];

  // Helper to open modal and push state to browser history for native back button / back swipe gesture support
  const openModal = (section: MenuSectionData) => {
    setSelectedSection(section);
    if (!modalPushedRef.current) {
      window.history.pushState({ menuModalOpen: true }, '');
      modalPushedRef.current = true;
    }
  };

  // Helper to close modal cleanly and sync with browser history immediately
  const closeModal = () => {
    setSelectedSection(null);
    if (modalPushedRef.current) {
      modalPushedRef.current = false;
      try {
        window.history.back();
      } catch (e) {
        // ignore history back error if already popped
      }
    }
  };

  // Handle browser back button / mobile back swipe gesture
  useEffect(() => {
    const handlePopState = () => {
      modalPushedRef.current = false;
      setSelectedSection(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedSection) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSection]);

  // Handle carousel horizontal scrolling to dynamically update active highlighted thumbnail index on mobile & desktop
  const handleCarouselScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Reset horizontal scroll & active index when changing Food/Drinks tab
  useEffect(() => {
    setActiveIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeMenuType]);

  // Lock body scroll, compensate scrollbar width to prevent modal flicker, and set modal-open class
  useEffect(() => {
    if (selectedSection) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      setExpandedCategories([]);
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedSection]);

  // Toggle subcategory expanded state inside modal
  const toggleCategoryExpand = (title: string) => {
    setExpandedCategories(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  // Handle card hover 3-second timer
  const handleCardMouseEnter = (section: MenuSectionData) => {
    setHoveredCardId(section.id);
    setHoverProgress(0);

    if (hoverTimerRef.current) clearInterval(hoverTimerRef.current);

    const startTime = Date.now();
    const duration = 3000; // 3 seconds auto open

    hoverTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / duration) * 100);
      setHoverProgress(progress);

      if (progress >= 100) {
        if (hoverTimerRef.current) clearInterval(hoverTimerRef.current);
        openModal(section);
        setHoveredCardId(null);
        setHoverProgress(0);
      }
    }, 40);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoveredCardId(null);
    setHoverProgress(0);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-brand-primary/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0E6] text-[#2D5032] font-black font-display text-xs uppercase tracking-widest mb-3 border border-[#2D5032]/20">
              <Sparkles size={14} className="text-[#E58E26] animate-pulse" />
              <span>EXPLORE FLAVORS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
              <span className="text-[#2D5032]">OUR </span>
              <span className="text-[#E58E26]">MENU</span>
            </h2>
          </div>

          <div className="self-start md:self-auto">
            <span className="inline-block text-xs sm:text-sm text-[#2D5032] font-black font-display uppercase tracking-widest bg-white px-5 py-2.5 rounded-full border border-[#2D5032]/20 shadow-sm">
              {activeMenuType === 'drinks' ? 'KING OF DrinkS' : 'HEAVEN OF TASTE'}
            </span>
          </div>
        </div>

        {/* Reflex Animated Tabs (Food / Drinks) */}
        <div className="flex items-center gap-4 mb-12">
          {MENU_DATA.map((menuType) => {
            const isActive = activeMenuType === menuType.id;
            return (
              <button
                key={menuType.id}
                onClick={() => setActiveMenuType(menuType.id)}
                className={`btn-reflex px-8 py-3.5 text-sm sm:text-base cursor-pointer ${isActive
                  ? 'btn-reflex-primary scale-105 shadow-xl'
                  : 'btn-reflex-light text-[#2D5032] hover:text-[#2D5032]'
                  }`}
              >
                {menuType.title}
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel */}
        <div className="relative group/carousel">

          {/* Faded Smooth Edges on Left and Right */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />

          {/* Scroll Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('left')}
            aria-label="Scroll Left"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#2D5032] border-2 border-[#2D5032]/20 shadow-2xl flex items-center justify-center hover:bg-[#2D5032] hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </motion.button>

          {/* Scroll Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('right')}
            aria-label="Scroll Right"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#2D5032] border-2 border-[#2D5032]/20 shadow-2xl flex items-center justify-center hover:bg-[#2D5032] hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight size={28} strokeWidth={3} />
          </motion.button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleCarouselScroll}
            className="flex items-stretch gap-8 sm:gap-12 overflow-x-auto scrollbar-none py-8 px-6 sm:px-12 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentMenuType.sections.map((section, index) => {
              const totalItems = section.categories.reduce((acc, cat) => acc + cat.items.length, 0);
              const isHovered = hoveredCardId === section.id;
              const isHighlighted = hoveredCardId
                ? isHovered
                : activeIndex === index;

              // Circular SVG stroke math for 3s hover loader ring (360px viewBox)
              const radius = 175;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (circumference * hoverProgress) / 100;

              return (
                <motion.div
                  key={section.id}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onMouseEnter={() => handleCardMouseEnter(section)}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => {
                    handleCardMouseLeave();
                    setActiveIndex(index);
                    openModal(section);
                  }}
                  className="flex flex-col items-center flex-shrink-0 cursor-pointer group select-none w-[280px] sm:w-[340px] md:w-[380px]"
                >
                  {/* Circular Thumbnail (EVEN BIGGER: 360px on desktop, zero white gap) */}
                  <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-[360px] lg:h-[360px] rounded-full flex items-center justify-center p-0 transition-all duration-300">

                    {/* SVG 3-Second Hover Progress Ring Loader (No timer text) */}
                    {isHovered && hoverProgress > 0 && (
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10"
                        viewBox="0 0 360 360"
                      >
                        <circle
                          cx="180"
                          cy="180"
                          r={radius}
                          stroke="#E58E26"
                          strokeWidth="3.5"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="transition-all duration-75 ease-linear"
                        />
                      </svg>
                    )}

                    {/* Outer Ring */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none ${isHighlighted
                        ? 'ring-4 ring-[#E58E26] shadow-2xl scale-102'
                        : 'ring-2 ring-gray-300/80 group-hover:ring-4 group-hover:ring-[#E58E26]/80'
                        }`}
                    />

                    {/* Image Circle (Flush with ring, zero white stroke gap) */}
                    <div className="w-full h-full rounded-full overflow-hidden z-0 bg-gray-100 shadow-inner">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>

                    {/* Varieties Badge overlapping bottom center - Clean z-30 layering */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
                      <span className="inline-flex items-center gap-1.5 bg-[#2D5032] text-white px-6 py-2.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl border-2 border-white whitespace-nowrap">
                        <Flame size={15} className="text-[#E58E26] fill-[#E58E26]" />
                        {totalItems} VARIETIES
                      </span>
                    </div>
                  </div>

                  {/* Title & Animated Button below circle */}
                  <div className="mt-12 text-center flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-[#1A2318] group-hover:text-[#2D5032] transition-colors tracking-tight uppercase">
                      {section.title}
                    </h3>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardMouseLeave();
                        setActiveIndex(index);
                        openModal(section);
                      }}
                      className="btn-reflex btn-reflex-accent px-6 py-2.5 text-xs sm:text-sm mt-3 flex items-center gap-2 cursor-pointer"
                    >
                      <Eye size={16} />
                      <span>EXPLORE CATEGORIES</span>
                      <ChevronRight size={16} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Pop-Up Modal Layout via React Portal directly into document.body */}
      {createPortal(
        <AnimatePresence>
          {selectedSection && (
            <motion.div
              key="dish-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs transform-gpu"
              style={{ willChange: 'opacity' }}
            >
              {/* Modal Backdrop Click */}
              <div
                className="absolute inset-0"
                onClick={closeModal}
              />

              {/* Modal Container Card */}
              <motion.div
                key={selectedSection.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20 z-10 transform-gpu"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Modal Banner Header */}
                <div className="relative h-44 sm:h-60 w-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-[#1A2318] to-[#2D5032]">
                  <img
                    src={selectedSection.image}
                    alt={selectedSection.title}
                    loading="eager"
                    className="w-full h-full object-cover opacity-85"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <div className="inline-flex items-center gap-1.5 bg-[#2D5032] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider w-max mb-2 border border-white/20 shadow-md">
                      <Flame size={14} className="text-[#E58E26] fill-[#E58E26]" />
                      <span>
                        {selectedSection.categories.reduce((acc, cat) => acc + cat.items.length, 0)} VARIETIES
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight uppercase drop-shadow-md">
                      {selectedSection.title}
                    </h3>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-black transition-all flex items-center justify-center backdrop-blur-md cursor-pointer z-30 shadow-lg border border-white/20 hover:scale-110 active:scale-95"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content Scroll Area - SUBCATEGORIES OVERVIEW CARDS */}
                <div
                  className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#FAF8F5] flex-grow overscroll-contain"
                  style={{
                    maxHeight: 'calc(90vh - 180px)',
                    touchAction: 'pan-y',
                    WebkitOverflowScrolling: 'touch',
                  }}
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {selectedSection.categories.map((category, idx) => {
                      const isExpanded = expandedCategories.includes(category.title);
                      const minPrice = Math.min(...category.items.map(i => i.price));

                      return (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 hover:border-[#E58E26]/40 transition-all flex flex-col"
                        >
                          {/* Subcategory Summary Card Header */}
                          <div
                            onClick={() => toggleCategoryExpand(category.title)}
                            className="flex items-center justify-between cursor-pointer group/sub"
                          >
                            <div>
                              <h4 className="text-xl font-black font-display text-[#2D5032] group-hover/sub:text-[#E58E26] transition-colors uppercase tracking-wider">
                                {category.title}
                              </h4>
                              <p className="text-xs font-bold text-gray-500 mt-1">
                                Starting from <span className="text-[#2D5032] font-black">₹{minPrice}</span>
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold px-3 py-1 bg-[#E8F0E6] text-[#2D5032] rounded-full whitespace-nowrap">
                                {category.items.length} Options
                              </span>
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#2D5032] group-hover/sub:bg-[#2D5032] group-hover/sub:text-white transition-all">
                                <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                              </div>
                            </div>
                          </div>

                          {/* Preview Badges when collapsed */}
                          {!isExpanded && (
                            <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                              {category.items.slice(0, 3).map((item, i) => (
                                <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-[#FAF8F5] text-gray-700 rounded-md border border-gray-200/60 truncate max-w-[180px]">
                                  {item.name}
                                </span>
                              ))}
                              {category.items.length > 3 && (
                                <span className="text-xs font-bold px-2 py-1 bg-[#E8F0E6] text-[#2D5032] rounded-md">
                                  +{category.items.length - 3} more
                                </span>
                              )}
                            </div>
                          )}

                          {/* Expandable Items List - GPU CSS Grid transition with zero reflow flicker & zero auto scrolling */}
                          <div
                            className={`grid transition-all duration-300 ease-out transform-gpu ${isExpanded
                              ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t-2 border-[#E58E26]/30'
                              : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                              }`}
                          >
                            <div className="overflow-hidden">
                              <ul className="space-y-3">
                                {category.items.map((item) => (
                                  <li
                                    key={item.id}
                                    className="flex items-center justify-between group hover:bg-[#FAF8F5] p-2.5 rounded-xl transition-all border border-transparent hover:border-gray-200"
                                  >
                                    <span className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-[#2D5032] transition-colors pr-3">
                                      {item.name}
                                    </span>
                                    <span className="text-base sm:text-lg font-black font-display text-[#2D5032] flex-shrink-0 bg-[#E8F0E6] px-3.5 py-1 rounded-lg border border-[#2D5032]/10 shadow-xs">
                                      ₹{item.price}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

