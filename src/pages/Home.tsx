import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero, PhotoboothSection, GallerySection, EventsSection, LocationSection } from '../components';

export const Home = () => (
  <main>
    <Helmet>
      <title>Klickz & Dipz | Photobooth Studio & Cafe at VR Mall Chennai</title>
      <meta name="description" content="Experience Chennai's top studio photobooth, spicy Korean noodles, chilled craft mojitos, and gourmet crunch burgers at Klickz & Dipz, 3rd Floor VR Mall Anna Nagar." />
      <link rel="canonical" href="https://klickzanddipz.com/" />
    </Helmet>
    <Hero />
    <PhotoboothSection />
    <GallerySection isHomeScreen={true} />
    <EventsSection />
    <LocationSection isHomeScreen={true} />
  </main>
);
