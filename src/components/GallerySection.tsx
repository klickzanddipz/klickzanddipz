import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Camera } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 'cafe', title: 'Cafe', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
  { id: 'photobooth', title: 'Photobooth', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
  { id: 'food', title: 'Food', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { id: 'drinks', title: 'Drinks', image: 'https://images.unsplash.com/photo-1621996311210-9113a96092b3?auto=format&fit=crop&w=800&q=80' }
];

export const GallerySection = () => (
  <section className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-primary/20">
          <Camera size={14} className="text-brand-accent" />
          <span>Visual Showcase</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
          OUR <span className="text-brand-accent">GALLERY</span>
        </h2>
        <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2">Our Vibes & Bites</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <Link 
            to={`/gallery/${item.id}`} 
            key={item.id} 
            className="floating-card group relative overflow-hidden rounded-3xl border-2 border-brand-primary/20 aspect-square block shadow-md hover:shadow-2xl transition-all"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent group-hover:from-brand-dark/60 transition-colors duration-500 flex items-end p-6">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
