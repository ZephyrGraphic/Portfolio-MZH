import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
  tags?: string[]
  readingTime?: string
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Ensure the directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.log("Blog directory does not exist, creating it...")
      fs.mkdirSync(postsDirectory, { recursive: true })
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    
    // Track slugs to avoid duplicates
    const slugsSet = new Set<string>()
    const allPostsData = fileNames
      .filter((fileName) => {
        return fileName.endsWith(".mdx") || fileName.endsWith(".md")
      })
      .map((fileName) => {
        // Remove ".mdx" or ".md" from file name to get slug
        const slug = fileName.replace(/\.(mdx|md)$/, "")

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        // Calculate reading time
        const stats = readingTime(content)
        const readingTimeText = Math.ceil(stats.minutes)

        // Combine the data with the slug
        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString().split("T")[0],
          excerpt: data.excerpt || "",
          content,
          image: data.image || null,
          tags: data.tags || [],
          readingTime: `${readingTimeText}`,
        }
      })
      .filter(post => {
        // Check if we've seen this slug before
        if (slugsSet.has(post.slug)) {
          return false // Skip this post
        }
        slugsSet.add(post.slug)
        return true
      })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error getting all posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Try both .mdx and .md extensions
    let fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`)

      if (!fs.existsSync(fullPath)) {
        return null
      }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)
    const readingTimeText = Math.ceil(stats.minutes)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      content,
      image: data.image || null,
      tags: data.tags || [],
      readingTime: `${readingTimeText}`,
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
}

