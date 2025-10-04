export interface Project {
  id: string
  title: string
  slug: string
  description: string
  long_description?: string
  technologies: string[]
  github_url?: string
  demo_url?: string
  image_url?: string
  category: string
  featured: boolean
  metrics: Record<string, string>
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  image_url?: string
  reading_time?: number
  published: boolean
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  name: string
  email: string
  message: string
}
