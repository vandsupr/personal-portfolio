import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import type { Project } from "@/lib/types"

export async function ProjectsGrid({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams
  const supabase = await createClient()

  let query = supabase.from("projects").select("*").order("created_at", { ascending: false })

  if (params.category && params.category !== "All") {
    query = query.eq("category", params.category)
  }

  const { data: projects } = await query

  if (!projects || projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">No projects found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: Project) => (
        <Card key={project.id} className="flex flex-col">
          <CardHeader>
            <div className="mb-2">
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <CardTitle className="text-balance">{project.title}</CardTitle>
            <CardDescription className="text-pretty">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech: string) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 5}
                </Badge>
              )}
            </div>

            {Object.keys(project.metrics).length > 0 && (
              <div className="space-y-1 rounded-lg bg-muted/50 p-3">
                {Object.entries(project.metrics)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key.replace(/_/g, " ")}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <Link href={`/projects/${project.slug}`}>
                Details
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            {project.github_url && (
              <Button asChild variant="ghost" size="sm">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            )}
            {project.demo_url && (
              <Button asChild variant="ghost" size="sm">
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
