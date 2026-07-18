export type ProjectType =
  | 'internal-tool'
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
  decisions?: string[]
  stack: string[]
  results: ResultBadge[]
  isInternal?: boolean
  isFeatured?: boolean
  credential?: string
  liveUrl?: string
  repoUrl?: string
  codePrivateNote?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  engagement: string
  description: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
