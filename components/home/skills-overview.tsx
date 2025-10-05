import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SITE_CONFIG } from "@/lib/constants";

// Reusable skill item (sama seperti di /skills)
const SkillItem = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

export function SkillsOverview() {
  // Ambil 2 kategori pertama dari konfigurasi
  const topSkillCategories = Object.entries(SITE_CONFIG.skills).slice(0, 2);

  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        <header className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Expertise across the AI and Big Data technology stack.
          </p>
        </header>

        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2">
          {topSkillCategories.map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/skills">View All Skills</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}