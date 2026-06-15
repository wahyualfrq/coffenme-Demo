import { BusinessInfo } from '@/types';

export const businessInfo: BusinessInfo = {
  name: 'Coffee & Me',
  category: 'Coffee Shop & Restaurant',
  address: {
    street: 'Jl. Jambu No. 5 A B C',
    subdistrict: '30 Ilir',
    district: 'Kec. Ilir Barat II',
    city: 'Palembang',
    province: 'Sumatera Selatan',
    postalCode: '31113',
  },
  whatsapp: {
    number: '0853-9800-0093',
    link: 'https://wa.me/6285398000093',
  },
  instagram: {
    username: '@coffeeandme_plg',
    link: 'https://www.instagram.com/coffeeandme_plg',
  },
  operationalHours: '09.00 – 23.00',
  coordinates: {
    lat: -2.993478, // Approximate latitude for Ilir Barat II, Palembang
    lng: 104.744439, // Approximate longitude
  },
};
