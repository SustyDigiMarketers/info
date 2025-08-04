import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SustyDigiMarketers - Elevating Tech for the Future',
  description: 'Leading digital marketing and SaaS solutions company offering innovative products and services to elevate your business technology.',
  keywords: 'digital marketing, SaaS, CRM, POS system, web development, mobile apps, SEO',
  authors: [{ name: 'SustyDigiMarketers' }],
  openGraph: {
    title: 'SustyDigiMarketers - Elevating Tech for the Future',
    description: 'Leading digital marketing and SaaS solutions company offering innovative products and services to elevate your business technology.',
    url: 'https://sustydigimarketers.com',
    siteName: 'SustyDigiMarketers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SustyDigiMarketers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SustyDigiMarketers - Elevating Tech for the Future',
    description: 'Leading digital marketing and SaaS solutions company offering innovative products and services to elevate your business technology.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sustydigimarketers.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SustyDigiMarketers",
              "description": "Leading digital marketing and SaaS solutions company",
              "url": "https://sustydigimarketers.com",
              "logo": "https://sustydigimarketers.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/sustydigimarketers",
                "https://twitter.com/sustydigimarketers",
                "https://linkedin.com/company/sustydigimarketers"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}