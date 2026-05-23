export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-text-muted)] sm:flex-row">
        <span>
          © {year} Daryl N. Guerzon · Quezon City, PH
        </span>
        <div className="flex gap-6">
          <a href="mailto:guerzondaryl25@gmail.com" className="hover:text-[var(--color-text-secondary)] transition-colors">
            Email
          </a>
          <a
            href="https://linkedin.com/in/daryl-guerzon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text-secondary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text-secondary)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
