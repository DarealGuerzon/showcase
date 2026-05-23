import { Service, SkillGroup } from '@/types'

export const services: Service[] = [
  {
    id: 'analytics',
    icon: 'chart-dots',
    title: 'GA4 + GTM setup',
    price: 'from $150',
    description: 'Custom data layers, event tracking, pixel installs, and broken setup fixes across any stack.',
  },
  {
    id: 'automation',
    icon: 'robot',
    title: 'n8n automation',
    price: 'from $120 / workflow',
    description: 'Lead routing, CRM syncs, Slack alerts — any repetitive process turned into a clean workflow.',
  },
  {
    id: 'fullstack',
    icon: 'code',
    title: 'Full-stack dev',
    price: '$30–50 / hr',
    description: 'Next.js, Supabase, REST APIs, internal tools. Available for project work or part-time retainer.',
  },
  {
    id: 'wordpress',
    icon: 'browser',
    title: 'WordPress dev',
    price: 'from $80',
    description: 'Custom themes, plugin dev, landing pages, performance fixes, and Elementor builds.',
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
