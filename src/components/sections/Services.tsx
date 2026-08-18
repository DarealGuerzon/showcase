import { services } from '@/data/services'
import { serviceIcons } from '@/components/ui/icons'

export function Services() {
  return (
    <section id="services" className="border-t border-[var(--color-border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-3xl font-700 text-[var(--color-text-primary)] sm:text-4xl">
          What I offer
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => {
            const Icon = serviceIcons[svc.icon] ?? serviceIcons.layout
            return (
            <div
              key={svc.id}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/30"
            >
              <div className="mb-4 inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-accent-subtle)] p-2.5 text-xl text-[var(--color-accent)]">
                <Icon />
              </div>
              <h3 className="font-display mb-1 text-base font-500 text-[var(--color-text-primary)]">
                {svc.title}
              </h3>
              <p className="mb-3 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{svc.engagement}</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{svc.description}</p>
            </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-500 text-[var(--color-text-primary)]">Not sure what you need?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Drop me an email and we'll figure it out together.
            </p>
          </div>
          <a
            href="mailto:guerzondaryl25@gmail.com"
            className="mt-4 inline-block rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-500 text-[var(--color-bg)] transition-opacity hover:opacity-90 sm:mt-0"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
