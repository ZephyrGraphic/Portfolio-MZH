"use client"

import { useEffect, useRef } from "react"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Grid properties
    const gridSize = 30
    const gridOpacity = 0.15
    const gridColor = "#00ffff"

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        // Vary opacity based on position and time
        const opacity = gridOpacity * (0.5 + 0.5 * Math.sin(y * 0.01 + time * 0.001))
        ctx.strokeStyle =
          gridColor +
          Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)

        // Vary opacity based on position and time
        const opacity = gridOpacity * (0.5 + 0.5 * Math.sin(x * 0.01 + time * 0.002))
        ctx.strokeStyle =
          gridColor +
          Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      time++
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}

