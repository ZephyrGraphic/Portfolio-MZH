"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["about", "education", "experience", "skills", "statistics"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }

      // If we're at the top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { id: "about", label: "About", isPage: false },
    { id: "education", label: "Education", isPage: true },
    { id: "experience", label: "Experience", isPage: true },
    { id: "skills", label: "Skills", isPage: true },
    { id: "statistics", label: "Statistics", isPage: false },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { id: string; isPage: boolean }) => {
    if (!item.isPage) {
      e.preventDefault()
      const element = document.getElementById(item.id)
      if (element) {
        // Scroll to the element with offset for the navbar
        const yOffset = -80
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
        setActiveSection(item.id)
        setIsMenuOpen(false)
      }
    } else {
      // For pages, let the link handle navigation
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-cyan-400 glitch-text">
          MZH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.isPage ? `/${item.id}` : `#${item.id}`}
              className={`text-gray-300 hover:text-cyan-400 transition-colors relative group ${
                activeSection === item.id ? "text-cyan-400" : ""
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              <span className="uppercase tracking-wider text-sm font-medium">{item.label}</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-cyan-500/30">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.isPage ? `/${item.id}` : `#${item.id}`}
                className={`text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm font-medium ${
                  activeSection === item.id ? "text-cyan-400" : ""
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

