import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Mail, MapPin, Phone, ArrowLeft, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-bg pt-8 pb-20">
      <Helmet>
        <title>Privacy Policy | Klickz & Dipz Cafe VR Chennai</title>
        <meta
          name="description"
          content="Privacy Policy for Klickz & Dipz Cafe. Learn how we collect, protect, and use your information for cafe services, event bookings, and photobooth experiences."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-black font-display uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-3 border border-brand-primary/20">
            <ShieldCheck size={16} className="text-brand-accent" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
            PRIVACY <span className="text-brand-accent">POLICY</span>
          </h1>
          <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2 text-xs sm:text-sm">
            Last Updated: September 2026 | Klickz & Dipz Cafe, VR Mall Chennai
          </p>
        </div>

        {/* Content Document Card */}
        <div className="floating-card bg-white p-8 sm:p-16 rounded-3xl border-2 border-brand-primary/20 shadow-2xl text-center py-16">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-brand-primary uppercase tracking-tight">
            Will be updated
          </h2>
        </div>
      </div>
    </main>
  );
};
