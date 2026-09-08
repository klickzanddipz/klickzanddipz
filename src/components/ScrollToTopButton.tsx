import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (document.body.classList.contains('modal-open')) {
        setIsVisible(false);
        return;
      }
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    const interval = setInterval(toggleVisibility, 200);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
