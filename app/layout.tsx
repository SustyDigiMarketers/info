import './globals.css';
import type { Metadata } from 'next';
import { Inter } from '@next/font/google';
import Script from 'next/script';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget';
import { VisitorCounter } from '@/components/widgets/VisitorCounter';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Susty Digi Marketers - Tech Solutions & Digital Services',
  description: 'Leading tech company offering SaaS products and digital services including CRM, POS systems, mobile apps, web development, and AI automation solutions.',
  keywords: 'digital marketing, SaaS, CRM, POS system, web development, mobile apps, SEO',
  authors: [{ name: 'Susty Digi Marketers' }],
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
              "name": "Susty Digi Marketers",
              "description": "Leading tech company offering SaaS products and digital services",
              "url": "https://sustydigimarketers.com",
              "logo": "https://sustydigimarketers.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "71-75 Shelton Street, Covent Garden",
                "addressLocality": "London",
                "addressCountry": "UK",
                "postalCode": "WC2H 9JQ"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "020 4628 6577",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577932965591",
                "https://www.instagram.com/sustydigimarketers",
                "https://www.youtube.com/@SustyDigiMarketers",
                "https://www.reddit.com/user/TechnicalSnow3450",
                "https://x.com/SustyDigi"
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
        <WhatsAppWidget />
        <VisitorCounter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}