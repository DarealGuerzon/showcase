import type { Metadata } from 'next'
import { syne, dmSans } from '@/lib/fonts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Daryl Guerzon — Full-Stack Developer · Internal Tools & Production Systems',
    template: '%s | Daryl Guerzon',
  },
  description:
    'I build internal tools that still work on day 90. Next.js, TypeScript, Supabase, Redis — approval workflows, dashboards, and automations built for production.',
  keywords: [
    'full-stack developer',
    'internal tools',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Redis',
    'approval workflow',
    'dashboard',
    'automation',
    'Philippines',
    'freelance',
  ],
  authors: [{ name: 'Daryl Guerzon', url: 'https://darylguerzon.dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darylguerzon.dev',
    title: 'Daryl Guerzon — Full-Stack Developer · Internal Tools & Production Systems',
    description:
      'I build internal tools that still work on day 90. Next.js, TypeScript, Supabase, Redis — approval workflows, dashboards, and automations built for production.',
    siteName: 'Daryl Guerzon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daryl Guerzon — Full-Stack Developer · Internal Tools',
    description:
      'I build internal tools that still work on day 90. Next.js, TypeScript, Supabase, Redis.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
