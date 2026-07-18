import { Service, SkillGroup } from '@/types'

export const services: Service[] = [
  {
    id: 'internal-tools',
    icon: 'layout',
    title: 'Internal Tools & Dashboards',
    engagement: 'Project · Retainer',
    description:
      'Custom internal tools your team actually uses — approval workflows, admin panels, client portals, reporting dashboards. Next.js + Supabase, with auth, row-level security, and a handoff doc. Built to still work on day 90.',
  },
  {
    id: 'automation',
    icon: 'robot',
    title: 'Workflow Automation',
    engagement: 'Project work',
    description:
      'Ops automation with n8n and custom code — email triage and routing, approval chains, data syncs between your SaaS tools, scheduled report generation, webhook integrations.',
  },
  {
    id: 'wordpress',
    icon: 'browser',
    title: 'WordPress Development',
    engagement: 'Project work',
    description:
      'Custom themes, fast landing pages, and the cleanup work most freelancers skip — plugin conflicts, broken pages, Core Web Vitals fixes, and Elementor templates your team can actually reuse.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core',
    skills: ['TypeScript', 'React 18/19', 'Next.js 14–16 (App Router)', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Data & Backend',
    skills: ['Supabase (Auth/Postgres/Storage/Realtime)', 'PostgreSQL + row-level security', 'Drizzle ORM', 'Redis/Upstash', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Reliability',
    skills: ['Vitest', 'Pino structured logging', 'Rate limiting', 'Caching strategy (SWR/dedup/prewarm)', 'CI/CD', 'GitHub (CODEOWNERS, branch protection, release management)', 'Vercel'],
  },
  {
    category: 'Automation',
    skills: ['n8n', 'Webhooks', 'Cron', 'Arduino/IoT'],
  },
  {
    category: 'AI tooling',
    skills: ['Claude Code', 'Cursor', 'Lovable'],
  },
]

export const stats = [
  { value: '90%', label: 'Manual workload cut' },
  { value: '5k+', label: 'Lines refactored' },
  { value: '7+', label: 'Client sites' },
]
