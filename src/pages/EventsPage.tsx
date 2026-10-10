import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EventsSection } from '../components';

export const EventsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-bg pt-8">
      <Helmet>
        <title>Host Photobooth & Birthday Events in Chennai | Klickz & Dipz</title>
        <meta name="description" content="Host birthdays, squad hangouts, and celebrations with studio photobooth captures and delicious snacks at Klickz & Dipz, VR Mall Chennai." />
        <link rel="canonical" href="https://klickzanddipz.com/events" />
      </Helmet>
      <EventsSection />
    </main>
  );
};
