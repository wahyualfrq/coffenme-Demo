'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Coffee, Utensils, Sofa, MapPin } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function Hero() {
  const handleScrollToMenu = () => {
    const target = document.querySelector('#menu');
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const features = [
    {
      icon: <Coffee className="w-4 h-4 text-[#C5A880] flex-shrink-0" />,
      title: 'Kopi Pilihan',
      separator: '–',
      desc: 'Biji kopi berkualitas dengan cita rasa terbaik.',
    },
    {
      icon: <Utensils className="w-4 h-4 text-[#C5A880] flex-shrink-0" />,
      title: 'Menu Lengkap',
      separator: '➔',
      desc: 'Dari makanan utama hingga camilan & dessert.',
    },
    {
      icon: <Sofa className="w-4 h-4 text-[#C5A880] flex-shrink-0" />,
      title: 'Suasana Nyaman',
      separator: '➔',
      desc: 'Tempat hangat untuk bekerja, bersantai, dan berkumpul.',
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0" />,
      title: 'Lokasi Strategis',
      separator: '–',
      desc: 'Mudah dijangkau di pusat Kota Palembang.',
    },
  ];

  return (
    <section className="relative min-h-screen md:h-screen w-full flex flex-col justify-between overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/background.png"
          alt="Coffee & Me Palembang Cafe Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex-grow flex items-center pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl space-y-4 md:space-y-6 text-left"
          >
            <div className="flex items-center gap-3 text-primary">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                Coffee Shop & Restaurant
              </span>
              <div className="h-[1px] w-16 bg-primary/80" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.25] text-white">
              <span className="italic-serif font-light text-white">Tempat ngopi</span>,<br />
              bersantai, dan menikmati<br />
              hidangan <span className="italic-serif font-normal text-primary">favorit.</span>
            </h1>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-lg">
              Kopi pilihan, hidangan utama lezat, camilan favorit, dan suasana hangat untuk setiap momen berharga bersama keluarga, teman, maupun rekan kerja.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={businessInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.15em] uppercase shadow-md transition-all hover:scale-105 duration-200"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Reservasi via WhatsApp</span>
              </a>
              <button
                onClick={handleScrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.15em] uppercase hover:scale-105 duration-200 cursor-pointer"
              >
                <span>Lihat Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-black/60 backdrop-blur-md border-t border-white/5 mt-auto">
        
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10 text-white py-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 first:pl-0 last:pr-0 md:pl-6">
                <div className="mt-0.5">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-xs tracking-wide">
                    {feature.title} <span className="text-white/40 ml-1 font-normal">{feature.separator}</span>
                  </h4>
                  <p className="text-[11px] text-white/50 font-light mt-1 leading-normal">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden overflow-hidden py-4 w-full flex select-none">
          <div className="flex w-max">
            <motion.div
              animate={{ x: [0, '-100%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 18,
              }}
              className="flex gap-12 px-6 flex-shrink-0"
            >
              {features.map((feature, idx) => (
                <div key={`track1-${idx}`} className="flex items-center gap-2.5 flex-shrink-0">
                  {feature.icon}
                  <span className="text-[11px] font-semibold tracking-wide text-white whitespace-nowrap">
                    {feature.title} <span className="text-white/40 ml-0.5 font-normal">{feature.separator}</span>
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              animate={{ x: [0, '-100%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 18,
              }}
              className="flex gap-12 px-6 flex-shrink-0"
            >
              {features.map((feature, idx) => (
                <div key={`track2-${idx}`} className="flex items-center gap-2.5 flex-shrink-0">
                  {feature.icon}
                  <span className="text-[11px] font-semibold tracking-wide text-white whitespace-nowrap">
                    {feature.title} <span className="text-white/40 ml-0.5 font-normal">{feature.separator}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden md:block">
        <div className="w-4 h-6 border border-white/20 rounded-full flex justify-center p-0.5">
          <div className="w-0.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
