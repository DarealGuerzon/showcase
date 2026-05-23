import type { Metadata } from 'next'
import { syne, dmSans } from '@/lib/fonts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Daryl Guerzon — Full-Stack Developer & Marketing Tech Specialist',
    template: '%s | Daryl Guerzon',
  },
  description:
    'Full-stack developer who speaks marketing. I build internal tools, set up tracking that actually works, and automate workflows. Based in Quezon City, PH — working with clients worldwide.',
  keywords: ['full-stack developer', 'GA4', 'GTM', 'n8n', 'Next.js', 'Supabase', 'Philippines', 'freelance'],
  authors: [{ name: 'Daryl Guerzon', url: 'https://darylguerzon.dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darylguerzon.dev',
    title: 'Daryl Guerzon — Full-Stack Developer & Marketing Tech Specialist',
    description: 'Full-stack developer who speaks marketing. GA4, GTM, n8n, Next.js.',
    siteName: 'Daryl Guerzon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daryl Guerzon — Full-Stack Developer',
    description: 'Full-stack developer who speaks marketing.',
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
