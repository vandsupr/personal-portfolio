"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const categories = ["All", "Tutorial", "Technical", "Deep Dive", "Case Study"]

export function BlogFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "All"

  const handleFilter = (category: string) => {
    if (category === "All") {
      router.push("/blog")
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`)
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
