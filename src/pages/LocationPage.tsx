import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LocationSection } from '../components';

export const LocationPage = () => (
  <main className="min-h-screen bg-brand-bg pt-8">
    <Helmet>
      <title>Location & Contact | Klickz & Dipz Cafe</title>
      <meta name="description" content="Visit Klickz & Dipz Cafe at VR Mall Chennai. Find our hours, location, and contact information." />
    </Helmet>
    <LocationSection />
  </main>
);
