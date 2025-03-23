"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true)
      } else {
        // Scrolling up
        setHidden(false)
      }

      // Update last scroll position
      setLastScrollY(currentScrollY)

      // Set scrolled state for styling
      if (currentScrollY > 50) {
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
      if (currentScrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"
      } ${hidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          {/* Logo - only visible on mobile */}
          <div className="md:hidden absolute left-4">
            <Link href="/" className="text-xl font-bold text-cyan-400 glitch-text">
              MZH
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex space-x-1 bg-black/40 backdrop-blur-sm border border-cyan-500/30 p-1 rounded-md mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.isPage ? `/${item.id}` : `#${item.id}`}
                className={`text-gray-300 hover:text-cyan-400 transition-colors relative group px-4 py-2 ${
                  activeSection === item.id
                    ? "bg-cyan-900/40 text-cyan-400 rounded-sm border-t border-r border-cyan-500/50"
                    : "hover:bg-cyan-900/20"
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                <span className="uppercase tracking-wider text-sm font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-cyan-500/30">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.isPage ? `/${item.id}` : `#${item.id}`}
                className={`text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm font-medium p-2 ${
                  activeSection === item.id
                    ? "bg-cyan-900/40 text-cyan-400 rounded-sm border-l-2 border-cyan-500 pl-3"
                    : "hover:bg-cyan-900/20"
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

