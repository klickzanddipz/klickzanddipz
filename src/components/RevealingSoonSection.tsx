import React from 'react';
import { Sparkles, MapPin, Instagram, Utensils, Gift } from 'lucide-react';
import { motion } from 'motion/react';

interface TeaserCard {
  title: string;
  category: string;
  desc: string;
  icon: React.ElementType;
  badge: string;
}

interface RevealingSoonProps {
  type: 'combos' | 'menu';
}

export const RevealingSoonSection: React.FC<RevealingSoonProps> = ({ type }) => {
  const isCombos = type === 'combos';

  const headingPrimary = isCombos ? 'UNLOCK COMBOS' : 'EXPLORE OUR MENU';
  const headingSecondary = 'AT VR MALL CHENNAI';
  const subtitle = isCombos
    ? 'Our store is actively running and serving hot daily! Walk into Klickz & Dipz at VR Chennai (3rd Floor) to unlock exclusive crunch burger combos, spicy Korean noodles, and studio photobooth bundle specials in person.'
    : 'Taste the crunch and chill in person! From sizzling Korean noodles and ice-cold craft mojitos to gourmet burgers and signature dips, our full menu is ready for you at VR Mall Chennai (3rd Floor).';

  const teaserCards: TeaserCard[] = isCombos
    ? [
        {
          title: 'BURGER & MOJITO COMBOS',
          category: 'IN-STORE SPECIALS',
          desc: 'Signature crunch burgers paired with seasoned crinkle fries and hand-crafted refreshing mojitos.',
          icon: Utensils,
          badge: 'SERVING DAILY 🍔',
        },
        {
          title: 'PHOTOBOOTH COMBO PACKS',
          category: 'STUDIO SPECIALS',
          desc: 'Strike 4 fun poses in our studio booth and take home instant photo strips bundled with your favorite snack bites and drinks.',
          icon: Gift,
          badge: 'LIVE AT VR MALL 📸',
        },
        {
          title: 'KOREAN NOODLES & SIPS',
          category: 'SPICY MUST-TRY',
          desc: 'Hot authentic Korean ramen noodles with cheese, served alongside ice-cold sparkling mojitos.',
          icon: Sparkles,
          badge: 'HOT & SIZZLING 🍜',
        },
      ]
    : [
        {
          title: 'AUTHENTIC KOREAN NOODLES',
          category: 'SPICY & CHEESY',
          desc: 'Fiery ramen cooked to perfection with rich broth, melted cheese, and bold Korean flavor.',
          icon: Sparkles,
          badge: 'FAN FAVORITE 🍜',
        },
        {
          title: 'CHILLED CRAFT MOJITOS',
          category: 'REFRESHING SIPS',
          desc: 'Mint, green apple, blue curacao, and fresh citrus coolers crafted to beat the Chennai heat.',
          icon: Utensils,
          badge: 'ICE COLD 🍹',
        },
        {
          title: 'GOURMET CRUNCH BURGERS',
          category: 'SIGNATURE CRUNCH',
          desc: 'Toasted brioche, extra crunchy patties, and our house-secret dip coatings for maximum flavor.',
          icon: Utensils,
          badge: 'CHEF\'S SPECIAL 🍔',
        },
      ];

  return (
    <section className="relative min-h-[85vh] py-16 md:py-24 bg-gradient-to-b from-[#0D160E] via-[#162918] to-[#0D160E] text-white overflow-hidden flex flex-col justify-center">
      {/* Background Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E89D25]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#2D5032]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 text-brand-accent font-black font-display text-xs sm:text-sm uppercase tracking-widest border border-white/20 shadow-xl backdrop-blur-md mb-6"
          >
            <MapPin size={15} className="text-[#E89D25] animate-bounce" />
            <span>NOW SERVING LIVE • 3RD FLOOR VR CHENNAI</span>
            <Sparkles size={15} className="text-[#E89D25]" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight uppercase leading-tight"
          >
            {headingPrimary} <br />
            <span className="bg-gradient-to-r from-[#F3A622] via-[#E89D25] to-[#DF8A14] bg-clip-text text-transparent drop-shadow-sm">
              {headingSecondary}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/85 font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teaserCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="relative bg-white/5 hover:bg-white/10 border-2 border-white/15 hover:border-[#E89D25]/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-2xl bg-[#E89D25]/20 text-[#E89D25] border border-[#E89D25]/30">
                    <Icon size={22} />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-[#E89D25] border border-white/15">
                    {card.badge}
                  </span>
                </div>

                <span className="text-xs font-black uppercase tracking-widest text-[#E89D25]/80 block mb-1">
                  {card.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-white/75 font-medium leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-wider text-white/70">
                  <span>3rd Floor, VR Mall Chennai</span>
                  <MapPin size={14} className="text-[#E89D25]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action & Visit In Person Card */}
        <div className="bg-[#1A2E1C]/90 border-2 border-[#E89D25]/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E89D25] mb-2">
            <MapPin size={16} className="animate-bounce" />
            <span>Store Open Everyday (10:30 AM - 11:00 PM)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase text-white mb-3">
            Come Taste The Vibe at VR Mall!
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-6">
            Find us on the 3rd Floor Cafeteria at VR Chennai, Jawaharlal Nehru Road, Anna Nagar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/k3jpsXyzGnhVVfXR7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reflex btn-reflex-accent px-7 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <MapPin size={18} />
              <span>Get Directions to VR Mall</span>
            </a>

            <a
              href="https://www.instagram.com/klickz_dipz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reflex btn-reflex-light px-7 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <Instagram size={18} />
              <span>Connect on Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
