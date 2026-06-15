'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function WhyUs() {
  const features = [
    {
      num: '01 /',
      title: 'Tempat Nyaman',
      description:
        'Interior hangat dan nyaman untuk bekerja, bersantai, maupun berkumpul bersama teman dan keluarga.',
    },
    {
      num: '02 /',
      title: 'Menu Lengkap',
      description:
        'Tersedia berbagai pilihan kopi, makanan utama, camilan, dessert, dan minuman segar.',
    },
    {
      num: '03 /',
      title: 'Lokasi Strategis',
      description:
        'Berlokasi di pusat Kota Palembang dan mudah dijangkau dari berbagai area.',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="why-us" className="section-padding bg-background border-b border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-left">
          <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-2xl leading-[1.2]">
            Mengapa memilih <span className="italic-serif text-primary">Coffee & Me</span>?
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-editorial/15 border-y md:border-x-0 border-editorial/15 py-8 md:py-12"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-10 flex flex-col justify-start space-y-4 md:space-y-6 first:pl-0 last:pr-0"
            >
              <span className="text-xs font-bold tracking-widest text-primary block">
                {feature.num}
              </span>

              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
