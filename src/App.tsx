import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { Navbar, Footer, TopSlider, ScrollToTopButton } from './components';

// Lazy load pages for performance
const Home = lazy(() => import('./pages').then(m => ({ default: m.Home })));
const CombosPage = lazy(() => import('./pages').then(m => ({ default: m.CombosPage })));
const MenuPage = lazy(() => import('./pages').then(m => ({ default: m.MenuPage })));
const LocationPage = lazy(() => import('./pages').then(m => ({ default: m.LocationPage })));
const GalleryPage = lazy(() => import('./pages').then(m => ({ default: m.GalleryPage })));
const GalleryCategoryPage = lazy(() => import('./pages').then(m => ({ default: m.GalleryCategoryPage })));
const PhotoboothPage = lazy(() => import('./pages').then(m => ({ default: m.PhotoboothPage })));
const OrderPage = lazy(() => import('./pages').then(m => ({ default: m.OrderPage })));
const EventsPage = lazy(() => import('./pages').then(m => ({ default: m.EventsPage })));
const PrivacyPolicyPage = lazy(() => import('./pages').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages').then(m => ({ default: m.TermsPage })));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If navigating back/forward in history, preserve the browser scroll position
    if (navType === 'POP') return;

    // If there's a hash fragment, let the target component handle scrolling
    if (hash) return;

    if (pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      // Small timeout to allow DOM layout to calculate nav offset
      setTimeout(() => {
        const navElement = document.querySelector('nav');
        if (navElement) {
          window.scrollTo({ top: navElement.offsetTop, behavior: 'auto' });
        } else {
          window.scrollTo(0, 320);
        }
      }, 50);
    }
  }, [pathname, hash, navType]);
  return null;
};

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    (window as any).lenis = lenis;

    function raf(time: number) {
      if (document.body.classList.contains('modal-open')) {
        lenis.stop();
      } else {
        lenis.start();
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return null;
};

// Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-primary border-t-brand-accent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll />
        <ScrollToTop />
        <div className="min-h-screen bg-[#1D421E] text-brand-dark font-sans flex flex-col overflow-x-hidden">
          <div className="bg-brand-doodle flex-grow flex flex-col">
            <TopSlider />
            <Navbar />
            <div className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/combos" element={<CombosPage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/location" element={<LocationPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/gallery/:categoryId" element={<GalleryCategoryPage />} />
                  <Route path="/photobooth" element={<PhotoboothPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsPage />} />
                </Routes>
              </Suspense>
            </div>
          </div>
          <Footer />
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
