import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget';
import { VisitorCounter } from '@/components/widgets/VisitorCounter';

export const metadata: Metadata = {
  title: 'Susty Digi Marketers - Tech Solutions & Digital Services',
  description: 'Leading tech company offering SaaS products and digital services including CRM, POS systems, mobile apps, web development, and AI automation solutions.',
  keywords: 'digital marketing, SaaS, CRM, POS system, web development, mobile apps, SEO, AI automation, custom software',
  authors: [{ name: 'Susty Digi Marketers' }],
  metadataBase: new URL('https://sustydigimarketers.com'),
  openGraph: {
    title: 'Susty Digi Marketers - Tech Solutions & Digital Services',
    description: 'Leading tech company offering SaaS products and digital services including CRM, POS systems, mobile apps, web development, and AI automation solutions.',
    url: 'https://sustydigimarketers.com',
    siteName: 'Susty Digi Marketers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Susty Digi Marketers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susty Digi Marketers - Tech Solutions & Digital Services',
    description: 'Leading tech company offering SaaS products and digital services including CRM, POS systems, mobile apps, web development, and AI automation solutions.',
    images: ['/og-image.jpg'],
    creator: '@SustyDigi',
    site: '@SustyDigi',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  alternates: {
    canonical: 'https://sustydigimarketers.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
        <WhatsAppWidget />
        <VisitorCounter />
      </body>
    </html>
  );
}