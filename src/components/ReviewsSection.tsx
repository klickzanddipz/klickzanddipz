import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, X, CheckCircle2 } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  isLong: boolean;
  previewText: string;
  fullText: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Priya T.",
    rating: 5,
    isLong: true,
    previewText: "The Classic Veg Burger was incredibly fresh and crunchy! The special dipping sauce elevates the flavor...",
    fullText: "The Classic Veg Burger was incredibly fresh and crunchy! The special dipping sauce elevates the flavor to another level. Definitely my new go-to hangout spot in VR Mall Chennai."
  },
  {
    id: 2,
    author: "Rahul S.",
    rating: 5,
    isLong: false,
    previewText: "Best Mocha Cold Coffee in Chennai hands down! Super creamy, rich espresso flavor, and paired perfectly with Peri Peri fries.",
    fullText: "Best Mocha Cold Coffee in Chennai hands down! Super creamy, rich espresso flavor, and paired perfectly with Peri Peri fries."
  },
  {
    id: 3,
    author: "Anita M.",
    rating: 5,
    isLong: true,
    previewText: "The photobooth props made our day so memorable. Instant high quality glossy print strips...",
    fullText: "The photobooth props made our day so memorable. Instant high quality glossy print strips and super easy digital copy download via QR code! We loved every moment."
  },
  {
    id: 4,
    author: "Karan V.",
    rating: 5,
    isLong: false,
    previewText: "Peri Peri Fries are a must try! Super crispy on the outside, hot and fluffy on the inside.",
    fullText: "Peri Peri Fries are a must try! Super crispy on the outside, hot and fluffy on the inside."
  },
  {
    id: 5,
    author: "Sneha P.",
    rating: 5,
    isLong: true,
    previewText: "Amazing ambience and friendly staff. Hosted my sister's birthday celebration here...",
    fullText: "Amazing ambience and friendly staff. Hosted my sister's birthday celebration here and the setup was flawless. Will definitely visit again!"
  },
  {
    id: 6,
    author: "Rohit D.",
    rating: 5,
    isLong: false,
    previewText: "The Triple Berry Twist Mojito is pure magic. Refreshing, vibrant flavors that complement garlic bread perfectly.",
    fullText: "The Triple Berry Twist Mojito is pure magic. Refreshing, vibrant flavors that complement garlic bread perfectly."
  },
  {
    id: 7,
    author: "Deepika R.",
    rating: 5,
    isLong: false,
    previewText: "Loved the photo combo meal package! Great food paired with fun photobooth prints.",
    fullText: "Loved the photo combo meal package! Great food paired with fun photobooth prints."
  },
  {
    id: 8,
    author: "Vikas K.",
    rating: 5,
    isLong: false,
    previewText: "Korean Spicy Noodles and Cheese Dip are an unbeatable combination.",
    fullText: "Korean Spicy Noodles and Cheese Dip are an unbeatable combination."
  }
];

export const ReviewsSection: React.FC = () => {
  const [activeReview, setActiveReview] = useState<Review | null>(null);
  const modalPushedRef = useRef<boolean>(false);
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

  const openModal = (review: Review) => {
    lockBody();
    setActiveReview(review);

    if (!modalPushedRef.current) {
      window.history.pushState({ reviewModalOpen: true }, '');
      modalPushedRef.current = true;
    }
  };

  const closeModal = () => {
    unlockBody();

    if (modalPushedRef.current) {
      modalPushedRef.current = false;
      window.history.back();
    } else {
      setActiveReview(null);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (activeReview) {
        modalPushedRef.current = false;
        setActiveReview(null);
        unlockBody();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeReview]);

  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className="bg-brand-doodle-amber relative overflow-hidden shadow-inner flex items-center">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_30px_rgba(56,118,56,0.2)] z-10" />

      {/* Auto Horizontal Scroller (Guaranteed Single Row - Never Stacks) */}
      <div className="w-full overflow-hidden py-4 relative z-10">
        <div className="flex flex-row flex-nowrap items-stretch gap-6 animate-marquee w-max group hover:[animation-play-state:paused] px-4">
          
          {/* Double mapped array for seamless infinite scroll */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="w-[290px] min-[400px]:w-[340px] sm:w-[380px] flex-shrink-0 flex-grow-0 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-3xl border-2 border-brand-primary/20 shadow-[0_10px_25px_rgba(26,35,24,0.12)] flex flex-col justify-between whitespace-normal text-left transition-all hover:scale-[1.02]"
            >
              <div>
                {/* Quote Icon & Star Ratings */}
                <div className="flex items-center justify-between mb-3">
                  <Quote size={24} className="text-brand-accent fill-brand-accent/20" />
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, starIdx) => (
                      <Star key={starIdx} size={16} fill="#E89D25" stroke="#DF8A14" />
                    ))}
                  </div>
                </div>

                {/* Review Text with Inline 'see more...' link continuing immediately next to message */}
                <p className="text-xs sm:text-sm font-extrabold text-brand-dark/90 leading-relaxed font-sans">
                  "{review.previewText}"
                  {review.isLong && (
                    <button
                      type="button"
                      onClick={() => openModal(review)}
                      className="inline ml-1 font-black text-brand-primary hover:text-brand-accent underline underline-offset-2 cursor-pointer transition-colors"
                    >
                      see more...
                    </button>
                  )}
                </p>
              </div>

              {/* Author Name Only */}
              <div className="pt-3 mt-3 border-t border-brand-surface flex items-center justify-between">
                <span className="text-sm font-black font-display text-brand-dark uppercase tracking-wider">
                  {review.author}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* POP-UP MODAL (100% Identical Functionality to Combo Menu Modal) */}
      <AnimatePresence>
        {activeReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-2 border-brand-primary relative overflow-y-auto max-h-[85vh] z-[10000] my-auto overscroll-contain text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
                aria-label="Close review modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-brand-primary/10 rounded-2xl text-brand-primary">
                  <Quote size={28} className="text-brand-accent fill-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-brand-dark">
                    {activeReview.author}
                  </h3>
                  <div className="flex gap-1 mt-0.5">
                    {[...Array(activeReview.rating)].map((_, starIdx) => (
                      <Star key={starIdx} size={18} fill="#E89D25" stroke="#DF8A14" />
                    ))}
                    <span className="text-xs font-bold text-gray-500 ml-1">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Full Review Content */}
              <div className="bg-brand-surface p-5 rounded-2xl border border-brand-primary/20 mb-6">
                <p className="text-sm sm:text-base font-extrabold text-brand-dark italic leading-relaxed">
                  "{activeReview.fullText}"
                </p>
              </div>

              {/* Modal Footer Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-reflex btn-reflex-primary px-8 py-3 text-xs font-black uppercase shadow-md flex items-center justify-center gap-2 mx-auto"
                >
                  <CheckCircle2 size={16} />
                  <span>GOT IT 👍</span>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


