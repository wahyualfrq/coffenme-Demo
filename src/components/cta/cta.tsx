'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-20 md:py-28">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Siap Menikmati Suasana Coffee & Me?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reservasikan tempat Anda sekarang atau hubungi kami untuk informasi lebih lanjut mengenai menu, acara, dan pemesanan tempat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4"
        >
          <a
            href={businessInfo.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/95 px-10 py-4 rounded-full text-base font-bold tracking-wide shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Hubungi via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
