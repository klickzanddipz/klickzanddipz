import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface OrderBannerProps {
  showOrderButton?: boolean;
}

export const OrderBanner: React.FC<OrderBannerProps> = ({ showOrderButton = true }) => (
  <div id="order" className="bg-brand-doodle-dark pt-4 pb-12 md:pt-6 md:pb-16 relative overflow-hidden shadow-xl">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        <div className={`max-w-3xl text-center ${showOrderButton ? 'lg:text-left' : 'mx-auto text-center'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-accent/30">
            <Sparkles size={14} className="animate-spin" />
            <span>Safest Home Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-3 uppercase">
            Craving the crunch <span className="text-brand-accent">at home?</span> 🛋️
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            Don't feel like stepping out? We've got you covered. Experience the magic of Klickz & Dipz from the comfort of your couch.
          </p>
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 bg-[#E89D25] text-[#1D421E] font-black font-display px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg border border-white/40 text-xs sm:text-sm md:text-base uppercase tracking-wider">
              <Sparkles size={16} className="text-[#1D421E] flex-shrink-0" />
              <span>Unlock exclusive offers on online orders!</span>
            </div>
          </div>
        </div>
        {showOrderButton && (
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link 
              to="/order" 
              className="btn-reflex btn-reflex-red px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-2xl flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
            >
              <ShoppingBag size={26} />
              <span>Order Online</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
);
