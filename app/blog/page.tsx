import type { Metadata } from "next"
import { Suspense } from "react"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogFilter } from "@/components/blog/blog-filter"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and thoughts on AI, Machine Learning, and Big Data",
}

export default function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">Blog</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
          I share simple thoughts about AI data and the world of digital intelligence
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8">
        <BlogFilter />
      </div>

      {/* Blog Grid */}
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

function BlogGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <Skeleton className="mb-4 h-6 w-24" />
            <Skeleton className="mb-2 h-8 w-full" />
            <Skeleton className="mb-4 h-20 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
