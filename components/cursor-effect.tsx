"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsHidden(false)
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y) as HTMLElement
      if (target) {
        const computedStyle = window.getComputedStyle(target)
        setIsPointer(computedStyle.cursor === "pointer")
      }
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mousemove", updateCursorStyle)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mousemove", updateCursorStyle)
    }
  }, [position.x, position.y])

  if (isHidden) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full transition-all duration-100 ${
            isPointer ? "w-8 h-8 bg-transparent border-2 border-cyan-400" : "w-5 h-5 bg-cyan-400"
          }`}
        />
      </div>
    </>
  )
}

