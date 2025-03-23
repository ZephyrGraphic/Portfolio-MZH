"use client"

import { useEffect, useState } from "react"

// Hook to detect if the user prefers reduced motion
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const onChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", onChange)
    return () => {
      mediaQuery.removeEventListener("change", onChange)
    }
  }, [])

  return prefersReducedMotion
}

