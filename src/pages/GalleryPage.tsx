import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GallerySection } from '../components';

export const GalleryPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Photo Gallery | Studio Photobooth & Cafe at VR Mall Chennai</title>
      <meta name="description" content="View authentic captures from our photobooth studio and cafe at VR Chennai. Instant photo strips, lively ambience, and delicious bites." />
      <link rel="canonical" href="https://klickzanddipz.com/gallery" />
    </Helmet>
    <GallerySection />
  </main>
);
