import { cn } from '@/lib/utils'
import { ResultBadge as ResultBadgeType } from '@/types'

// --- Badge (type label chip) ---
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[10px] text-[var(--color-text-muted)]',
        className
      )}
    >
      {children}
    </span>
  )
}

// --- Internal badge ---
export function InternalBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[10px] text-[var(--color-text-muted)]">
      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden>
        <rect x="1" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
        <path d="M2.5 4V2.5a1.5 1.5 0 013 0V4" stroke="currentColor" strokeWidth="1"/>
      </svg>
      Internal
    </span>
  )
}

// --- Credential badge ---
export function CredentialBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-subtle)] px-2.5 py-0.5 text-[10px] text-[var(--color-accent)]">
      ★ {label}
    </span>
  )
}

// --- Stack tag ---
export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[10px] text-[var(--color-text-muted)]">
      {label}
    </span>
  )
}

// --- Result badge ---
const resultStyles: Record<ResultBadgeType['variant'], string> = {
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export function ResultBadge({ label, variant, size = 'sm' }: ResultBadgeType & { size?: 'sm' | 'lg' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-500',
        size === 'lg' ? 'px-3 py-1 text-xs' : 'px-2.5 py-0.5 text-[11px]',
        resultStyles[variant]
      )}
    >
      {label}
    </span>
  )
}
