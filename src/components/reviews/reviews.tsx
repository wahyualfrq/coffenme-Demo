'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  initials: string;
  date: string;
  text: string;
  rating: number;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Aditya Pratama',
      initials: 'AP',
      date: '1 minggu yang lalu',
      text: 'Tempatnya nyaman banget buat kerja atau nugas. Kopinya enak, koneksi Wi-Fi kencang, dan pelayanannya ramah sekali. Sangat direkomendasikan di Palembang!',
      rating: 5,
    },
    {
      id: 'rev-2',
      name: 'Siti Rahma',
      initials: 'SR',
      date: '3 minggu yang lalu',
      text: 'Steak ayam dan Iga BBQ-nya luar biasa empuk! Harganya sangat bersahabat untuk rasa premium seperti ini. Tempat pas untuk makan malam bersama keluarga.',
      rating: 5,
    },
    {
      id: 'rev-3',
      name: 'Dian Lestari',
      initials: 'DL',
      date: '1 bulan yang lalu',
      text: 'Suka banget dengan Magic Lemonade-nya, tampilannya cantik dan rasanya sangat menyegarkan. Suasana cafenya tenang dan estetik, cocok untuk bersantai sore.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-background border-b border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3">
            <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block">
              Ulasan Pelanggan
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.2]">
              Apa Kata <span className="italic-serif text-primary">Pelanggan Kami</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-muted border border-editorial px-5 py-3 rounded-2xl w-fit flex-shrink-0">
            <div className="bg-[#4285F4] p-1.5 rounded-lg text-white flex items-center justify-center font-bold text-xs">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-foreground">Google Rating</span>
                <span className="text-sm font-bold text-primary">4.9★</span>
              </div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="text-[10px] text-muted-foreground ml-1.5">Berdasarkan ulasan pelanggan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background border border-editorial p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-foreground/80 text-sm font-light leading-relaxed italic">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-editorial">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {rev.initials}
                </div>
                
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm font-semibold text-foreground tracking-tight leading-none">
                    {rev.name}
                  </h4>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {rev.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
