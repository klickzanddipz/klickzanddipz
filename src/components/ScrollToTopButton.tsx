import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const checkScrollState = () => {
      if (document.body.classList.contains('modal-open')) {
        setIsVisible(false);
        return;
      }

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 280);

      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // When footer top comes within 20px of the viewport bottom, fade out to prevent overlapping
        const threshold = window.innerHeight + 20;
        setIsNearFooter(footerRect.top <= threshold);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState, { passive: true });
    const interval = setInterval(checkScrollState, 150);

    return () => {
      window.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const shouldShow = isVisible && !isNearFooter;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          id="scroll-to-top-btn"
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] text-[#1A2318] border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center p-0 focus:outline-none hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} strokeWidth={3} className="text-[#1A2318]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
