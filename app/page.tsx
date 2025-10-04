import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { SkillsOverview } from "@/components/home/skills-overview"
import { LatestPosts } from "@/components/home/latest-posts"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <LatestPosts />
    </>
  )
}
