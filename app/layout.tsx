import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MusicPlayer from "@/components/music-player"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M Z Haikal Hamdani | Portfolio",
  description: "Personal portfolio showcasing skills in programming, data analysis, cybersecurity, and game modding",
  keywords: "portfolio, web development, programming, data analysis, cybersecurity, game modding",
  authors: [{ name: "M Z Haikal Hamdani" }],
  creator: "M Z Haikal Hamdani",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'