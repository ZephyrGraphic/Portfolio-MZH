import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"
import dynamic from "next/dynamic"

// Dynamically import the MarkdownContent component to avoid SSR issues
const MarkdownContent = dynamic(() => import("@/components/markdown-content"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-800/50 h-96 rounded-md"></div>,
})

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

      <PageTransition>
        <article className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Blog
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            {post.image && (
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <img
                  src={post.image || "/placeholder.svg?height=400&width=800"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>

              {post.readingTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime} menit membaca</span>
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 mr-1" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="prose prose-invert prose-cyan max-w-none">
              <MarkdownContent content={post.content} />
            </div>
          </div>
        </article>
      </PageTransition>
    </main>
  )
}

