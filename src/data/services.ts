import { Service, SkillGroup } from '@/types'

export const services: Service[] = [
  {
    id: 'analytics',
    icon: 'chart-dots',
    title: 'GA4 + GTM setup',
    engagement: 'Setup · Audit',
    description:
      'Reliable analytics you can actually trust. Proper event tracking, custom data layers, and conversion funnels that match how your business actually sells. I also fix legacy setups that look correct but quietly report wrong numbers.',
  },
  {
    id: 'automation',
    icon: 'robot',
    title: 'n8n automation',
    engagement: 'Project work',
    description:
      'Stop paying your team to copy-paste between tools. I map out the repetitive work eating their week, then build reliable n8n workflows that handle lead routing, CRM syncs, notifications, and reporting — quietly, in the background.',
  },
  {
    id: 'fullstack',
    icon: 'code',
    title: 'Full-stack dev',
    engagement: 'Project · Retainer',
    description:
      'Internal tools, dashboards, and client deliverables built with Next.js + Supabase. Comfortable taking over messy inherited codebases, shipping features end-to-end, and explaining technical decisions to non-technical stakeholders.',
  },
  {
    id: 'wordpress',
    icon: 'browser',
    title: 'WordPress dev',
    engagement: 'Project work',
    description:
      'Custom themes, fast landing pages, and the cleanup work most freelancers skip — plugin conflicts, broken pages, Core Web Vitals fixes, and Elementor templates your team can actually reuse.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js 14', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'WordPress'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Supabase', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Analytics',
    skills: ['GA4', 'GTM', 'Meta Pixel', 'TikTok Pixel', 'Custom data layers', 'Looker Studio'],
  },
  {
    category: 'DevOps',
    skills: ['Git', 'GitHub', 'Vercel', 'CI/CD', 'Jira'],
  },
  {
    category: 'Automation',
    skills: ['n8n', 'Webhooks', 'Arduino Cloud'],
  },
  {
    category: 'AI tools',
    skills: ['Claude Code', 'Cursor', 'Lovable'],
  },
]

export const stats = [
  { value: '90%', label: 'Manual workload cut' },
  { value: '5k+', label: 'Lines refactored' },
  { value: '7+', label: 'Client sites' },
]
