'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, ArrowUp, Clock } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-editorial/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand & Description */}
          <motion.div className="md:col-span-5 space-y-6" variants={itemVariants}>
            <div className="bg-white p-3 rounded-2xl inline-flex items-center shadow-sm">
              <Image
                src="/logo/logoCoffenme.png"
                alt="Coffee & Me Logo"
                width={120}
                height={40}
                className="object-contain h-8 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm font-light">
              Menggabungkan biji kopi pilihan terbaik, sajian hidangan lezat berkualitas tinggi, dan kenyamanan atmosfer bersantai di Palembang.
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/5 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center text-background/80"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/5 hover:bg-[#E1306C] hover:text-white transition-all duration-300 flex items-center justify-center text-background/80"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${businessInfo.name}, ${businessInfo.address.street}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/5 hover:bg-[#EA4335] hover:text-white transition-all duration-300 flex items-center justify-center text-background/80"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div className="md:col-span-3 space-y-6" variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-background/90">
              Navigasi
            </h4>
            <ul className="space-y-4 font-light text-sm">
              {[
                { label: 'Beranda', id: '#' },
                { label: 'Tentang Kami', id: '#about' },
                { label: 'Menu Pilihan', id: '#menu' },
                { label: 'Galeri Foto', id: '#gallery' },
                { label: 'Lokasi Kami', id: '#location' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.id}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-background/60 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="md:col-span-4 space-y-6" variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-background/90">
              Informasi Kontak
            </h4>
            <div className="space-y-4 text-sm text-background/70 leading-relaxed font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-background/50 mt-0.5" />
                <span>
                  {businessInfo.address.street}, {businessInfo.address.subdistrict},<br />
                  {businessInfo.address.district}, Kota {businessInfo.address.city}, {businessInfo.address.province} {businessInfo.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-background/50" />
                <span>{businessInfo.whatsapp.number}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0 text-background/50" />
                <span>Setiap Hari: {businessInfo.operationalHours} WIB</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-background/50 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} {businessInfo.name}. Hak Cipta Dilindungi.</p>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>Palembang, Indonesia</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background/5 hover:bg-primary hover:text-white text-background transition-all duration-300 cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
