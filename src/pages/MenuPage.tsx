import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MenuSection } from '../components';

export const MenuPage = () => (
  <main className="min-h-screen bg-brand-bg pt-4 md:pt-8">
    <Helmet>
      <title>Our Menu at VR Mall Chennai | Korean Noodles, Mojitos & Crunch Burgers</title>
      <meta name="description" content="Taste spicy Korean noodles, chilled craft mojitos, gourmet crunch burgers & signature dips live at Klickz & Dipz, 3rd Floor VR Mall Anna Nagar, Chennai." />
      <link rel="canonical" href="https://klickzanddipz.com/menu" />
    </Helmet>
    <MenuSection />
  </main>
);
