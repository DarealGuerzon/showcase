import { Syne, DM_Sans } from 'next/font/google'

// Display font — bold, geometric, distinctive
export const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

// Body font — clean, readable, modern
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})
