import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "Blog | M Z Haikal Hamdani",
  description: "Artikel dan tulisan tentang teknologi, pemrograman, dan pengalaman pribadi",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

      <PageTransition>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>

            <SectionHeading title="Blog" />

            <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Berbagi pemikiran, tutorial, dan pengalaman tentang teknologi, pemrograman, dan topik lainnya.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300 hover:translate-y-[-5px]">
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                        <img
                          src={post.image || "/placeholder.svg?height=200&width=400"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags?.map((tag) => (
                          <Badge key={tag} className="bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
                      <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                      <p className="text-gray-300">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2 text-white">Belum ada artikel</h3>
              <p className="text-gray-400">Artikel pertama akan segera hadir!</p>
            </div>
          )}
        </div>
      </PageTransition>
    </main>
  )
}

