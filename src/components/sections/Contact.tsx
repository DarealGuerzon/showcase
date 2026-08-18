import { MapPinIcon, GlobeIcon, ClockIcon, ChatIcon } from '@/components/ui/icons'
import { LINKS } from '@/lib/links'

const meta = [
  { Icon: MapPinIcon, label: 'Quezon City, Philippines' },
  { Icon: GlobeIcon, label: 'Remote-friendly' },
  { Icon: ClockIcon, label: '10–20 hrs/week available' },
  { Icon: ChatIcon, label: 'Usually replies within 24 hrs' },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center sm:p-16">
          <h2
            className="font-display mb-4 text-3xl font-700 text-[var(--color-text-primary)] sm:text-5xl"
          >
            Got a project in mind?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Whether you need an internal tool built, a workflow automated, or a full-stack system — I'm available for project work and part-time retainers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.email}
              className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-500 text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              guerzondaryl25@gmail.com
            </a>
            <a
              href={LINKS.cv}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-8 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
            >
              Download CV
              <span aria-hidden>&#8595;</span>
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-8 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Meta info */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-[var(--color-text-muted)]">
            {meta.map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="text-[0.95rem] text-[var(--color-text-secondary)]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
