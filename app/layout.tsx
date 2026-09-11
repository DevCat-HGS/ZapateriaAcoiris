import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arcoiriszapateria.com'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    'Arcoiris Zapatería Especializada | Reparación de Calzado y Cuero en Medellín',
  description:
    'Reparación profesional de calzado, bolsos, chaquetas y artículos de cuero en Medellín. Cambio de suelas, teñido, costuras y más, con 40 años de experiencia y recogida y entrega en el Área Metropolitana.',
  keywords: [
    'reparación de calzado Medellín',
    'reparación de zapatos Medellín',
    'reparación de bolsos Medellín',
    'reparación de cuero Medellín',
    'restauración de calzado',
    'zapatería especializada Medellín',
    'reparación de calzado Laureles',
    'reparación de calzado El Poblado',
    'cambio de suelas Medellín',
    'teñido de cuero Medellín',
    'reparación de chaquetas de cuero Medellín',
  ],
  authors: [{ name: 'Arcoiris Zapatería Especializada' }],
  creator: 'Arcoiris Zapatería Especializada',
  publisher: 'Arcoiris Zapatería Especializada',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title:
      'Arcoiris Zapatería Especializada | Reparación de Calzado y Cuero en Medellín',
    description:
      'Reparación profesional de calzado, bolsos, chaquetas y artículos de cuero. Cambio de suelas, teñido, costuras y más en Medellín, con recogida y entrega en el Área Metropolitana.',
    siteName: 'Arcoiris Zapatería Especializada',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Restauración de calzado en cuero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Arcoiris Zapatería Especializada | Reparación de Calzado en Medellín',
    description:
      'Reparación profesional de calzado, bolsos, chaquetas y artículos de cuero. Cambio de suelas, teñido, costuras y más en Medellín.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [{ url: '/icon.png', rel: 'icon', type: 'image/png' }],
    shortcut: ['/icon.png'],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3a2a1c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light bg-background ${fraunces.variable} ${manrope.variable}`}
    >
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
