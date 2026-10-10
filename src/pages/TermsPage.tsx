import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-bg pt-8 pb-20">
      <Helmet>
        <title>Terms & Conditions | Klickz & Dipz Cafe VR Chennai</title>
        <meta
          name="description"
          content="Terms and Conditions for Klickz & Dipz Cafe. Operational policies, photobooth usage rules, event booking terms, and online ordering guidelines."
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
            <FileCheck size={16} className="text-brand-accent" />
            <span>Service Terms & Operating Rules</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
            TERMS & <span className="text-brand-accent">CONDITIONS</span>
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
