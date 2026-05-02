import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pisos-laredo.vercel.app'),
  title: 'Pisos Laredo | Inmobiliaria en Laredo, Cantabria',
  description: 'Tu inmobiliaria de confianza en Laredo, Cantabria. Encuentra pisos, chalets y apartamentos en la costa de Cantabria. Más de 20 años de experiencia.',
  keywords: 'inmobiliaria laredo, pisos laredo, casas cantabria, chalet laredo, apartamentos playa',
  authors: [{ name: 'Pisos Laredo' }],
  alternates: {
    canonical: 'https://pisos-laredo.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pisos-laredo.vercel.app',
    siteName: 'Pisos Laredo',
    title: 'Pisos Laredo | Inmobiliaria en Laredo, Cantabria',
    description: 'Tu inmobiliaria de confianza en Laredo, Cantabria. Encuentra pisos, chalets y apartamentos en la costa de Cantabria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pisos Laredo | Inmobiliaria en Laredo, Cantabria',
    description: 'Tu inmobiliaria de confianza en Laredo, Cantabria. Encuentra pisos, chalets y apartamentos en la costa de Cantabria.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Saltar al contenido
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
