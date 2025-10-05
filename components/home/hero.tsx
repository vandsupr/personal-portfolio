"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { useState, useEffect } from "react";

const PATTERNS = Array.from({ length: 10 }, (_, i) => `/patterns/pattern-${i + 1}.svg`);

export function Hero() {
  const [backgroundPattern, setBackgroundPattern] = useState<string | null>(null);

  useEffect(() => {
    const getRandomPattern = () =>
      PATTERNS[Math.floor(Math.random() * PATTERNS.length)];

    setBackgroundPattern(getRandomPattern());
    const intervalId = setInterval(() => {
      setBackgroundPattern(getRandomPattern());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: backgroundPattern ? `url(${backgroundPattern})` : 'none',
        backgroundSize: '120px 120px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Personal Portfolio
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="inline-block rounded-lg bg-background/70 px-3 py-1.5 backdrop-blur-sm">
              Hi, I'm Fiantata
            </span>
          </h1>

          <p className="mb-8 text-base text-muted-foreground sm:text-lg md:text-xl">
            <span className="inline-block rounded-lg bg-background/70 px-3 py-1.5 backdrop-blur-sm">
              I'm passionate about creating meaningful impact through AI and data
            </span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <SocialLink
              href={SITE_CONFIG.author.github}
              label="GitHub"
              icon={<Github className="h-6 w-6" />}
            />
            <SocialLink
              href={SITE_CONFIG.author.linkedin}
              label="LinkedIn"
              icon={<Linkedin className="h-6 w-6" />}
            />
            <SocialLink
              href={`mailto:${SITE_CONFIG.author.email}`}
              label="Email"
              icon={<Mail className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable accessible social link
const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded"
    aria-label={label}
  >
    {icon}
  </a>
);