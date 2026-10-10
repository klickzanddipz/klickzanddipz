import React from 'react';
import { Helmet } from 'react-helmet-async';
import { OrderBanner } from '../components';
import { ShoppingBag, ExternalLink, Sparkles, CheckCircle2, Clock, Lock } from 'lucide-react';

const ZomatoLogo = () => (
  <span className="font-black font-display tracking-tighter text-3xl sm:text-4xl text-[#E23744] italic">
    zomato
  </span>
);

const SwiggyLogo = () => (
  <span className="font-black font-display tracking-tight text-3xl sm:text-4xl text-[#FC8019] italic">
    SWIGGY
  </span>
);

export const OrderPage = () => {
  const zomatoUrl = "https://www.zomato.com/chennai/klickz-dipz-anna-nagar-west";

  return (
    <main className="min-h-screen bg-brand-bg">
      <Helmet>
        <title>Order Online | Klickz & Dipz Cafe (Zomato & Swiggy)</title>
        <meta name="description" content="Order your favorite crispy bites, burgers, mojitos, and dips from Klickz & Dipz Cafe via Zomato or Swiggy." />
      </Helmet>

      {/* Order Banner without redundant button inside OrderPage */}
      <OrderBanner showOrderButton={false} />

      <section className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
          {/* Standardized Section Header matching website design system */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-primary/20">
              <Sparkles size={14} className="text-brand-accent" />
              <span>Delivery Partners</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
              CHOOSE YOUR <span className="text-brand-accent">PLATFORM</span>
            </h2>
            <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2">
              Get Hot & Crispy Food Delivered To Your Doorstep
            </p>
          </div>

        {/* Side-by-Side Portrait Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Left Card: ZOMATO (Available) */}
          <div className="floating-card group relative bg-white rounded-3xl border-3 border-[#E23744]/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#CB202D] via-[#E23744] to-[#F44336]" />
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#E23744]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-6 pt-2">
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 font-extrabold font-display text-xs uppercase tracking-widest border border-emerald-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Available Now</span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fast Delivery</span>
              </div>

              {/* Zomato Branding Header */}
              <div className="text-center py-4 px-6 bg-red-50/60 rounded-2xl border border-red-100 mb-6">
                <ZomatoLogo />
                <p className="text-xs font-bold text-gray-600 mt-1 uppercase tracking-wider">
                  Official Delivery Partner
                </p>
              </div>

              {/* Cover Image Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                  alt="Zomato Order Klickz & Dipz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-black font-display uppercase tracking-widest text-[#E23744] bg-white/90 px-2.5 py-0.5 rounded-md">
                    LIVE ON ZOMATO
                  </span>
                  <h3 className="text-lg font-black font-display uppercase tracking-tight mt-1">
                    Klickz & Dipz - VR Mall
                  </h3>
                </div>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-brand-dark">
                  <CheckCircle2 size={18} className="text-[#E23744] flex-shrink-0" />
                  <span>25 - 35 Mins Superfast Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-brand-dark">
                  <CheckCircle2 size={18} className="text-[#E23744] flex-shrink-0" />
                  <span>Exclusive Zomato Gold & Coupon Discounts</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-brand-dark">
                  <CheckCircle2 size={18} className="text-[#E23744] flex-shrink-0" />
                  <span>Live GPS Order Tracking</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <a
                href={zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reflex w-full py-4 text-base sm:text-lg flex items-center justify-center gap-3 bg-gradient-to-r from-[#CB202D] to-[#E23744] text-white border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all font-black uppercase tracking-wider rounded-2xl active:scale-95 cursor-pointer"
              >
                <ShoppingBag size={22} />
                <span>ORDER ON ZOMATO</span>
                <ExternalLink size={18} />
              </a>
              <p className="text-center text-[11px] text-gray-500 font-extrabold uppercase tracking-wider mt-2.5">
                Click to open Zomato store page
              </p>
            </div>

          </div>

          {/* Right Card: SWIGGY (Coming Soon / Disabled) */}
          <div className="floating-card relative bg-white/80 rounded-3xl border-3 border-gray-200 shadow-md overflow-hidden flex flex-col justify-between p-6 sm:p-8 opacity-90">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#FC8019]/60 via-[#FC8019]/40 to-gray-300" />
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#FC8019]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-6 pt-2">
                <div className="px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-700 font-extrabold font-display text-xs uppercase tracking-widest border border-amber-500/30 flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-600 animate-spin" />
                  <span>Launching Soon</span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Coming Soon</span>
              </div>

              {/* Swiggy Branding Header */}
              <div className="text-center py-4 px-6 bg-orange-50/50 rounded-2xl border border-orange-100/60 mb-6">
                <SwiggyLogo />
                <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wider">
                  Partner Integration In Progress
                </p>
              </div>

              {/* Cover Image Banner (Greyscale Overlay) */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 border border-gray-200 shadow-inner grayscale opacity-75">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
                  alt="Swiggy Klickz & Dipz Coming Soon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full mb-2 text-white border border-white/30">
                    <Lock size={24} />
                  </div>
                  <span className="text-xs font-black font-display uppercase tracking-widest text-amber-300">
                    SWIGGY STORE COMING SOON
                  </span>
                </div>
              </div>

              {/* Feature Points (Muted) */}
              <div className="space-y-3 mb-8 opacity-60">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-gray-600">
                  <CheckCircle2 size={18} className="text-[#FC8019] flex-shrink-0" />
                  <span>Swiggy Delivery (Under Setup)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-gray-600">
                  <CheckCircle2 size={18} className="text-[#FC8019] flex-shrink-0" />
                  <span>Swiggy One Offers & Discounts</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-gray-600">
                  <CheckCircle2 size={18} className="text-[#FC8019] flex-shrink-0" />
                  <span>Live Delivery Updates</span>
                </div>
              </div>
            </div>

            {/* Disabled Action Button */}
            <div>
              <button
                type="button"
                disabled
                className="w-full py-4 text-base sm:text-lg flex items-center justify-center gap-3 bg-gray-200 text-gray-400 border-2 border-gray-300 font-black uppercase tracking-wider rounded-2xl cursor-not-allowed select-none shadow-none pointer-events-none"
              >
                <Lock size={20} />
                <span>LAUNCHING SOON ON SWIGGY</span>
              </button>
              <p className="text-center text-[11px] text-gray-400 font-extrabold uppercase tracking-wider mt-2.5">
                Swiggy integration will be enabled shorty
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
    </main>
  );
};

