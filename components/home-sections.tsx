"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Code, Database, Shield, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import SectionHeading from "./section-heading"

export default function HomeSections() {
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const educationInView = useInView(educationRef, { once: true, amount: 0.2 })
  const experienceInView = useInView(experienceRef, { once: true, amount: 0.2 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })

  // Education data
  const educationData = [
    {
      institution: "Universitas Nusa Putra",
      degree: "S1 Sistem Informasi",
      period: "2024 - Sekarang",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "Universitas Nusa Putra",
      degree: "S1 Desain Komunikasi Visual",
      period: "2022 - 2024",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  // Skills data
  const skillCategories = [
    {
      name: "Pemrograman",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS"],
    },
    {
      name: "Analisis Data",
      icon: <Database className="h-5 w-5" />,
      skills: ["Visualisasi Data", "Analisis Statistik", "SQL", "Excel", "Pemodelan Data"],
    },
    {
      name: "Keamanan Siber",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Keamanan Jaringan", "Penetration Testing", "Analisis Keamanan", "Penilaian Risiko"],
    },
  ]

  // Projects data
  const projectsData = [
    {
      title: "Platform E-commerce",
      description:
        "Platform e-commerce full-stack dengan manajemen produk, fungsionalitas keranjang, dan pemrosesan pembayaran yang aman.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Dashboard Visualisasi Data",
      description:
        "Dashboard interaktif untuk memvisualisasikan dataset kompleks dengan kemampuan filter, pengurutan, dan ekspor.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["D3.js", "React", "TypeScript", "REST API"],
      demoUrl: "#",
      codeUrl: "#",
      category: "data",
      icon: <Database className="h-5 w-5" />,
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
    <>
      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Pendidikan" />

          <div className="max-w-6xl mx-auto" ref={educationRef}>
            <motion.div
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={educationInView ? "visible" : "hidden"}
            >
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
                        <span>{item.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <div className="text-center mt-8">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/education">Lihat Detail Pendidikan</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Pengalaman" />

          <div className="max-w-6xl mx-auto" ref={experienceRef}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
                  <p className="font-medium text-cyan-400">Magang</p>
                  <div className="flex items-center gap-1 text-gray-400 mt-1 mb-3">
                    <span>Periode Magang</span>
                  </div>
                  <p className="text-gray-300">
                    Mendapatkan pengalaman praktis dalam lingkungan profesional, menerapkan keterampilan teknis dan
                    pengetahuan dalam skenario dunia nyata. Berkolaborasi dengan anggota tim pada berbagai proyek dan
                    mempelajari praktik terbaik industri.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/experience">Lihat Detail Pengalaman</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Keahlian" />

          <div ref={skillsRef} className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
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

            <div className="text-center mt-8">
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                asChild
              >
                <Link href="/skills">Lihat Semua Keahlian</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4">
          <SectionHeading title="Proyek" />

          <div ref={projectsRef} className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
            >
              {projectsData.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                      <div className="absolute top-3 left-3 z-20">
                        <Badge className="bg-cyan-900/70 text-cyan-400 border border-cyan-500/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-8 right-6 bg-cyan-500/10 p-3 rounded-full text-cyan-400 border border-cyan-500/30 z-20">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent hover:bg-cyan-950/30 text-cyan-400 border border-cyan-500/50"
                          asChild
                        >
                          <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Kode
                          </Link>
                        </Button>
                        <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black" asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-8">
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                asChild
              >
                <Link href="/projects">Lihat Semua Proyek</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

