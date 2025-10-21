import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrbisReach',
  description: 'Automatiza operaciones de retail, ecommerce y distribución de moda con IA. Predicción de tendencias, optimización de inventario y personalización.',
  keywords: 'IA, moda, retail, ecommerce, predicción de tendencias, optimización de inventario',
  authors: [{ name: 'OrbisReach' }],
  creator: 'OrbisReach',
  publisher: 'OrbisReach',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orbisreach.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OrbisReach',
    description: 'Automatiza operaciones de retail, ecommerce y distribución de moda con IA.',
    url: 'https://orbisreach.com',
    siteName: 'OrbisReach',
    images: [
      {
        url: '/assets/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'OrbisReach - IA para Moda y Retail',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OrbisReach',
    description: 'Automatiza operaciones de retail, ecommerce y distribución de moda con IA.',
    images: ['/assets/images/logo/logo.png'],
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}