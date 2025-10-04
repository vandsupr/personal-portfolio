import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import type { Project } from "@/lib/types"

export async function FeaturedProjects() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(3)

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">Featured Projects</h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Showcasing my best work in AI, Machine Learning, and Big Data
        </p>
      </div>

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
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {Object.keys(project.metrics).length > 0 && (
                <div className="mt-4 space-y-1">
                  {Object.entries(project.metrics)
                    .slice(0, 2)
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
                  View Details
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
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
