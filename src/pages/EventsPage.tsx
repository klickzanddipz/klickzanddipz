import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EventsSection } from '../components';

export const EventsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-bg pt-8">
      <Helmet>
        <title>Host Your Event | Klickz & Dipz Cafe</title>
        <meta name="description" content="Book your private parties, birthdays, corporate events, and celebrations with Klickz & Dipz Cafe!" />
      </Helmet>
      <EventsSection />
    </main>
  );
};




