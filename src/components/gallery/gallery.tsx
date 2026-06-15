'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'cafe' | 'coffee' | 'food';
  spanClass: string;
}

export default function Gallery() {

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/gallery/g1.png',
      alt: 'Ruang Makan Utama',
      category: 'cafe',
      spanClass: 'col-span-2 row-span-2 h-[320px] md:h-[500px]',
    },
    {
      id: 2,
      src: '/gallery/g2.png',
      alt: 'Bar Mini & Espresso Station',
      category: 'cafe',
      spanClass: 'col-span-1 row-span-1 h-[150px] md:h-[238px]',
    },
    {
      id: 3,
      src: '/gallery/g3.png',
      alt: 'Sofa Bersantai Keluarga',
      category: 'cafe',
      spanClass: 'col-span-1 row-span-2 h-[320px] md:h-[500px]',
    },
    {
      id: 4,
      src: '/gallery/g4-new.png',
      alt: 'Jalur Masuk Asri & Estetik',
      category: 'cafe',
      spanClass: 'col-span-1 row-span-1 h-[150px] md:h-[238px]',
    },
    {
      id: 5,
      src: '/gallery/g5.png',
      alt: 'Meja Kerja & Co-Working Space',
      category: 'cafe',
      spanClass: 'col-span-1 row-span-1 h-[150px] md:h-[238px]',
    },
    {
      id: 6,
      src: '/gallery/g6.png',
      alt: 'Ruang nyaman dan dingin karena ac',
      category: 'cafe',
      spanClass: 'col-span-2 row-span-1 h-[150px] md:h-[238px]',
    },
    {
      id: 7,
      src: '/gallery/g7.png',
      alt: 'Area Terbuka Outdoor Nyaman',
      category: 'cafe',
      spanClass: 'col-span-1 row-span-1 h-[150px] md:h-[238px]',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Galeri Foto
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.2]">
            Suasana yang <span className="italic-serif text-primary">Membuat Anda Ingin Kembali</span>
          </h2>
          <p className="text-muted-foreground text-sm font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Setiap sudut Coffee & Me dirancang untuk memberikan pengalaman bersantai yang nyaman dan berkesan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-max">
          {galleryItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={item.id}
              className={`relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm group ${item.spanClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                <div className="text-white">
                  <h3 className="text-sm md:text-base font-bold font-serif leading-tight">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
