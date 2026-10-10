import React, { useState } from 'react';
import {
  Camera,
  Sparkles,
  Printer,
  ChevronDown,
  Touchpad,
  Users,
  Image as ImageIcon,
  Wand2,
  Heart
} from 'lucide-react';

// Feature Badges
const POSTER_BADGES = [
  { label: 'MULTIPLE FILTERS', icon: Wand2, color: 'bg-emerald-700 text-white' },
  { label: 'FUN PROPS', icon: Sparkles, color: 'bg-amber-600 text-white' },
  { label: 'MULTIPLE FRAMES', icon: ImageIcon, color: 'bg-teal-700 text-white' },
  { label: 'UPTO 8 PERSON', icon: Users, color: 'bg-indigo-700 text-white' },
  { label: 'INSTANT PHOTO PRINTS', icon: Printer, color: 'bg-rose-700 text-white' },
  { label: 'BEAUTIFUL MEMORIES', icon: Heart, color: 'bg-purple-700 text-white' },
];

// DSLR Booth Step-by-Step Guide
const BOOTH_STEPS = [
  { step: '01', title: 'TOUCH SCREEN TO BEGIN', icon: Touchpad },
  { step: '02', title: 'PICK PROPS & FILTER', icon: Sparkles },
  { step: '03', title: 'STRIKE 4 POSES', icon: Camera },
  { step: '04', title: 'INSTANT PHYSICAL PRINT', icon: Printer },
];

export const PhotoboothSection = () => {
  // Steps Collapsed State (starts expanded or toggled)
  const [isStepsExpanded, setIsStepsExpanded] = useState(true);

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

            {/* Right Column: Image Feature Badges Box */}
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
                    UNLIMITED FUN & POSES 📸
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* MAIN BODY: PHOTOBOOTH GUIDE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* STEPS TO FOLLOW IN PHOTOBOOTH */}
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

    </section>
  );
};
