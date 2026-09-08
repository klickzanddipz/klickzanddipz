import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PhotoboothSection } from '../components';

export const PhotoboothPage = () => (
  <main className="min-h-screen bg-brand-bg">
    <Helmet>
      <title>Photobooth Experience | Klickz & Dipz Cafe VR Chennai</title>
      <meta name="description" content="Step into our studio-grade photobooth at VR Chennai. 100+ props, instant glossy prints, and digital QR copies!" />
    </Helmet>
    <PhotoboothSection />
  </main>
);
