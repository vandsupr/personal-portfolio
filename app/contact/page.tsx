import type { Metadata } from "next"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact/contact-form"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact | AI & Big Data Portfolio",
  description: "Get in touch for collaborations, opportunities, or just to say hello",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">Get in Touch</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
          I enjoy connecting with people who share curiosity about AI and data
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.author.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {SITE_CONFIG.author.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href={SITE_CONFIG.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/50"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my code and projects</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/50"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect professionally</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/50"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-sm text-muted-foreground">Follow for updates</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
