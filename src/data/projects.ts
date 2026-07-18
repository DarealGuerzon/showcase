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
      "Replaced framework-default caching with Redis stale-while-revalidate — then iterated it four times after shipping: request deduplication, stale-snapshot responses on concurrent cache misses (so misses don't stampede the origin), a concurrency-capped cron prewarm, and explicit env guards after finding a startup edge case.",
      'DB snapshot fallback on upstream API failure — a flaky third-party API degrades the data\'s freshness, not the read path.',
      'Fail-fast env validation: the build fails on missing or malformed env vars, on purpose. Stops bad deploys before they exist.',
      'Rate limiting (Upstash) with its own cleanup cron, structured request-timing logs (Pino), unit-tested API-response transformers (Vitest), Suspense streaming + prefetch-on-hover so the shell renders before the data lands.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Drizzle ORM', 'Supabase Postgres', 'Upstash Redis', 'Pino', 'Vitest'],
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
      'Hardened uploads: MIME allow-lists, size caps, domain-restricted permissions.',
      'Own the release gate on a live team repo: CODEOWNERS review requirements, a PR-check pipeline (typecheck/lint/dependency audit), and sole authority on staging → main.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'GitHub API', 'Cron', 'AsyncLocalStorage'],
    results: [
      { label: '90% manual work reduction', variant: 'green' },
      { label: '10–20 daily active users', variant: 'purple' },
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
