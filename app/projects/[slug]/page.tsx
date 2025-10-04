import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: project } = await supabase.from("projects").select("*").eq("slug", slug).single()

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: project } = await supabase.from("projects").select("*").eq("slug", slug).single()

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <Badge variant="secondary" className="text-sm">
            {project.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(project.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{project.title}</h1>
        <p className="text-xl text-muted-foreground text-pretty">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github_url && (
            <Button asChild>
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.demo_url && (
            <Button asChild variant="outline">
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p className="leading-relaxed text-muted-foreground">{project.long_description || project.description}</p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Advanced machine learning algorithms for accurate predictions</li>
                <li>Scalable architecture handling large datasets efficiently</li>
                <li>Real-time data processing and analysis capabilities</li>
                <li>Interactive visualizations for insights discovery</li>
                <li>Comprehensive testing and validation procedures</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-foreground">Technical Approach</h3>
              <p className="leading-relaxed text-muted-foreground">
                The project leverages modern data science and engineering practices to deliver robust solutions. From
                data collection and preprocessing to model training and deployment, each phase is carefully designed to
                ensure optimal performance and reliability.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Metrics */}
          {Object.keys(project.metrics).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground capitalize">{key.replace(/_/g, " ")}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </a>
              )}
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
