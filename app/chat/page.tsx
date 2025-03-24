"use client"

import { useRef, useState, useEffect } from "react"
import { useChat } from "ai/react"
import { Bot, Send, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration errors
  if (!mounted) return null

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

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-cyan-400">AI</span> Assistant
            </h1>
            <p className="text-gray-300 max-w-3xl">
              Tanyakan apa saja tentang saya, portfolio saya, atau proyek-proyek yang saya kerjakan. AI Assistant ini
              akan membantu menjawab pertanyaan Anda.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Chat dengan AI Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] overflow-y-auto mb-4 p-4 border border-cyan-500/20 rounded-md bg-black/30">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      <Bot size={48} className="mb-4 text-cyan-400 opacity-50" />
                      <p className="text-center">
                        Halo! Saya adalah AI Assistant M Z Haikal Hamdani. Tanyakan apa saja tentang saya atau portfolio
                        saya.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === "user"
                                ? "bg-cyan-900/40 text-white border border-cyan-500/30"
                                : "bg-gray-800/40 text-white border border-gray-700/30"
                            }`}
                          >
                            <div className="flex items-start mb-1">
                              <div
                                className={`rounded-full p-1 mr-2 ${
                                  message.role === "user"
                                    ? "bg-cyan-500/20 text-cyan-400"
                                    : "bg-gray-700/20 text-gray-400"
                                }`}
                              >
                                {message.role === "user" ? <User size={14} /> : <Bot size={14} />}
                              </div>
                              <span className="text-xs text-gray-400">
                                {message.role === "user" ? "Anda" : "AI Assistant"}
                              </span>
                            </div>
                            <div className="whitespace-pre-wrap">{message.content}</div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                  <Textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Tanyakan sesuatu..."
                    className="min-h-[80px] bg-gray-900/50 border-cyan-500/30 focus:border-cyan-400 text-white"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="self-end bg-cyan-500 hover:bg-cyan-600 text-black"
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner size="small" />
                        <span className="ml-2">Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-sm text-gray-400 text-center">
              <p>
                AI Assistant ini dilatih dengan informasi tentang M Z Haikal Hamdani dan portfolio-nya. Jawaban yang
                diberikan mungkin tidak selalu 100% akurat.
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}

