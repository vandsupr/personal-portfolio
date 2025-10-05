import type { Metadata } from "next";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Get in touch for collaborations, opportunities, or just to say hello.",
};

// Reusable contact item component
const ContactItem = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="font-medium">{label}</p>
      {children}
    </div>
  </div>
);

// Reusable social link component
const SocialLink = ({
  href,
  icon: Icon,
  platform,
  description,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  platform: string;
  description: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-muted/50"
  >
    <Icon className="h-5 w-5 text-muted-foreground" />
    <div>
      <p className="font-medium">{platform}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </a>
);

export default function ContactPage() {
  const { email, github, linkedin, twitter } = SITE_CONFIG.author;

  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          I enjoy connecting with people who share curiosity about AI and data.
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Information & Social Links */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ContactItem icon={Mail} label="Email">
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {email}
                </a>
              </ContactItem>

              <ContactItem icon={MapPin} label="Location">
                <p className="text-sm text-muted-foreground">Indonesia</p>
              </ContactItem>

              <ContactItem icon={Phone} label="Response Time">
                <p className="text-sm text-muted-foreground">Usually within 24–48 hours</p>
              </ContactItem>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <SocialLink
                href={github}
                icon={Github}
                platform="GitHub"
                description="View my code and projects"
              />
              <SocialLink
                href={linkedin}
                icon={Linkedin}
                platform="LinkedIn"
                description="Connect professionally"
              />
              <SocialLink
                href={twitter}
                icon={Twitter}
                platform="Twitter"
                description="Follow for updates"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}