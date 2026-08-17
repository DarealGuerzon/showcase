'use client'

import { useState, useEffect, useCallback } from 'react'
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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const shots = project.screenshots ?? []
  const hasDecisions = project.decisions && project.decisions.length > 0

  const prev = useCallback(
    () => setActiveIdx((i) => (i - 1 + shots.length) % shots.length),
    [shots.length]
  )
  const next = useCallback(
    () => setActiveIdx((i) => (i + 1) % shots.length),
    [shots.length]
  )

  useEffect(() => {
    if (!lightboxOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxOpen, prev, next])

  return (
    <>
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
            {/* Image stack */}
            <div
              className={cn(
                'relative cursor-zoom-in',
                featured ? 'h-96' : 'h-80'
              )}
              onClick={() => setLightboxOpen(true)}
              title="Click to enlarge"
            >
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

              {/* Enlarge hint */}
              <div className="absolute right-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                click to enlarge
              </div>
            </div>

            {/* Prev / Next arrows */}
            {shots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                >
                  &#8592;
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                >
                  &#8594;
                </button>
              </>
            )}

            {/* Dot indicators */}
            {shots.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {shots.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActiveIdx(i) }}
                    aria-label={`Screenshot ${i + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all duration-200',
                      i === activeIdx
                        ? 'w-5 bg-white'
                        : 'w-2 bg-white/50 hover:bg-white/80'
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
            <h3 className="font-display text-base font-500 leading-snug text-[var(--color-text-primary)]">
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
                &#8595;
              </span>
            </button>

            {showDecisions && (
              <ul className="mt-3 space-y-2">
                {project.decisions!.map((d, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                    <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]">&#8250;</span>
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
                Live &#8599;
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              >
                GitHub &#8599;
              </a>
            )}
          </div>
        )}
      </article>

      {/* Lightbox */}
      {lightboxOpen && shots.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Image container */}
          <div
            className="relative flex h-full w-full max-h-[90vh] max-w-[92vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={shots[activeIdx]}
                alt={`${project.title} screenshot ${activeIdx + 1}`}
                fill
                className="object-contain"
                sizes="92vw"
              />
            </div>

            {/* Prev / Next */}
            {shots.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-lg backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  &#8592;
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-lg backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  &#8594;
                </button>
              </>
            )}

            {/* Counter + dots */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2">
              <span className="text-xs text-white/60">
                {activeIdx + 1} / {shots.length}
              </span>
              {shots.length > 1 && (
                <div className="flex gap-2">
                  {shots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-200',
                        i === activeIdx ? 'w-5 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
