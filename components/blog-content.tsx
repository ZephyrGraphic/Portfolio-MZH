"use client"

import { useState, useEffect } from "react"
import MarkdownContent from "./markdown-content"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="animate-pulse bg-gray-800/50 h-96 rounded-md"></div>
  }

  return <MarkdownContent content={content} />
}

