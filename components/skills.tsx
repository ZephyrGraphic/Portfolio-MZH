"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Shield, Gamepad2, Wrench } from "lucide-react"
import SectionHeading from "./section-heading"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS"],
    },
    {
      name: "Data Analysis",
      icon: <Database className="h-5 w-5" />,
      skills: ["Data Visualization", "Statistical Analysis", "SQL", "Excel", "Data Modeling"],
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Network Security", "Penetration Testing", "Security Analysis", "Risk Assessment"],
    },
    {
      name: "Game Modding",
      icon: <Gamepad2 className="h-5 w-5" />,
      skills: ["Game Modification", "Asset Creation", "Scripting", "3D Modeling"],
    },
    {
      name: "Cheat Creation",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Game Mechanics", "Memory Manipulation", "Reverse Engineering", "Scripting"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" ref={ref}>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="h-full bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-cyan-500/10 p-2 rounded-full text-cyan-400">{category.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
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

