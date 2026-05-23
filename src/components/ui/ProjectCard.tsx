import { Project } from '@/types'
import { Badge, InternalBadge, CredentialBadge, Tag, ResultBadge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-border-hover)]',
        featured && 'lg:col-span-2'
      )}
    >
      {/* Hover accent line */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header row */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="mb-1 text-xs text-[var(--color-text-muted)]">{project.typeLabel}</p>
          <h3
            className="text-base font-500 leading-snug text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-1.5">
          {project.isInternal && <InternalBadge />}
          {project.credential && <CredentialBadge label={project.credential} />}
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {project.description}
      </p>

      {/* Results */}
      {project.results.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.results.map((r) => (
            <ResultBadge key={r.label} {...r} />
          ))}
        </div>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Tag key={s} label={s} />
        ))}
      </div>

      {/* Live/repo links if present */}
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-4 flex gap-4 border-t border-[var(--color-border)] pt-4 text-xs">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
