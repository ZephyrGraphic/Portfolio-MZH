import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MusicPlayer from "@/components/music-player";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://mzh-level-up.vercel.app"
  ),
  title: "M Z Haikal Hamdani | Portfolio",
  description:
    "Portfolio pribadi yang menampilkan keahlian dalam pemrograman, analisis data, keamanan siber, dan modifikasi game",
  keywords: [
    "portfolio, web development, programming, data analysis, cybersecurity, game modding, pengembangan web, pemrograman, analisis data, keamanan siber, modifikasi game, developer Indonesia, programmer Indonesia, frontend developer, backend developer, fullstack developer, UI/UX, React, Next.js, Tailwind CSS, cyberpunk",
    "MZH Portfolio",
    "MZH",
    "M Z Haikal Hamdani",
    "Haikal SI",
    "Haikal",
    "SI Haikal",
    "SI",
    "SI MZH",
    "SI M Z Haikal Hamdani",
    "Haikal Nusput",
    "Nusa Putra",
    "Nusa Putra Haikal",
    "Nusa Putra SI",
    "Nusa Putra MZH",
    "Nusa Putra M Z Haikal Hamdani",
    "SI24F",
    "SI24F Haikal",
    "SI24F MZH",
    "SI24F M Z Haikal Hamdani",
    "SI24F Nusa Putra",
    "SI24F Nusa Putra Haikal",
    "SI24F Nusa Putra MZH",
    "SI24F Nusa Putra M Z Haikal Hamdani",
  ],
  authors: [{ name: "M Z Haikal Hamdani" }],
  creator: "M Z Haikal Hamdani",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "M Z Haikal Hamdani | Portfolio",
    description:
      "Portfolio pribadi yang menampilkan keahlian dalam pemrograman, analisis data, keamanan siber, dan modifikasi game",
    siteName: "M Z Haikal Hamdani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Z Haikal Hamdani | Portfolio",
    description:
      "Portfolio pribadi yang menampilkan keahlian dalam pemrograman, analisis data, keamanan siber, dan modifikasi game",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
