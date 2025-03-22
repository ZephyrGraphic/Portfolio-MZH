export default function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-5 w-5 border-2",
    medium: "h-8 w-8 border-3",
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

