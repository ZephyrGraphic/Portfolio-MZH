"use client"

import { useEffect, useRef } from "react"
import Navbar from "./navbar"
import { Button } from "@/components/ui/button"
import { ArrowDown, Terminal } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as a percentage of the viewport
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      // Apply parallax effect to background
      heroRef.current.style.backgroundPosition = `${50 + x * 10}% ${50 + y * 10}%`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-0"></div>

      {/* Glitch lines */}
      <div className="absolute inset-0 glitch-lines opacity-20 pointer-events-none"></div>

      <Navbar />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1 border border-cyan-500 bg-black/50 rounded-full">
          <div className="flex items-center">
            <Terminal size={16} className="text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm">Portfolio // System.out</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-text text-white">M Z Haikal Hamdani</h1>

        <div className="h-8 mb-8">
          <TypeAnimation
            sequence={[
              "Mahasiswa Sistem Informasi",
              2000,
              "Programmer",
              1000,
              "Analis Data",
              1000,
              "Penggemar Keamanan Siber",
              1000,
              "Game Modder",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl text-cyan-400 font-light"
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>

        <div className="flex justify-center gap-4">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300">
            <a href="#about">Lihat Portfolio</a>
          </Button>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-cyan-950/30 text-cyan-400 font-bold px-6 py-2 rounded-full border border-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <a href="#contact">Hubungi Saya</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-cyan-400" />
        </a>
      </div>
    </section>
  )
}

