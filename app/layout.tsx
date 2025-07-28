import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/go-to-top';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/scroll-progress';
import Banner from '../public/bannerp.jpeg';
import { Analytics } from '@vercel/analytics/react';
import { ChatBot } from '@/components/chat-bot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ferian | Software Engineer',
  description:
    'Professional portfolio of Ferian, a software engineer specializing in full-stack development',
  keywords: [
    'Ferian',
    'software engineer',
    'full-stack developer',
    'web development',
    'portfolio',
  ],
  authors: [{ name: 'Ferian' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Ferian.com',
    title: 'Ferian | Software Engineer',
    description:
      'Professional portfolio of Ferian, a software engineer specializing in full-stack development',
    siteName: 'Taufik Ferian Portfolio',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Ferian - Software Engineer',
      },
    ],
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferian | Software Engineer',
    description:
      'Professional portfolio of Taufik Ferian, a software engineer specializing in full-stack development',
    creator: '@Ferian',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Taufik Ferian - Software Engineer',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  abstract: 'Professional portfolio of Taufik Ferian',
  applicationName: 'Taufik Ferian Portfolio',
  category: 'Software Engineer',
  colorScheme: 'light dark',
  metadataBase: new URL('https://Ferian.com'),
  themeColor: '#ea580c',
  creator: 'Taufik Ferian',
  alternates: {
    canonical: 'https://v0.Ferian.com',
  },
  publisher: 'Ferian',
  referrer: 'no-referrer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <GoToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
