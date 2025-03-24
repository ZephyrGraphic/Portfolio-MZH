"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { Github, Mail, Instagram } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Scroll to the element with offset for the navbar
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const quickLinks = [
    { id: "about", label: "Tentang", isPage: false },
    { id: "education", label: "Pendidikan", isPage: true },
    { id: "experience", label: "Pengalaman", isPage: true },
    { id: "skills", label: "Keahlian", isPage: true },
    { id: "projects", label: "Proyek", isPage: true },
    { id: "blog", label: "Blog", isPage: true },
    { id: "chat", label: "AI Assistant", isPage: true },
    { id: "statistics", label: "Statistik", isPage: false },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-b from-black to-gray-900 py-12 border-t border-cyan-500/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">M Z Haikal Hamdani</h3>
              <p className="mb-4 max-w-md text-gray-300">
                Mahasiswa Sistem Informasi di Universitas Nusa Putra dengan keahlian dalam pemrograman, analisis data,
                keamanan siber, dan pengembangan game.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/ZephyrGraphic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:fenrisulfr696@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/zephyrax.zero"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@zephyr.7k"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaTiktok className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Tautan Cepat</h3>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={item.isPage ? `/${item.id}` : `#${item.id}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm"
                    onClick={(e) => (item.isPage ? null : handleQuickLinkClick(e, item.id))}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} M Z Haikal Hamdani. Hak Cipta Dilindungi.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

