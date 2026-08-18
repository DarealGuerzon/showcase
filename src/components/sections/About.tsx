import { skillGroups } from '@/data/services'
import { CapIcon } from '@/components/ui/icons'

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Bio */}
          <div>
            <h2 className="font-display mb-6 text-3xl font-700 text-[var(--color-text-primary)] sm:text-4xl">
              The rare combo.
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                BS Computer Engineering graduate from FEU Tech — Elite Scholar, Dean's Lister, MRSP National Robotics Champion, and PhilDev & DICT Ideathon Finalist.
              </p>
              <p>
                I work on a small engineering team where I've shipped two production systems solo and act as release manager on a live team repo — CODEOWNERS, PR checks, and sole authority on what reaches main.
              </p>
              <p>
                I'm comfortable taking over messy codebases, shipping features end-to-end, and explaining technical decisions to non-technical stakeholders. I also use AI tooling (Claude Code, Cursor, Lovable) as part of my workflow — not to replace thinking, but to move faster without cutting corners.
              </p>
            </div>

            {/* Education badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
              <CapIcon className="text-xl text-[var(--color-accent)]" />
              <div>
                <p className="text-xs font-500 text-[var(--color-text-primary)]">BS Computer Engineering</p>
                <p className="text-xs text-[var(--color-text-muted)]">FEU Tech · 2021–2025</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="mb-6 text-xs font-500 uppercase tracking-widest text-[var(--color-text-muted)]">
              Tech stack
            </p>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.category} className="flex gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs text-[var(--color-text-muted)]">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
