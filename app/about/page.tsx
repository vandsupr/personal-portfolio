import type { Metadata } from "next";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, experience, and journey in AI and Big Data",
};

// Helper: Paragraph formatter for justified text with proper spacing
const JustifiedParagraph = ({ children }: { children: string }) => (
  <p className="text-justify text-muted-foreground leading-relaxed">{children}</p>
);

export default function AboutPage() {
  return (
    <div className="container py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center sm:mb-14 md:mb-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          I explore how AI and data can shape better decisions and smarter systems.
        </p>
      </header>

      {/* Personal Story with Profile Photo */}
      <section className="mb-12 sm:mb-14 md:mb-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
          {/* Profile Info */}
          <div className="flex-shrink-0 text-center">
            <div className="overflow-hidden rounded-full border">
              <img
                src="/images/profile.png"
                alt="Fiantata Supriadi"
                className="h-56 w-56 object-cover"
              />
            </div>
            <h3 className="mt-3 text-2xl font-semibold">Fiantata Supriadi</h3>
            <p className="text-sm text-muted-foreground sm:text-base">AI & Big Data Enthusiast</p>
          </div>

          {/* Story Card */}
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle className="text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <JustifiedParagraph>
                My journey began when I first discovered how powerful artificial intelligence could be. I was a high school student who loved physics, mathematics, and technology. When ChatGPT appeared in 2022, I was fascinated by how a machine could understand and respond like a human. That moment changed how I see learning and innovation. I started to explore how data and algorithms shape the way we solve problems and make decisions. Now, I am focusing on building small projects, experimenting with AI models, and learning how to turn ideas into useful tools for people and businesses. I believe that every small step in understanding data brings me closer to creating technology that truly matters.
              </JustifiedParagraph>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-12 sm:mb-14 md:mb-16">
        <header className="mb-6 sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Education & Certifications</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            My academic background and professional certifications.
          </p>
        </header>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>High School Diploma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>SMAN 2 PURWOREJO</p>
              <p>2022–2025</p>
              <p className="mt-3 leading-relaxed">
                Focused on science and mathematics, laying the foundation for my interest in technology and data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Google Data Analytics Specialization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>Coursera</p>
              <p>Jul 8, 2025</p>
              <p className="mt-3 leading-relaxed">
                Comprehensive program covering data cleaning, analysis, visualization, and R programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 
        Resume section is intentionally commented out for now.
        Uncomment and implement when resume.pdf is ready.
      */}
    </div>
  );
}