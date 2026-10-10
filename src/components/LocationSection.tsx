import React from 'react';
import { MapPin, Clock, Navigation, ArrowRight } from 'lucide-react';

interface LocationSectionProps {
  isHomeScreen?: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ isHomeScreen = false }) => (
  <section id="location" className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-3 border border-brand-primary/20">
            <Navigation size={14} className="text-brand-accent animate-pulse" />
            <span>Find Us Nearby</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-brand-primary uppercase tracking-tight">
            VISIT <span className="text-brand-accent">OUR CAFE</span>
          </h2>
        </div>
      </div>

      {/* Grid with Comfortable Breathing Room */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* Left Column - 3 Spacious Relaxed Cards */}
        <div className="flex flex-col space-y-6 h-full justify-between">

          <div className="floating-card p-6 sm:p-7 flex items-start gap-4">
            <div className="p-3.5 bg-brand-accent/20 rounded-2xl text-brand-accent flex-shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold font-display text-brand-dark uppercase">3rd Floor, Cafeteria, <br className="md:hidden" /> VR Mall Chennai</h3>
              <p className="mt-1.5 text-brand-dark/75 text-sm sm:text-base font-medium leading-relaxed">
                Jawaharlal Nehru Road, Anna Nagar<br />Chennai, Tamil Nadu 600040
              </p>
            </div>
          </div>

          <div id="open-hours" className="floating-card p-6 sm:p-7 flex items-start gap-4 scroll-mt-28">
            <div className="p-3.5 bg-brand-primary/10 rounded-2xl text-brand-primary flex-shrink-0">
              <Clock size={28} />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-extrabold font-display text-brand-dark uppercase">Open Hours</h3>
              <p className="mt-1.5 text-brand-dark/75 text-sm sm:text-base font-medium leading-relaxed">
                10:30 am - 11:00 pm<br />Everyday (Mon - Sun)
              </p>
            </div>
          </div>

          <div className="floating-card p-6 sm:p-7 flex items-start gap-4">
            <div className="p-3.5 bg-brand-red/10 rounded-2xl text-brand-red flex-shrink-0">
              <Navigation size={28} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold font-display text-brand-dark uppercase">Online Enquiries</h3>
              <p className="mt-1.5 text-brand-dark/75 text-sm sm:text-base font-medium leading-relaxed">
                klickzanddipz@gmail.com<br />Instagram DM: @klickz_dipz
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Map on Location Page VS Storefront Overlay with Action Button on Home Screen */}
        {isHomeScreen ? (
          <div className="h-full min-h-[440px] lg:min-h-[480px] rounded-3xl overflow-hidden border-4 border-brand-primary/30 shadow-xl relative bg-gradient-to-br from-[#1D421E] via-[#244E25] to-[#1D421E] flex flex-col items-center justify-center p-8 text-center group">
            {/* Storefront background image with 50% opacity */}
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Klickz & Dipz Storefront VR Mall Chennai"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D421E] via-[#1D421E]/60 to-[#1D421E]/40 pointer-events-none"></div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-md flex flex-col items-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-[0_0_20px_rgba(232,157,37,0.4)] animate-bounce">
                <MapPin size={32} />
              </div>

              <p className="text-white/90 text-sm sm:text-base font-medium">
                Locate our store on 3rd floor, check live directions, and come taste the vibes in person!
              </p>

              {/* Animated Action Icon Get Directions Button */}
              <a
                href="https://maps.app.goo.gl/k3jpsXyzGnhVVfXR7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reflex btn-reflex-accent px-8 py-4 text-base sm:text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-all group/btn"
              >
                <Navigation size={22} className="animate-pulse" />
                <span>Get Directions</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ) : (
          <div className="h-full min-h-[460px] lg:min-h-[480px] rounded-3xl overflow-hidden border-4 border-brand-primary/30 shadow-lg floating-card relative group flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.088!2d80.1976239!3d13.0804574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670078a23d7b%3A0x694d139e445d4563!2sKlickz%20%26%20Dipz!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: '380px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Klickz & Dipz Google Maps Location"
              className="w-full flex-grow"
            ></iframe>
            <div className="p-4 bg-white/95 backdrop-blur-md border-t border-brand-primary/20 flex items-center justify-between gap-4">
              <span className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">3rd Floor, Cafeteria, VR Mall Chennai</span>
              <a
                href="https://maps.app.goo.gl/k3jpsXyzGnhVVfXR7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reflex btn-reflex-primary px-4 py-2 text-xs font-black uppercase flex items-center gap-1.5 flex-shrink-0"
              >
                <Navigation size={14} />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  </section>
);
