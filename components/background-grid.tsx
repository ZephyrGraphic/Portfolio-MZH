"use client"

import { useEffect, useRef } from "react"
import { useMobileDetection } from "@/hooks/use-mobile-detection"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobileDetection()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid properties - larger grid size on mobile for better performance
    const gridSize = isMobile ? 50 : 30
    const gridOpacity = isMobile ? 0.1 : 0.15 // Slightly reduced opacity on mobile
    const gridColor = "#00ffff"

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Reduce animation complexity on mobile
      const animationSpeed = isMobile ? 0.0005 : 0.001
      const animationIntensity = isMobile ? 0.3 : 0.5

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        // Vary opacity based on position and time - simpler calculation on mobile
        const opacity = gridOpacity * (0.5 + animationIntensity * Math.sin(y * 0.01 + time * animationSpeed))
        ctx.strokeStyle =
          gridColor +
          Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw vertical lines - skip some on mobile for performance
      const skipFactor = isMobile ? 2 : 1
      for (let x = 0; x < canvas.width; x += gridSize * skipFactor) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)

        // Vary opacity based on position and time
        const opacity = gridOpacity * (0.5 + animationIntensity * Math.sin(x * 0.01 + time * animationSpeed * 2))
        ctx.strokeStyle =
          gridColor +
          Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Slower time increment on mobile
      time += isMobile ? 0.5 : 1
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}

