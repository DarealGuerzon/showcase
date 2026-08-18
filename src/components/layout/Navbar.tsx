'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LINKS } from '@/lib/links'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-display text-base font-700 tracking-tight text-[var(--color-text-primary)]">
          daryl<span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            GitHub ↗
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-sm font-500 text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={cn('block h-px w-5 bg-[var(--color-text-primary)] transition-all', open && 'translate-y-2 rotate-45')} />
          <span className={cn('block h-px w-5 bg-[var(--color-text-primary)] transition-all', open && 'opacity-0')} />
          <span className={cn('block h-px w-5 bg-[var(--color-text-primary)] transition-all', open && '-translate-y-2 -rotate-45')} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-text-secondary)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[var(--color-text-secondary)]"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-500 text-[var(--color-bg)]"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
