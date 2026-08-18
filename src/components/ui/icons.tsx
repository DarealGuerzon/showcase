import { cn } from '@/lib/utils'

// Authored line-icon set — one consistent grid (24), stroke 1.5, round caps,
// currentColor. Replaces emoji/glyph placeholders so icons inherit text color
// and theme like a real icon system.

type IconProps = {
  className?: string
  'aria-hidden'?: boolean
}

const base = 'h-[1em] w-[1em]'

function Svg({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(base, className)}
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </Svg>
  )
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.4 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.4-3.4-8.5S9.7 5.9 12 3.5Z" />
    </Svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  )
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 12a7 7 0 0 1-9.9 6.4L4 20l1.6-6.1A7 7 0 1 1 20 12Z" />
    </Svg>
  )
}

export function CapIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4.5 21 9l-9 4.5L3 9l9-4.5Z" />
      <path d="M7 11v4.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3V11" />
    </Svg>
  )
}

// --- Service icons (map from Service.icon) ---

export function LayoutIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M9 9.5v10" />
    </Svg>
  )
}

export function RobotIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4.5" y="8" width="15" height="11" rx="2.5" />
      <path d="M12 4.5v3.5M8.5 13h.01M15.5 13h.01M9.5 16.5h5" />
      <path d="M4.5 12H3M21 12h-1.5" />
    </Svg>
  )
}

export function BrowserIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 8.5h17M6.5 6.5h.01M9 6.5h.01" />
    </Svg>
  )
}

export const serviceIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  layout: LayoutIcon,
  robot: RobotIcon,
  browser: BrowserIcon,
}
