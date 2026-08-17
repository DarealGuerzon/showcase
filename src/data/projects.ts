import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'signflow',
    title: 'SignFlow: Document Approval Platform',
    type: 'internal-tool',
    typeLabel: 'Internal tool · Full-stack',
    description:
      'BPM-style approval workflow system — submission wizard, multi-approver chains, department routing, PDF signature placement, realtime notifications. Sole builder, 0→production in 2 months, iterated across three stakeholder revision rounds.',
    decisions: [
      'OAuth PKCE flow stored in cookies, not localStorage — so the server-side callback can read the code verifier. This is the detail that breaks most OAuth+SSR implementations.',
      '7-table schema with 25 row-level-security policies and an is_admin() helper — authorization lives in the database, not scattered through route handlers.',
      'Rewrote the PDF viewer from an iframe embed to react-pdf for coordinate-accurate signature placement; root-caused an SSR crash (DOMMatrix undefined server-side) to the SSR/CSR boundary and fixed it with a client-only dynamic import instead of papering over it.',
      'Every mutation double-invalidates: revalidatePath for the server cache, React Query invalidation for the client — the two caches never drift.',
    ],
    stack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Supabase (Auth/Postgres/Storage/Realtime)', 'TanStack Query', 'react-pdf', 'Brevo'],
    results: [
      { label: '0→production in 2 months', variant: 'green' },
      { label: '3 stakeholder revision rounds', variant: 'purple' },
    ],
    isInternal: true,
    isFeatured: true,
    codePrivateNote: 'Code private — architecture writeup available on request.',
  },
  {
    id: 'reporting-platform',
    title: 'Multi-Tenant Reporting Platform',
    type: 'internal-tool',
    typeLabel: 'Internal tool · Full-stack',
    description:
      'Reporting platform serving two audiences from one codebase — a read-only client view and a PIN-gated internal admin view. Integrates three third-party ad APIs with three different auth models, normalized into one typed contract.',
    decisions: [
      'Three ad APIs, three different auth models and response shapes. Normalized all three into one typed contract at the integration boundary — branching per-provider through the UI means every new feature needs provider-specific code paths.',
      "Replaced framework-default caching with Redis stale-while-revalidate — then iterated it four times: request deduplication, stale-snapshot responses on concurrent cache misses so misses don't stampede the origin, a concurrency-capped cron prewarm, and explicit env guards after a startup edge case.",
      'Serverless concurrency required explicit connection pool caps and hard-capped query patterns — default one-connection-per-request exhausts the pool under cold-start load, and an unbounded query blows the request budget.',
      'An AI report-summary feature needed to degrade, not break. Explicitly tested and shipped the database-failure path — renders "no summary yet" instead of a broken page, rather than assuming only the happy path matters.',
      'Internal admin view and client view in one codebase required a PIN gate that fails closed — the app refuses to boot without the hash configured, no dev fallback — rather than a route convention that erodes under deadline pressure.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Drizzle ORM', 'Supabase Postgres', 'Upstash Redis', 'Zod', 'Pino', 'Vitest'],
    results: [
      { label: 'Dual-audience from one codebase', variant: 'green' },
      { label: '3 ad API integrations', variant: 'purple' },
    ],
    isInternal: true,
    codePrivateNote: 'Code private — architecture writeup available on request.',
  },
  {
    id: 'internal-automation',
    title: 'Internal Automation Platform',
    type: 'internal-tool',
    typeLabel: 'Internal tool · Full-stack',
    description:
      'Multi-user internal platform automating 10 recurring workflows (~90% manual-work reduction, 10–20 daily active users). My role evolved from feature builder to the person responsible for reliability and releases.',
    decisions: [
      'Cron jobs and interactive users were sharing one API identity, breaking attribution and rate-limit accounting under concurrent load. Isolated cron onto its own identity context via AsyncLocalStorage — then added per-identity quota instrumentation so the failure mode is visible next time instead of a silent 403.',
      'Designed a 5-layer fallback chain for critical reads (DB mirror → API → build-time seed → health probe) and fixed a code path where an upstream API error could silently wipe data — it now fails loudly instead.',
      'An upload endpoint had no type or size validation; a rendering path was XSS-vulnerable. Fixed both proactively — MIME allow-listing, upload caps, sanitized output — not just the one flagged path.',
      'A 3,404-line monolithic view was too large to review safely. Split into a 975-line component plus an extracted data-fetching hook — no full rewrite, no regressed consumers.',
      'No enforced review gate meant any change could reach production. Added required PR checks (typecheck/lint/dependency audit) and a CODEOWNERS approval gate — conventions erode under deadline pressure; the gate does not.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'GitHub API', 'Cron', 'AsyncLocalStorage'],
    results: [
      { label: '90% manual work reduction', variant: 'green' },
      { label: '10–20 daily active users', variant: 'purple' },
      { label: '3,404 → 975 line refactor', variant: 'amber' },
    ],
    isInternal: true,
    codePrivateNote: 'Code private — sanitized architecture teardown coming soon.',
  },
  {
    id: 'motivex',
    title: 'Motivex: Smart Kettlebell Companion',
    type: 'iot',
    typeLabel: 'IoT · Hardware · Fitness',
    description:
      'Hardware-integrated fitness product: Arduino-connected smart kettlebell with a web dashboard for weight tracking. Took an AI-scaffolded base to a shipped, branded product — including a post-launch bug fix in the live Arduino → dashboard data pipeline.',
    stack: ['Vite', 'React 18', 'TypeScript', 'Supabase', 'Arduino', 'shadcn/ui'],
    results: [
      { label: 'Shipped hardware + software', variant: 'green' },
    ],
    codePrivateNote: 'TODO(daryl): Live URL pending — check Cloudflare Pages deployment.',
  },
  {
    id: 'poultry-guard',
    title: 'PoultryGuard — real-time IoT monitoring',
    type: 'iot',
    typeLabel: 'IoT · AI/ML · Thesis project',
    description:
      'Real-time thermal imaging + YOLO-based object detection to identify early signs of heat stress in poultry. Achieved 90% detection reliability, reduced mortality risk by 50% in pilot tests, and cut inference latency from ~5s to 2s.',
    stack: ['Python', 'YOLO', 'OpenCV', 'Arduino', 'IoT Cloud', 'C++'],
    results: [
      { label: '90% detection accuracy', variant: 'green' },
      { label: '50% mortality risk reduction', variant: 'purple' },
    ],
    credential: 'PhilDev & DICT Ideathon Finalist',
  },
]

export const featuredProject = projects.find((p) => p.isFeatured)
export const otherProjects = projects.filter((p) => !p.isFeatured)
