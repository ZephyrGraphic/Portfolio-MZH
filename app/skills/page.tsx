"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Code, Shield, Gamepad2, Wrench, LineChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("programming")

  const skillsData = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="h-6 w-6" />,
      description:
        "Proficient in multiple programming languages and frameworks, with a focus on web development and application architecture. Experienced in building responsive, scalable, and maintainable applications using modern development practices.",
      skills: [
        {
          name: "JavaScript/TypeScript",
          level: 90,
          description:
            "Expert in modern JavaScript and TypeScript, including ES6+ features, async programming, and type systems.",
        },
        {
          name: "React.js",
          level: 85,
          description:
            "Proficient in building complex user interfaces with React, including state management, hooks, and performance optimization.",
        },
        {
          name: "Next.js",
          level: 80,
          description:
            "Experienced in server-side rendering, static site generation, and building full-stack applications with Next.js.",
        },
        {
          name: "Node.js",
          level: 85,
          description:
            "Strong backend development skills using Node.js, Express, and various middleware for building RESTful APIs and web services.",
        },
        {
          name: "HTML/CSS",
          level: 90,
          description:
            "Advanced knowledge of semantic HTML and modern CSS techniques, including Flexbox, Grid, and CSS-in-JS solutions.",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          description: "Expert in utility-first CSS frameworks, particularly Tailwind CSS for rapid UI development.",
        },
        {
          name: "Git/Version Control",
          level: 85,
          description: "Proficient in Git workflows, branching strategies, and collaborative development practices.",
        },
        {
          name: "Testing",
          level: 75,
          description:
            "Experienced in unit testing, integration testing, and end-to-end testing using Jest, React Testing Library, and Cypress.",
        },
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description:
            "Built a full-stack e-commerce platform with React, Next.js, and Node.js, featuring product management, cart functionality, and payment processing.",
          technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
        },
        {
          name: "Content Management System",
          description:
            "Developed a custom CMS with role-based access control, content versioning, and a WYSIWYG editor for managing digital content.",
          technologies: ["TypeScript", "React", "Express", "PostgreSQL"],
        },
        {
          name: "Real-time Chat Application",
          description:
            "Created a real-time messaging application with features like typing indicators, read receipts, and file sharing.",
          technologies: ["React", "Socket.io", "Express", "Redis"],
        },
      ],
      certifications: [
        "Advanced JavaScript - Udemy",
        "React Developer Certification - Meta",
        "Full Stack Web Development - freeCodeCamp",
      ],
    },
    {
      id: "data-analysis",
      name: "Data Analysis",
      icon: <LineChart className="h-6 w-6" />,
      description:
        "Skilled in analyzing and interpreting complex data sets to extract meaningful insights and support data-driven decision making. Experienced in data visualization, statistical analysis, and database management.",
      skills: [
        {
          name: "SQL",
          level: 85,
          description: "Proficient in writing complex queries, database design, and optimization for data analysis.",
        },
        {
          name: "Data Visualization",
          level: 80,
          description:
            "Experienced in creating insightful visualizations using tools like D3.js, Chart.js, and Tableau.",
        },
        {
          name: "Statistical Analysis",
          level: 75,
          description: "Knowledge of statistical methods and their application in analyzing data patterns and trends.",
        },
        {
          name: "Excel/Spreadsheets",
          level: 90,
          description: "Advanced skills in Excel, including pivot tables, VLOOKUP, and data modeling.",
        },
        {
          name: "Python for Data Analysis",
          level: 70,
          description: "Familiar with pandas, NumPy, and other Python libraries for data manipulation and analysis.",
        },
        {
          name: "Data Cleaning",
          level: 85,
          description:
            "Experienced in preparing and cleaning data for analysis, handling missing values, and data normalization.",
        },
        {
          name: "Business Intelligence",
          level: 75,
          description:
            "Knowledge of BI tools and methodologies for transforming data into actionable business insights.",
        },
        {
          name: "Data Modeling",
          level: 70,
          description: "Understanding of data modeling concepts and techniques for organizing and structuring data.",
        },
      ],
      projects: [
        {
          name: "Sales Performance Dashboard",
          description:
            "Created an interactive dashboard to visualize sales performance metrics, trends, and forecasts for a retail business.",
          technologies: ["Tableau", "SQL", "Excel"],
        },
        {
          name: "Customer Segmentation Analysis",
          description:
            "Conducted analysis to segment customers based on purchasing behavior, demographics, and engagement metrics.",
          technologies: ["Python", "pandas", "scikit-learn", "Matplotlib"],
        },
        {
          name: "Inventory Optimization Model",
          description:
            "Developed a model to optimize inventory levels based on historical sales data, seasonality, and supply chain constraints.",
          technologies: ["Excel", "Power BI", "SQL"],
        },
      ],
      certifications: [
        "Data Analysis with Python - IBM",
        "SQL for Data Science - UC Davis",
        "Data Visualization with Tableau - Coursera",
      ],
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Knowledge of cybersecurity principles and practices for protecting systems, networks, and data from digital attacks. Experienced in identifying vulnerabilities and implementing security measures.",
      skills: [
        {
          name: "Network Security",
          level: 80,
          description: "Understanding of network protocols, firewalls, and secure network architecture.",
        },
        {
          name: "Penetration Testing",
          level: 75,
          description: "Experience in identifying and exploiting security vulnerabilities in applications and systems.",
        },
        {
          name: "Security Analysis",
          level: 70,
          description:
            "Ability to analyze security incidents, identify attack vectors, and recommend mitigation strategies.",
        },
        {
          name: "Authentication Systems",
          level: 85,
          description:
            "Knowledge of secure authentication mechanisms, including multi-factor authentication and OAuth.",
        },
        {
          name: "Encryption",
          level: 75,
          description: "Understanding of encryption algorithms, key management, and secure data transmission.",
        },
        {
          name: "Risk Assessment",
          level: 70,
          description: "Experience in evaluating security risks and developing risk management strategies.",
        },
        {
          name: "Security Awareness",
          level: 85,
          description: "Ability to educate others about security best practices and potential threats.",
        },
        {
          name: "Incident Response",
          level: 65,
          description: "Knowledge of procedures for responding to and recovering from security incidents.",
        },
      ],
      projects: [
        {
          name: "Web Application Security Audit",
          description:
            "Conducted a comprehensive security audit of a web application, identifying vulnerabilities and recommending security improvements.",
          technologies: ["OWASP ZAP", "Burp Suite", "JavaScript"],
        },
        {
          name: "Secure Authentication System",
          description:
            "Implemented a secure authentication system with multi-factor authentication, password policies, and account recovery mechanisms.",
          technologies: ["Node.js", "JWT", "bcrypt", "2FA"],
        },
        {
          name: "Security Awareness Training",
          description:
            "Developed and delivered security awareness training materials for non-technical staff to improve organizational security posture.",
          technologies: ["Social Engineering", "Phishing Awareness", "Password Management"],
        },
      ],
      certifications: ["Cybersecurity Fundamentals - CompTIA", "Ethical Hacking - Udemy", "Network Security - Cisco"],
    },
    {
      id: "game-modding",
      name: "Game Modding",
      icon: <Gamepad2 className="h-6 w-6" />,
      description:
        "Experienced in modifying video games to create new content, alter gameplay mechanics, or enhance existing features. Skilled in understanding game architecture and implementing custom modifications.",
      skills: [
        {
          name: "Game Modification",
          level: 85,
          description: "Ability to modify existing game assets, mechanics, and systems to create new experiences.",
        },
        {
          name: "Asset Creation",
          level: 75,
          description: "Experience in creating custom game assets, including 3D models, textures, and animations.",
        },
        {
          name: "Scripting",
          level: 80,
          description: "Proficient in scripting languages used in game development and modding, such as Lua and C#.",
        },
        {
          name: "3D Modeling",
          level: 70,
          description: "Knowledge of 3D modeling techniques and tools for creating game assets.",
        },
        {
          name: "Game Engines",
          level: 75,
          description:
            "Familiarity with popular game engines like Unity and Unreal Engine for modding and custom content creation.",
        },
        {
          name: "Level Design",
          level: 80,
          description:
            "Experience in designing and implementing game levels with attention to player experience and flow.",
        },
        {
          name: "UI/UX for Games",
          level: 75,
          description: "Understanding of user interface design principles specific to video games.",
        },
        {
          name: "Community Modding",
          level: 85,
          description: "Experience in collaborating with modding communities and sharing knowledge and resources.",
        },
      ],
      projects: [
        {
          name: "Open World Game Expansion",
          description:
            "Created a substantial expansion mod for an open-world game, adding new quests, characters, and locations.",
          technologies: ["Lua", "3D Modeling", "Game Engine API"],
        },
        {
          name: "Game Balance Overhaul",
          description:
            "Developed a comprehensive balance mod that adjusted game mechanics, progression, and difficulty for a more challenging experience.",
          technologies: ["JSON", "Game Scripting", "Game Design"],
        },
        {
          name: "Custom User Interface",
          description:
            "Designed and implemented a custom UI mod that improved information display and user experience in a popular strategy game.",
          technologies: ["XML", "UI Design", "Scripting"],
        },
      ],
      communities: [
        "Active contributor to NexusMods",
        "Moderator for game modding Discord community",
        "Tutorial creator for aspiring game modders",
      ],
    },
    {
      id: "cheat-creation",
      name: "Cheat Creation",
      icon: <Wrench className="h-6 w-6" />,
      description:
        "Knowledge of game mechanics and memory manipulation techniques for creating game modifications that alter gameplay. Experience in reverse engineering and understanding game code structure.",
      skills: [
        {
          name: "Game Mechanics",
          level: 85,
          description: "Deep understanding of game mechanics and how they can be modified or exploited.",
        },
        {
          name: "Memory Manipulation",
          level: 80,
          description: "Experience in manipulating game memory to modify values and behaviors at runtime.",
        },
        {
          name: "Reverse Engineering",
          level: 75,
          description: "Ability to analyze and understand compiled code to identify key functions and data structures.",
        },
        {
          name: "Scripting for Automation",
          level: 85,
          description: "Proficient in creating scripts to automate repetitive tasks or complex sequences in games.",
        },
        {
          name: "Anti-Detection Techniques",
          level: 70,
          description: "Knowledge of methods to avoid detection by anti-cheat systems while maintaining functionality.",
        },
        {
          name: "Assembly Language",
          level: 65,
          description: "Basic understanding of assembly language for low-level code analysis and modification.",
        },
        {
          name: "Debugging Tools",
          level: 80,
          description: "Experience with debugging tools and techniques for analyzing game behavior.",
        },
        {
          name: "API Hooking",
          level: 70,
          description: "Knowledge of intercepting function calls to modify game behavior or extract information.",
        },
      ],
      projects: [
        {
          name: "Training Mode Enhancement",
          description:
            "Developed a training mode enhancement for a fighting game that provided additional practice features and feedback mechanisms.",
          technologies: ["C++", "Memory Manipulation", "Game Analysis"],
        },
        {
          name: "Automation Tool",
          description:
            "Created a tool to automate repetitive tasks in an MMORPG, improving efficiency for resource gathering and character progression.",
          technologies: ["Python", "Image Recognition", "Input Simulation"],
        },
        {
          name: "Game Analysis Framework",
          description:
            "Built a framework for analyzing game data structures and behaviors to facilitate understanding of game mechanics.",
          technologies: ["C#", "Reverse Engineering", "Memory Reading"],
        },
      ],
      ethics: [
        "Focus on single-player or private server environments",
        "Educational and research purposes only",
        "Respect for game developers and their terms of service",
        "Emphasis on understanding game systems rather than disrupting multiplayer experiences",
      ],
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

  // Skill bar component
  const SkillBar = ({ skill }: { skill: { name: string; level: number; description: string } }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-cyan-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
        </div>
        <p className="text-gray-400 text-sm">{skill.description}</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            A detailed breakdown of my technical skills across various domains, showcasing my expertise, projects, and
            continuous learning in each area.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm sticky top-24">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Skill Categories</h3>
                <nav className="flex flex-col space-y-2">
                  {skillsData.map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => setActiveTab(skill.id)}
                      className={`text-left flex items-center p-2 rounded-md transition-colors ${
                        activeTab === skill.id
                          ? "bg-cyan-900/30 text-cyan-400 border border-cyan-500/50"
                          : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/10"
                      }`}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="hidden">
                {skillsData.map((skill) => (
                  <TabsTrigger key={skill.id} value={skill.id}>
                    {skill.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillsData.map((skill) => (
                <TabsContent key={skill.id} value={skill.id}>
                  <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm mb-6 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full text-cyan-400">{skill.icon}</div>
                          <span>{skill.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <motion.div variants={itemVariants}>
                          <p className="text-gray-300">{skill.description}</p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h4 className="text-lg font-semibold mb-4 text-cyan-400">Proficiency Levels</h4>
                          <div className="space-y-4">
                            {skill.skills.map((item, index) => (
                              <SkillBar key={index} skill={item} />
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h4 className="text-lg font-semibold mb-4 text-cyan-400">Notable Projects</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {skill.projects.map((project, index) => (
                              <Card
                                key={index}
                                className="bg-cyan-900/10 border border-cyan-500/30 hover:bg-cyan-900/20 transition-all duration-300"
                              >
                                <CardContent className="p-4">
                                  <h5 className="font-medium text-white mb-2">{project.name}</h5>
                                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                      <Badge
                                        key={techIndex}
                                        className="bg-cyan-950/50 text-cyan-400 border border-cyan-500/30"
                                      >
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </motion.div>

                        {skill.certifications && (
                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">Certifications & Training</h4>
                            <ul className="space-y-2">
                              {skill.certifications.map((cert, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span className="text-gray-300">{cert}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {skill.communities && (
                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">Community Involvement</h4>
                            <ul className="space-y-2">
                              {skill.communities.map((community, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span className="text-gray-300">{community}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {skill.ethics && (
                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">Ethical Considerations</h4>
                            <div className="p-4 border border-cyan-500/30 rounded-md bg-cyan-900/10">
                              <ul className="space-y-2">
                                {skill.ethics.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-cyan-500 mr-2">•</span>
                                    <span className="text-gray-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

