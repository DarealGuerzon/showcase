import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-700 text-[var(--color-text-primary)] sm:text-4xl">
              What I've built
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-[var(--color-text-muted)] sm:block">
            Most projects are internal tools — no live links, but real outcomes.
          </p>
        </div>

        {/* Project grid — featured card spans 2 cols on desktop */}
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.isFeatured}
            />
          ))}
        </div>

        {/* Currently building */}
        <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/50 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 flex-shrink-0">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-75" />
            </span>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-500 text-[var(--color-text-primary)]">Currently building:</span>{' '}
              Docs Q&A assistant with a retrieval-eval harness — build log coming.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
