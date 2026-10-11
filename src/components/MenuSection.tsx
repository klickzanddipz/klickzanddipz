import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_DATA } from '../data/data';

export const MenuSection: React.FC = () => {
  const [activeMenuType, setActiveMenuType] = useState<string>(MENU_DATA[0].id);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentMenuType = MENU_DATA.find((m) => m.id === activeMenuType) || MENU_DATA[0];

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
              {activeMenuType === 'drinks' ? 'KING OF DRINKS' : 'HEAVEN OF TASTE'}
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
              const isHighlighted = activeIndex === index;

              return (
                <motion.div
                  key={section.id}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center flex-shrink-0 group select-none w-[280px] sm:w-[340px] md:w-[380px]"
                >
                  {/* Circular Thumbnail (360px on desktop) */}
                  <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-[360px] lg:h-[360px] rounded-full flex items-center justify-center p-0 transition-all duration-300">
                    {/* Outer Ring */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none ${isHighlighted
                        ? 'ring-4 ring-[#E58E26] shadow-2xl scale-102'
                        : 'ring-2 ring-gray-300/80 group-hover:ring-4 group-hover:ring-[#E58E26]/80'
                        }`}
                    />

                    {/* Image Circle */}
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
                  </div>

                  {/* Title below circle */}
                  <div className="mt-8 text-center flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-[#1A2318] group-hover:text-[#2D5032] transition-colors tracking-tight uppercase">
                      {section.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
