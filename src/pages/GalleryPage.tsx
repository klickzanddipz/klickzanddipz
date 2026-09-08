import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GallerySection } from '../components';

export const GalleryPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Gallery | Klickz & Dipz Cafe</title>
      <meta name="description" content="View our gallery to see the amazing vibes, food, drinks, and photobooth captures at Klickz & Dipz Cafe." />
    </Helmet>
    <GallerySection />
  </main>
);
