"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const categories = ["All", "Machine Learning", "NLP", "Data Engineering", "Computer Vision"]

export function ProjectsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "All"

  const handleFilter = (category: string) => {
    if (category === "All") {
      router.push("/projects")
    } else {
      router.push(`/projects?category=${encodeURIComponent(category)}`)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={currentCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
