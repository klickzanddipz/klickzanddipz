import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero, OrderBanner, CombosSection, MenuSection, ReviewsSection, EventsSection, LocationSection, GallerySection, PhotoboothSection } from '../components';

export const Home = () => (
  <main>
    <Helmet>
      <title>Klickz & Dipz Cafe - Home</title>
      <meta name="description" content="Welcome to Klickz & Dipz Cafe, your ultimate destination for crunch and vibes in Chennai." />
    </Helmet>
    <Hero />
    <OrderBanner />
    <CombosSection />
    <PhotoboothSection />
    <MenuSection />
    <GallerySection />
    <ReviewsSection />
    <EventsSection />
    <LocationSection isHomeScreen={true} />
  </main>
);

