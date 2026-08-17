'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Project } from '@/types'
import { InternalBadge, CredentialBadge, Tag, ResultBadge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [showDecisions, setShowDecisions] = useState(false)
  const shots = project.screenshots ?? []
  const hasDecisions = project.decisions && project.decisions.length > 0

  return (
    <article
      className={cn(
        'group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-border-hover)]',
        featured && 'lg:col-span-2'
      )}
    >
      {/* Hover accent line */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Screenshot carousel */}
      {shots.length > 0 && (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
          <div className={cn('relative', featured ? 'h-72' : 'h-60')}>
            {shots.map((src, i) => (
              <div
                key={src}
                className={cn(
                  'absolute inset-0 transition-opacity duration-300',
                  i === activeIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {shots.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {shots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Screenshot ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-200',
                    i === activeIdx
                      ? 'w-4 bg-[var(--color-accent)]'
                      : 'w-1.5 bg-white/50 hover:bg-white/70'
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Header row */}
      <div className="mb-3 flex items-start justify-between gap-3">
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

      {/* Engineering decisions toggle */}
      {hasDecisions && (
        <div className="mt-4 border-t border-[var(--color-border)] pt-4">
          <button
            onClick={() => setShowDecisions((v) => !v)}
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-secondary)]"
          >
            <span>Engineering decisions</span>
            <span
              className={cn(
                'inline-block transition-transform duration-200',
                showDecisions && 'rotate-180'
              )}
            >
              ↓
            </span>
          </button>

          {showDecisions && (
            <ul className="mt-3 space-y-2">
              {project.decisions!.map((d, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]">›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Code private note */}
      {project.codePrivateNote && (
        <p className="mt-3 text-xs italic text-[var(--color-text-muted)]">
          {project.codePrivateNote}
        </p>
      )}

      {/* Live/repo links */}
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
