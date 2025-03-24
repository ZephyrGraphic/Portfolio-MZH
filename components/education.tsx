"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"
import { motion, useInView } from "framer-motion"

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const educationData = [
    {
      institution: "Nusa Putra University",
      degree: "S1 Sistem Informasi",
      period: "2024 - Present",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "Nusa Putra University",
      degree: "S1 Desain Komunikasi Visual",
      period: "2022 - 2024",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "SMKN 2 Kota Sukabumi",
      degree: "Rekayasa Perangkat Lunak",
      period: "Graduated 2018",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "SMPN 1 Kadudampit",
      degree: "",
      period: "Graduated 2015",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" />

        <div className="max-w-3xl mx-auto space-y-6" ref={ref}>
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {educationData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-6">
                <Card className="border-l-4 border-l-cyan-500 bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-white">
                      <span className="text-cyan-400">{item.icon}</span>
                      {item.institution}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-cyan-400">{item.degree}</p>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

