import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-500 uppercase tracking-widest text-[var(--color-accent)]">
              Selected work
            </p>
            <h2
              className="text-3xl font-700 text-[var(--color-text-primary)] sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
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
      </div>
    </section>
  )
}
