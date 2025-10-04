import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SITE_CONFIG } from "@/lib/constants"

export function SkillsOverview() {
  const topSkills = Object.entries(SITE_CONFIG.skills).slice(0, 2)

  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground text-pretty sm:text-lg">
            Expertise across the AI and Big Data technology stack
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2">
          {topSkills.map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
