export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
      <h2 className="text-3xl font-bold text-center mx-4 text-white relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500/30"></span>
      </h2>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
    </div>
  )
}

