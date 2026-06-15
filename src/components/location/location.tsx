'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function Location() {
  const mapQuery = encodeURIComponent(
    `${businessInfo.name}, ${businessInfo.address.street}, ${businessInfo.address.subdistrict}, ${businessInfo.address.district}, ${businessInfo.address.city}`
  );
  
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="section-padding bg-background border-b border-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-16">
          <span className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Kunjungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-2xl leading-[1.2]">
            Lokasi Kami & <span className="italic-serif text-primary">Jam Operasional</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight">
                {businessInfo.name}
              </h3>
              
              <div className="space-y-6 border-l border-primary/20 pl-6 py-2">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-muted-foreground block">
                    Alamat Lengkap
                  </span>
                  <p className="text-foreground/80 text-sm md:text-base font-light leading-relaxed">
                    {businessInfo.address.street}, {businessInfo.address.subdistrict},<br />
                    {businessInfo.address.district}, Kota {businessInfo.address.city},<br />
                    {businessInfo.address.province} {businessInfo.address.postalCode}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-muted-foreground block">
                    Jam Operasional
                  </span>
                  <p className="text-foreground/85 text-sm md:text-base font-normal">
                    Setiap Hari: {businessInfo.operationalHours} WIB
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-primary block">
                    Mengapa Banyak Pelanggan Memilih Coffee & Me?
                  </span>
                  <ul className="space-y-2 text-sm text-foreground/85 font-light">
                    {[
                      'Tempat nyaman untuk berkumpul',
                      'Menu lengkap dan beragam',
                      'Cocok untuk meeting dan bekerja',
                      'Mudah dijangkau di Kota Palembang',
                      'Buka setiap hari hingga malam',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-semibold text-sm select-none">✓</span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative h-[350px] lg:h-auto rounded-2xl overflow-hidden border border-editorial shadow-sm bg-muted"
          >
            <div className="absolute -inset-4 rounded-3xl border border-editorial translate-x-2 translate-y-2 pointer-events-none z-0" />
            <iframe
              title={`Peta Lokasi ${businessInfo.name}`}
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
