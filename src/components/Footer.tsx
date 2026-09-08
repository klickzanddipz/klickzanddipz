import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-brand-doodle-dark text-white py-8 shadow-inner w-full relative z-20 m-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <img src="/LOGO.png" alt="Klickz & Dipz" className="h-8 w-auto object-contain" />
        <span className="text-xs sm:text-sm font-extrabold font-display tracking-wide opacity-95">
          © {new Date().getFullYear()} Klickz & Dipz Cafe. All rights reserved.
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-extrabold font-display tracking-widest uppercase">
        {/* Pair 1: Social Links (Instagram & YouTube) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.instagram.com/klickz_dipz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors flex items-center gap-1.5 text-white/90"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@KlickzDipz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors flex items-center gap-1.5 text-white/90"
          >
            <Youtube size={16} />
            <span>YouTube</span>
          </a>
        </div>

        {/* Separator between Social and Policy links on Desktop */}
        <span className="text-white/30 hidden sm:inline">•</span>

        {/* Pair 2: Policy Links (Privacy Policy & Terms of Service) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/privacy-policy"
            className="hover:text-brand-accent transition-colors text-white/90"
          >
            Privacy Policy
          </Link>
          <span className="text-white/30 inline">•</span>
          <Link
            to="/terms-of-service"
            className="hover:text-brand-accent transition-colors text-white/90"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
