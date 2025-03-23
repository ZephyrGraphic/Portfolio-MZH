"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useMobileDetection } from "@/hooks/use-mobile-detection"

export default function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useMobileDetection()

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  // Simpler animation for mobile devices
  const variants = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration: isMobile ? 0.2 : 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

