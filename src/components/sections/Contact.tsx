export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center sm:p-16">
          <p className="mb-3 text-xs font-500 uppercase tracking-widest text-[var(--color-accent)]">
            Let's work together
          </p>
          <h2
            className="mb-4 text-3xl font-700 text-[var(--color-text-primary)] sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Got a project in mind?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Whether you need tracking set up, a workflow automated, or a full-stack build — I'm available for project work and part-time retainers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:guerzondaryl25@gmail.com"
              className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-500 text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              guerzondaryl25@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/daryl-guerzon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-8 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Meta info */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-[var(--color-text-muted)]">
            <span>📍 Quezon City, Philippines</span>
            <span>🌐 Remote-friendly</span>
            <span>⏱ 10–20 hrs/week available</span>
            <span>💬 Usually replies within 24 hrs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
