'use client';

import React from 'react';
import ImageWithSkeleton from '@/components/ui/image-with-skeleton';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function About() {
  const collectionItems = [
    {
      id: 1,
      src: '/menu/steak.png',
      alt: 'Cita Rasa Autentik',
      caption: 'Cita Rasa Autentik',
    },
    {
      id: 2,
      src: '/menu/kopi.png',
      alt: 'Pilihan Barista',
      caption: 'Seduhan Kopi Pilihan',
    },
    {
      id: 3,
      src: '/gallery/g3.png',
      alt: 'Sudut Bersantai',
      caption: 'Ruang Nyaman & Tenang',
    },
    {
      id: 4,
      src: '/gallery/g5.png',
      alt: 'Suasana Hangat',
      caption: 'Suasana Premium',
    },
  ];

  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

  return (
    <section id="about" className="section-padding bg-background border-b border-border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl font-light text-primary tracking-tight leading-[1.2] max-w-2xl">
              Kami percaya menikmati kopi & hidangan lezat{' '}
              <span className="italic-serif text-foreground block mt-2">adalah sebuah karya seni</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 lg:pt-2"
          >
            <p className="text-muted-foreground text-xs md:text-sm tracking-widest uppercase font-semibold">
              Filosofi Coffee & Me
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-light">
              Terletak di pusat Kota Palembang, Coffee & Me menghadirkan perpaduan hangat antara cita rasa kuliner berkualitas, racikan kopi pilihan, dan atmosfer ruangan yang tenang. 
            </p>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light">
              Setiap menu kami persiapkan dengan dedikasi tinggi untuk memberikan momen bersantap terbaik bagi Anda, teman, rekan kerja, maupun keluarga.
            </p>
            <div className="pt-2">
              <a
                href="#menu"
                onClick={handleScrollToMenu}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary hover:text-primary/80 transition-colors uppercase"
              >
                <span>Lihat Menu Pilihan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
          {collectionItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-lg border border-editorial shadow-sm bg-muted group">
                <ImageWithSkeleton
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-w-7xl) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold text-foreground/80">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
