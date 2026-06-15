'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Instagram, MapPin, ArrowUp } from 'lucide-react';
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

  return (
    <footer className="bg-foreground text-background pt-12 md:pt-20 pb-8 border-t border-editorial/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="hidden md:grid grid-cols-12 gap-12 pb-12">
          
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-2 rounded-xl inline-block shadow-sm">
              <Image
                src="/logo/logoCoffenme.png"
                alt="Coffee & Me Logo"
                width={120}
                height={40}
                className="object-contain w-auto h-8"
              />
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm font-light">
              Menggabungkan biji kopi pilihan terbaik, sajian hidangan lezat berkualitas tinggi, dan kenyamanan atmosfer bersantai di Palembang.
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center text-background"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-[#E1306C] transition-colors flex items-center justify-center text-background"
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
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center text-background"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-background/95">
              Navigasi Halaman
            </h4>
            <ul className="space-y-3 font-light text-sm">
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
                    className="text-background/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-background/95">
              Informasi Kontak
            </h4>
            <div className="space-y-4 text-sm text-background/70 leading-relaxed font-light">
              <p>
                <strong className="text-background/90 block font-semibold mb-0.5">Alamat:</strong>
                {businessInfo.address.street}, {businessInfo.address.subdistrict}, {businessInfo.address.district}, Kota {businessInfo.address.city}, {businessInfo.address.province} {businessInfo.address.postalCode}
              </p>
              <p>
                <strong className="text-background/90 block font-semibold mb-0.5">WhatsApp:</strong>
                {businessInfo.whatsapp.number}
              </p>
              <p>
                <strong className="text-background/90 block font-semibold mb-0.5">Jam Operasional:</strong>
                Setiap Hari: {businessInfo.operationalHours} WIB
              </p>
            </div>
          </div>

        </div>

        <div className="flex md:hidden flex-col items-center text-center space-y-5 pb-8">
          <div className="bg-white p-2 rounded-xl inline-block shadow-sm">
            <Image
              src="/logo/logoCoffenme.png"
              alt="Coffee & Me Logo"
              width={100}
              height={35}
              className="object-contain w-auto h-7"
            />
          </div>
          
          <div className="flex gap-4">
            <a
              href={businessInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={businessInfo.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background"
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
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background"
              aria-label="Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-1.5 text-xs text-background/60 font-light leading-relaxed">
            <p>{businessInfo.address.street}, {businessInfo.address.subdistrict}, Palembang</p>
            <p>WA: {businessInfo.whatsapp.number} • Buka {businessInfo.operationalHours} WIB</p>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between text-xs text-background/45 space-y-3 md:space-y-0 text-center md:text-left">
          <p>© {currentYear} {businessInfo.name}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <span className="hidden md:inline">Palembang, Indonesia</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-md flex items-center justify-center bg-primary text-white hover:bg-primary/90 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
