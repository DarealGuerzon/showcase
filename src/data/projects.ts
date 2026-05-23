import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'seo-buddy',
    title: 'SEO Buddy — internal automation platform',
    type: 'internal-tool',
    typeLabel: 'Internal tool · Full-stack',
    description:
      'Inherited a vibe-coded Next.js 14 codebase and brought it to production standard. Refactored 3,000–5,000 LOC into reusable components, secured API endpoints, and built keyword rank tracking, web scraping, and post-deployment checks — serving 10–20 team members daily.',
    stack: ['Next.js 14', 'App Router', 'TypeScript', 'Supabase', 'Redis', 'Google APIs', 'Claude AI', 'Vercel'],
    results: [
      { label: '90% workload reduction', variant: 'green' },
      { label: '10–20 daily active users', variant: 'purple' },
    ],
    isInternal: true,
    isFeatured: true,
  },
  {
    id: 'supabase-migration',
    title: 'Database migration + RLS architecture',
    type: 'devops',
    typeLabel: 'Backend · Architecture',
    description:
      'Led full DB migration from ad-hoc Git files and Google Drive to Supabase. Designed schema from scratch, applied Row-Level Security policies, configured API usage monitoring, and established backend routing best practices.',
    stack: ['Supabase', 'PostgreSQL', 'RLS', 'REST APIs'],
    results: [{ label: 'Production-grade security', variant: 'green' }],
    isInternal: true,
  },
  {
    id: 'security-audit',
    title: 'Codebase security audit + Git strategy',
    type: 'devops',
    typeLabel: 'Security · DevOps',
    description:
      'Proactive audit that identified exposed API keys, flagged next-auth v5 beta risks in production, and enforced a full branching strategy (main → staging → dev → feature/fix/hotfix) with PR templates and GitHub branch protection rules.',
    stack: ['GitHub', 'CI/CD', 'next-auth', 'Branch protection'],
    results: [{ label: 'Full Git strategy shipped', variant: 'amber' }],
    isInternal: true,
  },
  {
    id: 'ga4-gtm',
    title: 'GA4 + GTM multi-client implementation',
    type: 'analytics',
    typeLabel: 'Analytics · Martech',
    description:
      'Configured GA4 and GTM from scratch across multiple client accounts — custom data layers, enhanced event tracking, pixel installs, and resolved broken legacy setups. Also trained interns and new hires on analytics troubleshooting.',
    stack: ['GA4', 'GTM', 'Meta Pixel', 'TikTok Pixel', 'Looker Studio', 'Custom data layers'],
    results: [{ label: 'Multiple client accounts', variant: 'purple' }],
  },
  {
    id: 'wordpress-clients',
    title: '7+ client WordPress sites',
    type: 'frontend',
    typeLabel: 'WordPress · Frontend',
    description:
      'Custom theme development, plugin customization, 12–15 new landing pages, and cross-browser fixes across 7+ active client sites. Standardized Elementor components reducing per-page build time significantly.',
    stack: ['WordPress', 'Elementor', 'PHP', 'Custom themes', 'CSS'],
    results: [{ label: '30% faster page builds', variant: 'amber' }],
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
