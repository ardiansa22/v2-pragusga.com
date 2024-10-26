import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/go-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Professional portfolio showcasing software engineering projects and experience',
  keywords: ['software engineer', 'full-stack developer', 'web development', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Portfolio | Software Engineer',
    description: 'Professional portfolio showcasing software engineering projects and experience',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Software Engineer',
    description: 'Professional portfolio showcasing software engineering projects and experience',
    creator: '@yourusername',
  },
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
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GoToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}