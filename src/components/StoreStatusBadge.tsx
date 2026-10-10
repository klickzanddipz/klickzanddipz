import React, { useState, useEffect } from 'react';

interface StoreStatus {
  isOpen: boolean;
  text: string;
}

const checkStoreStatus = (): StoreStatus => {
  try {
    // Current time in Indian Standard Time (IST, UTC+5:30)
    const now = new Date();
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istDate = new Date(istString);

    const hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Store hours: 10:30 AM (630 mins) to 11:00 PM (1380 mins)
    const openMinutes = 10 * 60 + 30; // 10:30 AM
    const closeMinutes = 23 * 60;      // 11:00 PM

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return {
      isOpen,
      text: isOpen ? 'We are Open' : 'Closed',
    };
  } catch (e) {
    return {
      isOpen: true,
      text: 'We are Open',
    };
  }
};

interface StoreStatusBadgeProps {
  className?: string;
}

export const StoreStatusBadge: React.FC<StoreStatusBadgeProps> = ({ className = '' }) => {
  const [status, setStatus] = useState<StoreStatus>(checkStoreStatus);

  useEffect(() => {
    // Check every 30 seconds
    const interval = setInterval(() => {
      setStatus(checkStoreStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('open-hours') || document.getElementById('location');
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/location#open-hours';
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      title="Click to view store hours below"
      aria-label="Store status. Click to view open hours below"
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg border transition-all cursor-pointer hover:scale-105 active:scale-95 group ${
        status.isOpen
          ? 'bg-emerald-950/85 text-emerald-300 border-emerald-500/40 shadow-emerald-950/40 hover:border-emerald-400'
          : 'bg-rose-950/85 text-rose-300 border-rose-500/40 shadow-rose-950/40 hover:border-rose-400'
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        {status.isOpen ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
        )}
      </span>
      <span className="font-black font-display text-xs sm:text-sm uppercase tracking-wider">
        {status.text}
      </span>
    </button>
  );
};
