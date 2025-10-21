import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../app/globals.css'
import Navbar from '@/components/sections/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrbisReach',
  description: 'Revoluciona tu negocio de moda con IA. Predicción de tendencias, optimización de inventario y personalización de experiencia para marcas de moda, retail y ecommerce.',
  keywords: 'inteligencia artificial moda, IA retail, predicción tendencias moda, optimización inventario, personalización ecommerce, fashion tech',
  authors: [{ name: 'OrbisReach Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'OrbisReach',
    description: 'Revoluciona tu negocio de moda con IA. Predicción de tendencias, optimización de inventario y personalización de experiencia.',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/assets/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'OrbisReach - IA para Moda y Retail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OrbisReach',
    description: 'Revoluciona tu negocio de moda con IA. Predicción de tendencias, optimización de inventario y personalización de experiencia.',
    images: ['/assets/images/logo/logo.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
