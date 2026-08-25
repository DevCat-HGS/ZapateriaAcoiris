import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
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
    'Especialistas en reparación y restauración de calzado, bolsos, ropa y artículos de cuero en Medellín. Más de 10 años de experiencia. Recogida y entrega en el Área Metropolitana.',
  keywords: [
    'reparación de calzado Medellín',
    'reparación de zapatos Medellín',
    'reparación de bolsos Medellín',
    'reparación de cuero Medellín',
    'restauración de calzado',
    'zapatería especializada Medellín',
    'reparación de calzado Laureles',
    'reparación de calzado El Poblado',
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
      'Reparamos y restauramos calzado, bolsos, ropa y artículos de cuero. Más de 10 años de experiencia. Recogida y entrega en el Área Metropolitana de Medellín.',
    siteName: 'Arcoiris Zapatería Especializada',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Restauración de calzado en cuero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Arcoiris Zapatería Especializada | Reparación de Calzado en Medellín',
    description:
      'Reparación y restauración de calzado, bolsos y artículos de cuero en Medellín.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: '/logo-empresa.png',
    apple: '/logo-empresa.png',
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
        {children}
      </body>
    </html>
  )
}
