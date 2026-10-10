import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MapPin, Star } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-brand-doodle-dark text-white py-6 sm:py-7 border-t border-white/10 w-full relative z-20 m-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
        
        {/* Left: Brand Identity & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img 
              src="/LOGO.png" 
              alt="Klickz & Dipz Cafe VR Mall Chennai" 
              className="h-8 md:h-9 w-auto object-contain drop-shadow-md" 
            />
          </div>
          <span className="text-[11px] sm:text-xs font-bold font-display tracking-wide text-white/85">
            © {new Date().getFullYear()} Klickz & Dipz Cafe. VR Mall Chennai. All rights reserved.
          </span>
        </div>

        {/* Right: Grid Layout where Row 1 and Row 2 align symmetrically:
            Row 1:   Review Us        Instagram          Privacy Policy
            Row 2:   Google Maps      YouTube            Terms of Service
        */}
        <div className="grid grid-cols-3 gap-x-5 sm:gap-x-8 md:gap-x-12 gap-y-2.5 items-center text-xs sm:text-sm font-extrabold font-display tracking-widest uppercase">
          
          {/* Row 1, Col 1: Review Us (Above Google Maps) */}
          <div className="flex items-center">
            <a
              href="https://share.google/G9xUCfp2n5rmAyRbp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Review Klickz & Dipz on Google Business"
              className="hover:text-brand-accent transition-colors flex items-center gap-2 text-white/90 group"
            >
              <Star size={15} className="text-brand-accent group-hover:scale-110 transition-transform flex-shrink-0 fill-brand-accent/20" />
              <span>Review Us</span>
            </a>
          </div>

          {/* Row 1, Col 2: Instagram */}
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/klickz_dipz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="hover:text-brand-accent transition-colors flex items-center gap-2 text-white/90 group"
            >
              <Instagram size={15} className="text-brand-accent group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Row 1, Col 3: Privacy Policy */}
          <div className="flex items-center">
            <Link
              to="/privacy-policy"
              className="hover:text-brand-accent transition-colors text-white/90"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Row 2, Col 1: Google Maps (Straight in line with YouTube and Terms of Service) */}
          <div className="flex items-center">
            <a
              href="https://maps.app.goo.gl/k3jpsXyzGnhVVfXR7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Location"
              className="hover:text-brand-accent transition-colors flex items-center gap-2 text-white/95 group"
            >
              <MapPin size={15} className="text-brand-accent group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>Google Maps</span>
            </a>
          </div>

          {/* Row 2, Col 2: YouTube (Straight in line with Google Maps and Terms of Service) */}
          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@KlickzDipz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="hover:text-brand-accent transition-colors flex items-center gap-2 text-white/90 group"
            >
              <Youtube size={15} className="text-brand-accent group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Row 2, Col 3: Terms of Service (Straight in line with Google Maps and YouTube) */}
          <div className="flex items-center">
            <Link
              to="/terms-of-service"
              className="hover:text-brand-accent transition-colors text-white/90"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </div>
  </footer>
);
