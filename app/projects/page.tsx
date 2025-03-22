"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Filter, Code, Database, Shield, Layers, Gamepad2 } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"
import LoadingSpinner from "@/components/loading-spinner"

type ProjectCategory = "all" | "web" | "data" | "security" | "game" | "mobile"

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
  category: string
  icon: React.ReactNode 
  featured?: boolean
  date: string
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setProjects(projectsData)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const projectsData: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and secure payment processing.",
      longDescription:
        "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. Features include product catalog management, shopping cart functionality, secure checkout with multiple payment options, order tracking, and customer account management. The platform is built with scalability in mind, allowing it to handle growing product catalogs and increasing traffic.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web",
      icon: <Code className="h-5 w-5" />,
      featured: true,
      date: "2023-10",
    },
    {
      id: "data-dashboard",
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with filtering, sorting, and export capabilities.",
      longDescription:
        "This data visualization dashboard transforms complex datasets into intuitive, interactive visualizations that help users identify trends, patterns, and insights. The dashboard includes customizable charts and graphs, advanced filtering options, data export functionality, and real-time updates. It's designed to be user-friendly while providing powerful analytical capabilities for data-driven decision making.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["D3.js", "React", "TypeScript", "REST API", "Chart.js", "Material UI"],
      demoUrl: "#",
      codeUrl: "#",
      category: "data",
      icon: <Database className="h-5 w-5" />,
      featured: true,
      date: "2023-08",
    },
    {
      id: "auth-system",
      title: "Secure Authentication System",
      description: "Robust authentication system with multi-factor authentication, JWT, and role-based access control.",
      longDescription:
        "This authentication system provides enterprise-grade security for web applications. It features multi-factor authentication, JWT-based session management, role-based access control, secure password policies, account recovery mechanisms, and comprehensive audit logging. The system is designed with security best practices in mind, protecting against common vulnerabilities like CSRF, XSS, and brute force attacks.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "JWT", "OAuth", "2FA", "bcrypt", "Passport.js"],
      demoUrl: "#",
      codeUrl: "#",
      category: "security",
      icon: <Shield className="h-5 w-5" />,
      date: "2023-06",
    },
    {
      id: "cms-platform",
      title: "Content Management System",
      description: "Custom CMS with role-based access control, content versioning, and a WYSIWYG editor.",
      longDescription:
        "This content management system empowers content creators with powerful tools for creating, managing, and publishing digital content. Key features include a user-friendly WYSIWYG editor, content versioning and rollback capabilities, scheduled publishing, media library management, and customizable workflows. The CMS is built with flexibility in mind, allowing it to be adapted for various content types and publishing needs.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "GraphQL", "PostgreSQL", "AWS", "Apollo", "Draft.js"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web",
      icon: <Layers className="h-5 w-5" />,
      date: "2023-04",
    },
    {
      id: "game-mod-toolkit",
      title: "Game Modding Toolkit",
      description:
        "Comprehensive toolkit for creating and managing game modifications with asset management and scripting support.",
      longDescription:
        "This game modding toolkit simplifies the process of creating, testing, and distributing game modifications. It provides tools for asset extraction and modification, script editing with syntax highlighting, mod packaging and installation, compatibility checking, and community sharing features. The toolkit supports multiple game engines and modding frameworks, making it versatile for different types of game modifications.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C#", "Unity", "Lua", "JSON", "3D Modeling", "Asset Pipeline"],
      demoUrl: "#",
      codeUrl: "#",
      category: "game",
      icon: <Gamepad2 className="h-5 w-5" />,
      date: "2023-02",
    },
    {
      id: "real-time-analytics",
      title: "Real-time Analytics Platform",
      description: "Analytics platform that processes and visualizes data streams in real-time for immediate insights.",
      longDescription:
        "This real-time analytics platform enables businesses to monitor and analyze data as it's generated, providing immediate insights for time-sensitive decision making. The platform includes data stream processing, real-time dashboards with automatic updates, anomaly detection, alerting mechanisms, and historical data comparison. It's designed to handle high-volume data streams while maintaining low latency for critical business operations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Kafka", "Spark", "Elasticsearch", "React", "WebSockets", "Python"],
      demoUrl: "#",
      codeUrl: "#",
      category: "data",
      icon: <Database className="h-5 w-5" />,
      date: "2022-12",
    },
    {
      id: "mobile-fitness-app",
      title: "Mobile Fitness Application",
      description: "Cross-platform fitness app with workout tracking, nutrition planning, and progress visualization.",
      longDescription:
        "This mobile fitness application helps users achieve their health and fitness goals through comprehensive workout and nutrition tracking. Features include customizable workout plans, exercise demonstrations, nutrition logging and analysis, progress tracking with visual charts, goal setting, and social sharing capabilities. The app syncs across devices and integrates with popular fitness wearables for a seamless user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit", "Expo"],
      demoUrl: "#",
      codeUrl: "#",
      category: "mobile",
      icon: <Layers className="h-5 w-5" />,
      date: "2022-10",
    },
    {
      id: "network-security-tool",
      title: "Network Security Analysis Tool",
      description:
        "Tool for monitoring network traffic, detecting vulnerabilities, and providing security recommendations.",
      longDescription:
        "This network security analysis tool helps organizations identify and address security vulnerabilities in their network infrastructure. It features real-time network traffic monitoring, automated vulnerability scanning, intrusion detection, security policy compliance checking, and detailed reporting with actionable recommendations. The tool is designed to be accessible to security professionals while providing the depth of analysis needed for comprehensive security assessments.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Wireshark API", "Machine Learning", "NMAP", "Docker", "Flask"],
      demoUrl: "#",
      codeUrl: "#",
      category: "security",
      icon: <Shield className="h-5 w-5" />,
      date: "2022-08",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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

  const filterButtons = [
    { value: "all", label: "All Projects", icon: <Filter className="h-4 w-4" /> },
    { value: "web", label: "Web Development", icon: <Code className="h-4 w-4" /> },
    { value: "data", label: "Data Analysis", icon: <Database className="h-4 w-4" /> },
    { value: "security", label: "Cybersecurity", icon: <Shield className="h-4 w-4" /> },
    { value: "game", label: "Game Development", icon: <Gamepad2 className="h-4 w-4" /> },
    { value: "mobile", label: "Mobile Apps", icon: <Layers className="h-4 w-4" /> },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

      <PageTransition>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-gray-300 max-w-3xl">
              A showcase of my technical projects across various domains, demonstrating my skills, problem-solving
              approach, and passion for creating innovative solutions.
            </p>
          </div>

          <div className="mb-8 overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {filterButtons.map((button) => (
                <Button
                  key={button.value}
                  onClick={() => setActiveFilter(button.value as ProjectCategory)}
                  variant={activeFilter === button.value ? "default" : "outline"}
                  className={`
                    ${
                      activeFilter === button.value
                        ? "bg-cyan-500 hover:bg-cyan-600 text-black border border-cyan-400"
                        : "bg-transparent hover:bg-cyan-950/30 text-cyan-400 border border-cyan-500/50"
                    }
                    transition-all duration-300
                  `}
                  size="sm"
                >
                  {button.icon}
                  <span className="ml-2">{button.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <LoadingSpinner size="large" />
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
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
                      {project.featured && (
                        <div className="absolute top-3 right-3 z-20">
                          <Badge className="bg-cyan-500/70 text-black font-semibold">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-8 right-6 bg-cyan-500/10 p-3 rounded-full text-cyan-400 border border-cyan-500/30 z-20">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge className="bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                            +{project.tags.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent hover:bg-cyan-950/30 text-cyan-400 border border-cyan-500/50"
                        asChild
                      >
                        <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2 text-white">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </PageTransition>
    </main>
  )
}

