import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CombosSection } from '../components';

export const CombosPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Our Combos | Klickz & Dipz Cafe</title>
      <meta name="description" content="Discover our best value meal combos and photobooth packages at Klickz & Dipz Cafe." />
    </Helmet>
    <CombosSection />
  </main>
);

