import { Project } from '@/types'

export const projects: Project[] = [
  // Internal tools
  {
    id: 'signflow',
    title: 'SignFlow: Document Approval Platform',
    type: 'internal-tool',
    typeLabel: 'Internal tool · Full-stack',
    description:
      'BPM-style approval workflow system — submission wizard, multi-approver chains, department routing, PDF signature placement, realtime notifications. Sole builder, 0 to production in 2 months, iterated across three stakeholder revision rounds.',
    decisions: [
      'OAuth PKCE flow stored in cookies, not localStorage — so the server-side callback can read the code verifier. This is the detail that breaks most OAuth+SSR implementations.',
      '7-table schema with 25 row-level-security policies and an is_admin() helper — authorization lives in the database, not scattered through route handlers.',
      'Rewrote the PDF viewer from an iframe embed to react-pdf for coordinate-accurate signature placement; root-caused an SSR crash (DOMMatrix undefined server-side) to the SSR/CSR boundary and fixed it with a client-only dynamic import instead of papering over it.',
      'Every mutation double-invalidates: revalidatePath for the server cache, React Query invalidation for the client — the two caches never drift.',
    ],
    stack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Supabase (Auth/Postgres/Storage/Realtime)', 'TanStack Query', 'react-pdf', 'Brevo'],
    results: [
      { label: '0 to production in 2 months', variant: 'green' },
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
    screenshots: [
      '/images/ppc-01-client-overview.png',
      '/images/ppc-03-internal-edit.png',
      '/images/ppc-04-system-status.png',
      '/images/ppc-02-campaign-drilldown.png',
    ],
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
      'Multi-user internal platform automating 10 recurring workflows (~90% manual-work reduction, 10-20 daily active users). My role evolved from feature builder to the person responsible for reliability and releases.',
    screenshots: [
      '/images/seo-01-overview.png',
      '/images/seo-03-data-sources.png',
      '/images/seo-04-report-builder.png',
      '/images/seo-02-keywords.png',
    ],
    decisions: [
      'Cron jobs and interactive users were sharing one API identity, breaking attribution and rate-limit accounting under concurrent load. Isolated cron onto its own identity context via AsyncLocalStorage — then added per-identity quota instrumentation so the failure mode is visible next time instead of a silent 403.',
      'Designed a 5-layer fallback chain for critical reads (DB mirror, API, build-time seed, health probe) and fixed a code path where an upstream API error could silently wipe data — it now fails loudly instead.',
      'An upload endpoint had no type or size validation; a rendering path was XSS-vulnerable. Fixed both proactively — MIME allow-listing, upload caps, sanitized output — not just the one flagged path.',
      'A 3,404-line monolithic view was too large to review safely. Split into a 975-line component plus an extracted data-fetching hook — no full rewrite, no regressed consumers.',
      'No enforced review gate meant any change could reach production. Added required PR checks (typecheck/lint/dependency audit) and a CODEOWNERS approval gate — conventions erode under deadline pressure; the gate does not.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'GitHub API', 'Cron', 'AsyncLocalStorage'],
    results: [
      { label: '90% manual work reduction', variant: 'green' },
      { label: '10-20 daily active users', variant: 'purple' },
      { label: '3,404 to 975 line refactor', variant: 'amber' },
    ],
    isInternal: true,
    codePrivateNote: 'Code private — sanitized architecture teardown coming soon.',
  },

  // Full-stack / freelance
  {
    id: 'bentahub',
    title: 'BentaHub — POS for Small Retailers',
    type: 'fullstack',
    typeLabel: 'Full-stack · POS',
    description:
      'Point-of-sale system for small retailers — product management, real-time sales tracking, and automated daily sales reporting. Not a demo build: adopted by five friends running actual businesses for day-to-day sales and inventory.',
    screenshots: [
      '/images/bentahub-dashboard.png',
      '/images/bentahub-pos.png',
      '/images/bentahub-inventory.png',
      '/images/bentahub-reports.png',
      '/images/bentahub-customers.png',
    ],
    decisions: [
      'Automated end-of-day reporting removes manual reconciliation — store owners get a daily summary without touching a spreadsheet.',
      'Inventory sync is tied directly to POS transactions rather than a separate batch update, so stock counts never drift from what is actually sold.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    results: [
      { label: '70% less manual inventory tracking', variant: 'green' },
      { label: 'Adopted by 5 real businesses', variant: 'purple' },
    ],
  },
  {
    id: 'wedding-site',
    title: 'Wedding Website — Freelance Client Build',
    type: 'freelance',
    typeLabel: 'Freelance · Client project',
    description:
      'Wedding website built for a paying client — event details, guest information, and RSVP collection. Live for the actual wedding.',
    screenshots: [
      '/images/wedding-home.png',
      '/images/wedding-details.png',
      '/images/wedding-rsvp.png',
      '/images/wedding-story.png',
      '/images/wedding-registry.png',
    ],
    decisions: [
      'RSVP submissions trigger confirmation emails via Resend rather than a form-to-spreadsheet service — guests get an immediate, branded confirmation instead of silence after submitting.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Vercel'],
    results: [
      { label: 'Live for actual wedding', variant: 'green' },
    ],
  },
  {
    id: 'fitbuddy',
    title: 'FitBuddy — Personal Training App',
    type: 'fullstack',
    typeLabel: 'Full-stack · Personal project',
    description:
      'Responsive web app for workout programming and progress tracking — per-day training programs, progressive overload tracking across lifts, and per-user personalization. Fully built and in active use.',
    screenshots: [
      '/images/fitbuddy-today.png',
      '/images/fitbuddy-program.png',
      '/images/fitbuddy-library.png',
      '/images/fitbuddy-progress.png',
      '/images/fitbuddy-diet.png',
    ],
    decisions: [
      'Programs and progress are tracked per user, not off a single shared template — each user builds their own program and sees their own lift history.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    results: [
      { label: 'In active personal use', variant: 'green' },
    ],
  },

  // AI / automation
  {
    id: 'merge-pilot',
    title: 'Merge Pilot — GitHub PR Intelligence Agent',
    type: 'ai',
    typeLabel: 'AI agent · CLI tool',
    description:
      'CLI agent that manages GitHub PR workflows via natural language — summarizes open PRs, labels stale ones, and synthesizes new capabilities at runtime for instructions it has never seen before. Built as a take-home technical assessment.',
    screenshots: [
      '/images/pr-agent-queue.png',
      '/images/pr-agent-detail.png',
      '/images/pr-agent-readiness.png',
      '/images/pr-agent-automation.png',
      '/images/pr-agent-integrations.png',
    ],
    decisions: [
      'The self-learning loop is the differentiator — a novel instruction gets decomposed into a sequence of known API calls, tested, and registered as a named capability. A repeat of a similar instruction hits the registry instead of re-reasoning from scratch, which shows up as a measurable drop in API calls on repeat runs.',
    ],
    stack: ['Python', 'Claude (Anthropic SDK)', 'GitHub REST API', 'httpx', 'SQLite'],
    results: [
      { label: 'Self-learning capability registry', variant: 'green' },
    ],
  },
  {
    id: 'groundwork',
    title: 'Groundwork — Private RAG Assistant',
    type: 'ai',
    typeLabel: 'AI · RAG · Weekend project',
    description:
      "Retrieval-augmented generation for internal documents — a locally-run assistant that answers only from indexed sources, with no fallback to the model's general knowledge. Built in a weekend to explore RAG done properly.",
    screenshots: [
      '/images/rag-assistant-chat.png',
      '/images/rag-assistant-library.png',
      '/images/rag-assistant-ingestion.png',
      '/images/rag-assistant-scope.png',
      '/images/rag-assistant-analytics.png',
    ],
    decisions: [
      "A strict system prompt constrains the model to retrieved context only — if the indexed sources do not contain an answer, it says so rather than filling the gap from general training knowledge. That is the actual mechanism that makes \"doesn't hallucinate\" true instead of aspirational.",
    ],
    stack: ['LangChain', 'Pinecone', 'Python'],
    results: [
      { label: 'Answers only from indexed sources', variant: 'green' },
    ],
  },

  // IoT
  {
    id: 'poultry-guard',
    title: 'PoultryGuard — IoT Heat-Stress Detection',
    type: 'iot',
    typeLabel: 'IoT · AI/ML · Thesis project',
    description:
      'Real-time thermal imaging + YOLO-based object detection to identify early signs of heat stress in poultry, with dual software (SMS/email) and hardware (physical alarm) alerting. Validated on a pilot farm.',
    screenshots: [
      '/images/poultryguard-monitor.png',
      '/images/poultryguard-alerts.png',
      '/images/poultryguard-devices.png',
      '/images/poultryguard-map.png',
      '/images/poultryguard-trends.png',
    ],
    decisions: [
      'Cut inference latency from ~5s to ~2s — a heat-stress alert that arrives 5 seconds late is not meaningfully real-time for livestock care.',
      'Dual alert path (SMS/email plus a physical buzzer) exists because a caretaker not looking at their phone still needs to hear the alarm.',
    ],
    stack: ['Python', 'YOLO', 'OpenCV', 'Arduino', 'IoT Cloud', 'C++'],
    results: [
      { label: '90% detection accuracy', variant: 'green' },
      { label: '50% mortality risk reduction', variant: 'purple' },
      { label: '3x faster caretaker response', variant: 'amber' },
    ],
    credential: 'PhilDev & DICT Ideathon Finalist',
  },
  {
    id: 'motivex',
    title: 'Motivex: Smart Kettlebell Companion',
    type: 'iot',
    typeLabel: 'IoT · Hardware · Fitness',
    description:
      'Hardware-integrated fitness product: Arduino-connected smart kettlebell with a web dashboard for weight tracking. Took an AI-scaffolded base to a shipped, branded product — including a post-launch bug fix in the live Arduino to dashboard data pipeline.',
    stack: ['Vite', 'React 18', 'TypeScript', 'Supabase', 'Arduino', 'shadcn/ui'],
    results: [
      { label: 'Shipped hardware + software', variant: 'green' },
    ],
    codePrivateNote: 'TODO(daryl): Live URL pending — check Cloudflare Pages deployment.',
  },
]

export const featuredProject = projects.find((p) => p.isFeatured)
export const otherProjects = projects.filter((p) => !p.isFeatured)
