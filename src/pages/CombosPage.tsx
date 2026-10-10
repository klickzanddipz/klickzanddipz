import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RevealingSoonSection } from '../components';

export const CombosPage = () => (
  <main className="min-h-screen bg-brand-bg">
    <Helmet>
      <title>Unlock Combos at VR Mall Chennai | Klickz & Dipz Cafe</title>
      <meta name="description" content="Unlock exclusive crunch burger, spicy Korean noodles & studio photobooth combos live at Klickz & Dipz, 3rd Floor VR Mall Chennai." />
      <link rel="canonical" href="https://klickzanddipz.com/combos" />
    </Helmet>
    <RevealingSoonSection type="combos" />
  </main>
);
