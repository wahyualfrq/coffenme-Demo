'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, UtensilsCrossed } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { businessInfo } from '@/data/business';

export default function FeaturedMenu() {
  const signatureImage = {
    src: '/menu/steak-sapi.png',
    name: 'Steak Daging Sapi Pilihan',
    description: 'Daging sapi premium panggang dengan tingkat kematangan sempurna.',
  };

  return (
    <section id="menu" className="section-padding bg-background border-b border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        
        <div className="text-left mb-8 md:mb-12">
          <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Menu Pilihan
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-2xl leading-[1.2]">
            Sajian Khas & <span className="italic-serif text-primary">Menu Pilihan Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="space-y-8 flex-grow">
              {menuItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={item.id}
                  className="flex gap-4 sm:gap-6 items-start group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-editorial bg-muted flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-w-7xl) 10vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-grow space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {item.name}
                      </h3>
                      <div className="hidden sm:block flex-grow border-b border-dotted border-editorial mx-2 translate-y-[-4px]" />
                      <span className="text-sm sm:text-base font-semibold text-primary font-serif whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    
                    {item.description && (
                      <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    
                    <div className="pt-1">
                      <a
                        href={`${businessInfo.whatsapp.link}?text=Halo%20Coffee%20%26%20Me%2C%20saya%20tertarik%20untuk%20memesan%20${encodeURIComponent(
                          item.name
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-foreground/75 hover:text-primary transition-colors uppercase tracking-[0.15em]"
                      >
                        <Phone className="w-3 h-3 text-primary" />
                        <span>Pesan Sekarang</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-10 md:pt-12">
              <a
                href="/Menu-CoffeAndMe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase shadow-md transition-all hover:scale-105 duration-250 cursor-pointer"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Unduh Menu Lengkap</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="absolute -inset-4 rounded-3xl border border-editorial translate-x-2 translate-y-2 pointer-events-none z-0" />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-md aspect-[3/4] bg-muted">
                <Image
                  src={signatureImage.src}
                  alt={signatureImage.name}
                  fill
                  sizes="(max-w-7xl) 35vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 text-left pl-2">
                <span className="text-primary text-[10px] tracking-[0.2em] font-semibold uppercase block mb-1">
                  Signature Selection
                </span>
                <h4 className="text-lg md:text-xl font-medium font-serif text-foreground">
                  {signatureImage.name}
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm font-light mt-2 leading-relaxed max-w-sm">
                  {signatureImage.description}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
