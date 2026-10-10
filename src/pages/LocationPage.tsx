import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LocationSection } from '../components';

export const LocationPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Visit Klickz & Dipz | 3rd Floor VR Mall Anna Nagar, Chennai</title>
      <meta name="description" content="Find Klickz & Dipz Cafe & Studio Photobooth on the 3rd Floor, Cafeteria, VR Mall Chennai. Open 10:30 AM to 11:00 PM everyday. Get directions & contact details." />
      <link rel="canonical" href="https://klickzanddipz.com/location" />
    </Helmet>
    <LocationSection />
  </main>
);
