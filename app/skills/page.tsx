import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Skills | AI & Big Data Portfolio",
  description: "Technical skills and expertise in AI, Machine Learning, and Big Data technologies",
}

export default function SkillsPage() {
  return (
    <div className="container py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-12 text-center sm:mb-14 md:mb-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
          Technical Skills
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
          I build intelligent tools powered by data machine learning and analytics
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {Object.entries(SITE_CONFIG.skills).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Skills */}
      <section className="mt-12 sm:mt-14 md:mt-16">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Additional Competencies</h2>
          <p className="text-sm text-muted-foreground sm:text-base">Other tools and technologies I work with</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-3 font-semibold">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">Jupyter</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Matplotlib</Badge>
                  <Badge variant="secondary">Seaborn</Badge>
                  <Badge variant="secondary">Plotly</Badge>
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Communication</Badge>
                  <Badge variant="secondary">Teamwork</Badge>
                  <Badge variant="secondary">Critical Thinking</Badge>
                  <Badge variant="secondary">Adaptability</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Learning Journey */}
      <section className="mt-12 sm:mt-14 md:mt-16">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Continuous Learning</h2>
          <p className="text-sm text-muted-foreground sm:text-base">Technologies and skills I'm currently exploring</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <h4 className="mb-2 font-semibold">Deep Learning</h4>
                <p className="text-sm text-muted-foreground">Advanced neural networks and architectures</p>
              </div>

              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <h4 className="mb-2 font-semibold">MLOps</h4>
                <p className="text-sm text-muted-foreground">Model deployment and monitoring</p>
              </div>

              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <h4 className="mb-2 font-semibold">Real-time Analytics</h4>
                <p className="text-sm text-muted-foreground">Stream processing with Kafka and Flink</p>
              </div>

              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <h4 className="mb-2 font-semibold">LLMs</h4>
                <p className="text-sm text-muted-foreground">Large Language Models and applications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
