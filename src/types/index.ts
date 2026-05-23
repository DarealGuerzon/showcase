export type ProjectType =
  | 'internal-tool'
  | 'analytics'
  | 'automation'
  | 'fullstack'
  | 'frontend'
  | 'iot'
  | 'devops'

export interface ResultBadge {
  label: string
  variant: 'green' | 'purple' | 'amber'
}

export interface Project {
  id: string
  title: string
  type: ProjectType
  typeLabel: string
  description: string
  stack: string[]
  results: ResultBadge[]
  isInternal?: boolean
  isFeatured?: boolean
  credential?: string
  liveUrl?: string
  repoUrl?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  price: string
  description: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
