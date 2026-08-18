import Image from 'next/image'
import { stats } from '@/data/services'
import { LINKS } from '@/lib/links'

const pills = ['Next.js', 'TypeScript', 'Supabase', 'Redis', 'n8n', 'Arduino/IoT', 'WordPress']

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Accent glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200,245,66,0.07) 0%, transparent 70%)' }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Split: text left, portrait right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left column */}
          <div>
            {/* Available badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
              <span className="text-xs text-[var(--color-text-secondary)]">Available for projects · Remote-friendly</span>
            </div>

            {/* Headline */}
            <h1 className="font-display mb-6 text-5xl font-800 leading-[1.05] tracking-tight text-[var(--color-text-primary)] animate-fade-up delay-100 sm:text-6xl lg:text-7xl">
              I build internal tools<br />
              that still work on{' '}
              <span className="text-[var(--color-accent)]">day 90.</span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] animate-fade-up delay-200">
              Full-stack developer (Next.js · TypeScript · Supabase · Redis). I take systems past "it works" — into production: caching that survives concurrent load, auth that survives SSR, releases that survive other people's code.
            </p>

            {/* Skill pills */}
            <div className="mb-10 flex flex-wrap gap-2 animate-fade-up delay-300">
              {pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
              <a
                href="#work"
                className="font-display rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-500 text-[var(--color-bg)] transition-opacity hover:opacity-90"
              >
                See my work
              </a>
              <a
                href={LINKS.cv}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
              >
                Download CV
                <span aria-hidden>&#8595;</span>
              </a>
              <a
                href={LINKS.email}
                className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
              >
                guerzondaryl25@gmail.com
              </a>
            </div>
          </div>

          {/* Right column — portrait panel */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src="/images/DP.jpg"
                alt="Daryl Guerzon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-[var(--color-border)] border-t border-[var(--color-border)] animate-fade-up delay-500">
          {stats.map((s) => (
            <div key={s.label} className="px-0 py-6 sm:px-8">
              <div className="font-display text-3xl font-700 text-[var(--color-accent)] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-[var(--color-text-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
