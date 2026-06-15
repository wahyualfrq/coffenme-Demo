'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={businessInfo.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.55)] transition-all duration-300 cursor-pointer"
      aria-label="Hubungi kami via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

      <svg
        className="w-7 h-7 fill-current relative z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.106-1.337a9.92 9.92 0 004.903 1.296h.005c5.502 0 9.985-4.479 9.986-9.986 0-2.668-1.039-5.176-2.93-7.067C17.175 3.018 14.67 2 12.012 2zm5.728 14.103c-.313.882-1.83 1.722-2.527 1.837-.597.1-1.383.155-2.222-.115-3.327-1.07-5.467-4.467-5.633-4.686-.167-.22-1.328-1.764-1.328-3.364 0-1.6 1.033-2.386 1.173-2.52.14-.134.364-.2.583-.2.07 0 .15.003.22.006.213.009.32.012.46.353.176.427.604 1.472.656 1.579.053.107.088.232.017.373-.07.14-.14.283-.28.423-.14.14-.294.28-.42.423-.14.14-.3.292-.128.583.333.56.74 1.026 1.218 1.45.62.55 1.144.906 1.493 1.08.349.175.52.152.713-.07.194-.22.827-.96.953-1.287.127-.327.253-.277.427-.213.174.064 1.1.52 1.29.61.19.09.32.14.364.22.044.08.044.473-.27.135z" />
      </svg>
    </motion.a>
  );
}
