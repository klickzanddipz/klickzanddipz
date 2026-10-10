import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PhotoboothSection } from '../components';

export const PhotoboothPage = () => (
  <main className="min-h-screen bg-brand-bg">
    <Helmet>
      <title>Studio Photobooth in Chennai | Instant Photo Strips at VR Mall</title>
      <meta name="description" content="Capture 4 instant poses with fun props and custom frames at Klickz & Dipz Studio Photobooth, 3rd Floor VR Mall Anna Nagar, Chennai. Instant physical glossy prints & digital copies." />
      <link rel="canonical" href="https://klickzanddipz.com/photobooth" />
    </Helmet>
    <PhotoboothSection />
  </main>
);
