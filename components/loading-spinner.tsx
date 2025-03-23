"use client"

import type { FC } from "react"

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large"
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "h-5 w-5 border-2",
    medium: "h-8 w-8 border-[3px]", // Using border-[3px] instead of border-3 which isn't standard
    large: "h-12 w-12 border-4",
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div
        className={`${sizeClasses[size]} rounded-full border-t-cyan-400 border-r-cyan-400/30 border-b-cyan-400/10 border-l-cyan-400/60 animate-spin`}
      ></div>
    </div>
  )
}

// Also export as default for backward compatibility
export default LoadingSpinner

