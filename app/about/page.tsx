import type { Metadata } from "next"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About | AI & Big Data Portfolio",
  description: "Learn more about my background, experience, and journey in AI and Big Data",
}

export default function AboutPage() {
  return (
    <div className="container py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-12 text-center sm:mb-14 md:mb-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">About Me</h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
          I explore how AI and data can shape better decisions and smarter systems
        </p>
      </div>

      {/* Personal Story */}
      <section className="mb-12 sm:mb-14 md:mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-justify">
            <p>
              My journey started from a simple spark of curiosity about how machines can think I was fascinated by ChatGPT and the way data reveals the unseen patterns of the world That moment changed how I see technology and its potential to shape the future Now I am learning to combine AI and Big Data to create something meaningful for people and for the world ahead.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Education & Certifications */}
      <section className="mb-12 sm:mb-14 md:mb-16">
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Education & Certifications</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>High School Diploma</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">SMAN 2 PURWOREJO</p>
              <p className="text-sm text-muted-foreground">2022-2025</p>
              <p className="mt-3 text-sm leading-relaxed">
                Focused on science and mathematics, laying the foundation for my interest in technology and data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Google Data Analytics Specialization.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Coursera</p>
              <p className="text-sm text-muted-foreground">Jul 8, 2025</p>
              <p className="mt-3 text-sm leading-relaxed">
                Comprehensive program covering data cleaning, analysis, visualization, and R programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Experience */}
      {/*
        Download Resume
        <section className="text-center">
          <Card className="inline-block">
            <CardContent className="flex items-center gap-4 p-6">
              <div>
                <h3 className="mb-1 text-lg font-semibold">Download My Resume</h3>
                <p className="text-sm text-muted-foreground">Get a detailed overview of my experience and skills</p>
              </div>
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </CardContent>
          </Card>
        </section>
      */}
    </div>
  )
}