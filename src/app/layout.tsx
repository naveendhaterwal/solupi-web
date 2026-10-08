import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { themeColor } from '@/lib/site';
import './globals.css';

// The app's own fonts (subset from frontend's @expo-google-fonts packages).
const inter = localFont({
  variable: '--font-inter',
  display: 'swap',
  src: [
    { path: './fonts/Inter_400Regular.woff2', weight: '400' },
    { path: './fonts/Inter_500Medium.woff2', weight: '500' },
    { path: './fonts/Inter_600SemiBold.woff2', weight: '600' },
  ],
});

const newsreader = localFont({
  variable: '--font-newsreader',
  display: 'swap',
  src: [
    { path: './fonts/Newsreader_400Regular.woff2', weight: '400' },
    { path: './fonts/Newsreader_400Regular_Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Newsreader_500Medium.woff2', weight: '500' },
  ],
});

const title = 'SolUPI — Pay Locally. Settle Globally.';
const description = 'SolUPI makes stablecoin payments feel as simple as everyday payments, powered by Solana.';

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL at build time so Open Graph image URLs are absolute.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description,
  icons: { icon: '/brand/favicon.png', apple: '/brand/icon.png' },
  openGraph: { type: 'website', siteName: 'SolUPI', title, description, images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};

export const viewport: Viewport = { themeColor, width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
