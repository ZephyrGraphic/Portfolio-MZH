"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />

        <div className="max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                  Hello! I'm <span className="text-cyan-400 font-semibold">M Z Haikal Hamdani</span>, a Sistem Informasi
                  student at Nusa Putra University. I'm passionate about technology, programming, and data analysis.
                </p>
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                  With experience in programming, data analysis, cybersecurity, and game modding, I bring a diverse
                  skill set to the table. I've previously interned at{" "}
                  <span className="text-cyan-400 font-semibold">PT. Jerbee Indonesia</span>, where I gained valuable
                  industry experience.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm currently pursuing my degree in Sistem Informasi, having previously studied Desain Komunikasi
                  Visual at the same university. I'm always looking to expand my knowledge and take on new challenges in
                  the tech world.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

