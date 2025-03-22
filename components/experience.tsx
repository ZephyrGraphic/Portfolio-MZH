"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"
import { motion, useInView } from "framer-motion"

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" />

        <div className="max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-l-4 border-l-cyan-500 bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <span className="text-cyan-400">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  PT. Jerbee Indonesia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-cyan-400">Internship</p>
                <div className="flex items-center gap-1 text-gray-400 mt-1 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Internship Period</span>
                </div>
                <p className="text-gray-300">
                  Gained practical experience in a professional environment, applying technical skills and knowledge in
                  real-world scenarios. Collaborated with team members on various projects and learned industry best
                  practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

