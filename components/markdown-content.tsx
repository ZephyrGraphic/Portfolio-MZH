"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      className="prose prose-invert prose-cyan max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="mt-8 mb-4 text-3xl font-bold text-white" {...props} />,
        h2: ({ node, ...props }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-white" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mt-6 mb-3 text-xl font-bold text-white" {...props} />,
        h4: ({ node, ...props }) => <h4 className="mt-4 mb-2 text-lg font-bold text-white" {...props} />,
        p: ({ node, ...props }) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
        a: ({ node, ...props }) => (
          <a
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => <ul className="mb-4 ml-6 list-disc text-gray-300" {...props} />,
        ol: ({ node, ...props }) => <ol className="mb-4 ml-6 list-decimal text-gray-300" {...props} />,
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="mb-4 border-l-4 border-cyan-500 pl-4 italic text-gray-400" {...props} />
        ),
        img: ({ node, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="rounded-md border border-cyan-500/30 my-6" alt={props.alt || ""} {...props} />
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline ? (
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto my-4">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          ) : (
            <code className="bg-gray-800 px-1.5 py-0.5 rounded text-cyan-400 font-mono text-sm" {...props}>
              {children}
            </code>
          )
        },
        table: ({ node, ...props }) => (
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full border-collapse text-sm" {...props} />
          </div>
        ),
        tr: ({ node, ...props }) => <tr className="border-b border-gray-700 m-0 p-0" {...props} />,
        th: ({ node, ...props }) => (
          <th className="border border-gray-700 px-4 py-2 text-left font-bold text-cyan-400 m-0 p-0" {...props} />
        ),
        td: ({ node, ...props }) => <td className="border border-gray-700 px-4 py-2 text-left m-0 p-0" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

