import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MenuSection } from '../components';

export const MenuPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Menu | Klickz & Dipz Cafe</title>
      <meta name="description" content="Explore our extensive menu of burgers, fries, shakes, and more at Klickz & Dipz Cafe." />
    </Helmet>
    <MenuSection />
  </main>
);
