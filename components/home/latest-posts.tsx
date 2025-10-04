import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import type { BlogPost } from "@/lib/types"

export async function LatestPosts() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(3)

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mb-8 text-center sm:mb-10 md:mb-12">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">Latest Insights</h2>
        <p className="text-base text-muted-foreground text-pretty sm:text-lg">
          Thoughts, tutorials, and deep dives into AI and Big Data
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: BlogPost) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <CardTitle className="text-balance">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center sm:mt-10 md:mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}