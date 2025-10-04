import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).single()

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).single()

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-3xl">
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            {post.reading_time && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time} min read</span>
              </div>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{post.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <Card>
          <CardContent className="prose prose-sm max-w-none p-8 dark:prose-invert lg:prose-base">
            <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
          </CardContent>
        </Card>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Continue Reading</h2>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
