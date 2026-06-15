import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { businessInfo } from '@/data/business';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://coffeeandme.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Coffee & Me | Coffee Shop & Restaurant di Palembang',
  description: 'Coffee & Me adalah coffee shop dan restaurant di Palembang yang menghadirkan kopi pilihan, makanan utama, dessert, dan suasana nyaman untuk bersantai maupun bekerja.',
  keywords: [
    'coffee shop palembang',
    'cafe palembang',
    'tempat nongkrong palembang',
    'restaurant palembang',
    'coffee and me palembang',
    'cafe ilir barat',
    'tempat ngopi palembang',
  ],
  authors: [{ name: 'Coffee & Me' }],
  creator: 'Coffee & Me',
  publisher: 'Coffee & Me',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Coffee & Me | Coffee Shop & Restaurant di Palembang',
    description: 'Coffee & Me adalah coffee shop dan restaurant di Palembang yang menghadirkan kopi pilihan, makanan utama, dessert, dan suasana nyaman untuk bersantai maupun bekerja.',
    url: siteUrl,
    siteName: 'Coffee & Me',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/hero/background.png',
        width: 1200,
        height: 630,
        alt: 'Coffee & Me Cafe Interior Palembang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee & Me | Coffee Shop & Restaurant di Palembang',
    description: 'Nikmati kopi pilihan, hidangan utama, camilan favorit, dan suasana nyaman di Coffee & Me Palembang.',
    images: ['/hero/background.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fullAddress = `${businessInfo.address.street}, ${businessInfo.address.subdistrict}, ${businessInfo.address.district}, ${businessInfo.address.city}, ${businessInfo.address.province} ${businessInfo.address.postalCode}`;

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteUrl}/#restaurant`,
    'name': businessInfo.name,
    'image': `${siteUrl}/hero/background.png`,
    'telephone': `+62${businessInfo.whatsapp.number.replace(/[^0-9]/g, '').substring(1)}`,
    'url': siteUrl,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessInfo.address.street,
      'addressLocality': businessInfo.address.subdistrict,
      'addressRegion': businessInfo.address.city,
      'postalCode': businessInfo.address.postalCode,
      'addressCountry': 'ID',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': businessInfo.coordinates.lat,
      'longitude': businessInfo.coordinates.lng,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '09:00',
      'closes': '23:00'
    },
    'menu': `${siteUrl}/#menu`,
    'servesCuisine': ['Coffee', 'Indonesian', 'Steak', 'Desserts'],
    'priceRange': '$$',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Cafe',
    '@id': `${siteUrl}/#local-business`,
    'name': businessInfo.name,
    'image': `${siteUrl}/logo/logoCoffenme.png`,
    'telephone': `+62${businessInfo.whatsapp.number.replace(/[^0-9]/g, '').substring(1)}`,
    'url': siteUrl,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessInfo.address.street,
      'addressLocality': businessInfo.address.subdistrict,
      'addressRegion': businessInfo.address.city,
      'postalCode': businessInfo.address.postalCode,
      'addressCountry': 'ID',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': businessInfo.coordinates.lat,
      'longitude': businessInfo.coordinates.lng,
    },
    'openingHours': 'Mo-Su 09:00-23:00',
    'sameAs': [
      businessInfo.instagram.link,
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Di mana lokasi Coffee & Me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Coffee & Me berlokasi di ${fullAddress}.`
        }
      },
      {
        '@type': 'Question',
        'name': 'Jam berapa operasional Coffee & Me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Kami buka setiap hari mulai pukul ${businessInfo.operationalHours} WIB.`
        }
      },
      {
        '@type': 'Question',
        'name': 'Bagaimana cara melakukan reservasi tempat?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Anda dapat melakukan reservasi tempat dengan mudah melalui WhatsApp kami di nomor ${businessInfo.whatsapp.number} atau langsung klik link: ${businessInfo.whatsapp.link}.`
        }
      },
      {
        '@type': 'Question',
        'name': 'Menu apa saja yang tersedia di Coffee & Me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Kami menyediakan berbagai hidangan lengkap mulai dari Steak Ayam, Steak Daging Sapi, Iga BBQ, Nasi Ayam Penyet Sambal Matah, hingga minuman menyegarkan seperti Cappuccino, Kopi Susu gula aren, Magic Lemonade, dan Jus Strawberry segar.'
        }
      }
    ]
  };

  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
