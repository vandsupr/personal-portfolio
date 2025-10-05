import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technical Skills",
  description: "Technical skills and expertise in AI, Machine Learning, and Big Data technologies.",
};

// Reusable skill item component
const SkillItem = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

// Reusable badge group component
const BadgeGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="mb-3 font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

// Reusable learning card component
const LearningCard = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
    <h4 className="mb-2 font-semibold">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default function SkillsPage() {
  const { skills } = SITE_CONFIG;

  return (
    <div className="container py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center sm:mb-14 md:mb-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Technical Skills
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          I build intelligent tools powered by data, machine learning, and analytics.
        </p>
      </header>

      {/* Core Skills Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {skillList.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Competencies */}
      <section className="mt-12 sm:mt-14 md:mt-16">
        <header className="mb-6 text-center sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Additional Competencies</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Other tools and technologies I work with.
          </p>
        </header>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              <BadgeGroup
                title="Development Tools"
                items={["VS Code", "Jupyter", "Git", "GitHub", "Docker"]}
              />
              <BadgeGroup
                title="Data Visualization"
                items={["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"]}
              />
              <BadgeGroup
                title="Soft Skills"
                items={["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Adaptability"]}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Continuous Learning */}
      <section className="mt-12 sm:mt-14 md:mt-16">
        <header className="mb-6 text-center sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Continuous Learning</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Technologies and skills I'm currently exploring.
          </p>
        </header>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
              <LearningCard
                title="Deep Learning"
                description="Advanced neural networks and architectures"
              />
              <LearningCard
                title="MLOps"
                description="Model deployment and monitoring"
              />
              <LearningCard
                title="Real-time Analytics"
                description="Stream processing with Kafka and Flink"
              />
              <LearningCard
                title="LLMs"
                description="Large Language Models and applications"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}