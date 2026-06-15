'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { businessInfo } from '@/data/business';

export default function BestSeller() {
  const bestSellerIds = ['steak-ayam', 'iga-bbq', 'nasi-ayam-penyet', 'magic-lemonade'];
  const bestSellers = menuItems.filter((item) => bestSellerIds.includes(item.id));

  const sortedBestSellers = [
    bestSellers.find((item) => item.id === 'steak-ayam'),
    bestSellers.find((item) => item.id === 'iga-bbq'),
    bestSellers.find((item) => item.id === 'nasi-ayam-penyet'),
    bestSellers.find((item) => item.id === 'magic-lemonade'),
  ].filter(Boolean);

  return (
    <section id="best-seller" className="section-padding bg-background border-b border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-left">
          <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
            Rekomendasi Utama
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.2]">
            Menu Favorit <span className="italic-serif text-primary">Pelanggan</span>
          </h2>
          <p className="text-muted-foreground text-sm font-light mt-3 max-w-xl leading-relaxed">
            Pilihan menu yang paling sering dipesan oleh pelanggan setia Coffee & Me di Palembang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {sortedBestSellers.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-background border border-editorial rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-w-7xl) 25vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <span>Best Seller</span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-editorial flex items-center justify-between gap-2">
                    <span className="text-base font-semibold text-primary font-serif">
                      {item.price}
                    </span>

                    <a
                      href={`${businessInfo.whatsapp.link}?text=Halo%20Coffee%20%26%20Me%2C%20saya%20ingin%20memesan%20${encodeURIComponent(
                        item.name
                      )}%20yang%20merupakan%20Menu%20Favorit.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      <Phone className="w-3 h-3 text-primary" />
                      <span>Pesan</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
