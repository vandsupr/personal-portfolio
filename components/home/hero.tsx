import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="container py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Personal Portfolio
        </div>

        <h1 className="mb-6 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I'm Fiantata
        </h1>

        <p className="mb-8 text-base text-muted-foreground text-pretty sm:text-lg md:text-xl">
          I'm passionate about creating meaningful impact through AI and data
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href={SITE_CONFIG.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={SITE_CONFIG.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.author.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
