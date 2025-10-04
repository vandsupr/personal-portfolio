import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import type { BlogPost } from "@/lib/types"

export async function BlogGrid({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams
  const supabase = await createClient()

  let query = supabase.from("blog_posts").select("*").eq("published", true).order("created_at", { ascending: false })

  if (params.category && params.category !== "All") {
    query = query.eq("category", params.category)
  }

  const { data: posts } = await query

  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-base text-muted-foreground sm:text-lg">No blog posts found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: BlogPost) => (
        <Card key={post.id} className="flex flex-col">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <CardTitle className="text-balance">
              <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              {post.reading_time && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.reading_time} min read</span>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Button asChild variant="ghost" size="sm" className="h-auto p-0 text-primary hover:bg-transparent">
                <Link href={`/blog/${post.slug}`}>
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
