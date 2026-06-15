import React from 'react';
import dynamic from 'next/dynamic';

import Navbar from '@/components/navbar/navbar';
import Hero from '@/components/hero/hero';
import WhyUs from '@/components/why-us/why-us';
import About from '@/components/about/about';
import BestSeller from '@/components/best-seller/best-seller';
import FeaturedMenu from '@/components/featured-menu/featured-menu';
import Footer from '@/components/footer/footer';
import FloatingWhatsApp from '@/components/floating-whatsapp/floating-whatsapp';

const Gallery = dynamic(() => import('@/components/gallery/gallery'), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse rounded-2xl" />,
});

const Reviews = dynamic(() => import('@/components/reviews/reviews'), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse rounded-2xl" />,
});

const Location = dynamic(() => import('@/components/location/location'), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse rounded-2xl" />,
});

const CTA = dynamic(() => import('@/components/cta/cta'), {
  loading: () => <div className="h-64 w-full bg-primary/20 animate-pulse" />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <WhyUs />

        <About />

        <BestSeller />

        <FeaturedMenu />

        <Gallery />

        <Reviews />

        <Location />

        <CTA />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
