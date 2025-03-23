"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ArrowLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import BackgroundGrid from "@/components/background-grid";
import CursorEffect from "@/components/cursor-effect";

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("jerbee");

  const experienceData = [
    {
      id: "jerbee",
      company: "PT. Jerbee Indonesia",
      position: "Software Development Intern",
      period: "2023 - 2024",
      location: "Jakarta, Indonesia",
      type: "Internship",
      description:
        "Bekerja sebagai magang pengembangan perangkat lunak, berkontribusi pada pengembangan aplikasi web dan peralatan internal. Berkolaborasi dengan pengembang senior untuk menerapkan fitur baru, memperbaiki bug, dan meningkatkan kinerja aplikasi.",
      responsibilities: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with the design team to implement responsive UI components",
        "Participated in code reviews and implemented feedback from senior developers",
        "Assisted in database design and optimization using PostgreSQL",
        "Contributed to the development of RESTful APIs for mobile applications",
        "Implemented automated testing for critical application components",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Git",
        "Docker",
        "Jest",
        "RESTful APIs",
      ],
      achievements: [
        "Reduced application load time by 40% through code optimization",
        "Implemented new features that increased user engagement by 25%",
        "Received recognition for exceptional problem-solving skills",
        "Contributed to open-source projects maintained by the company",
      ],
      testimonial: {
        text: "Haikal demonstrated exceptional technical skills and a strong work ethic during his internship. His ability to quickly learn new technologies and apply them to solve real-world problems was impressive.",
        author: "Sarah Johnson",
        position: "Senior Developer, PT. Jerbee Indonesia",
      },
    },
    {
      id: "freelance",
      company: "Freelance Projects",
      position: "Web Developer",
      period: "2022 - Present",
      location: "Remote",
      type: "Freelance",
      description:
        "Bekerja sebagai pengembang web lepas untuk berbagai klien, merancang dan mengembangkan situs web dan aplikasi web yang responsif. Mengelola seluruh siklus pengembangan mulai dari pengumpulan persyaratan hingga penerapan dan pemeliharaan.",
      responsibilities: [
        "Designed and developed responsive websites for small businesses and startups",
        "Created custom content management systems tailored to client needs",
        "Implemented e-commerce functionality with secure payment processing",
        "Optimized websites for search engines and performance",
        "Provided ongoing maintenance and support for client websites",
        "Collaborated with designers to implement visually appealing interfaces",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Next.js",
        "WordPress",
        "Tailwind CSS",
        "Firebase",
        "Stripe",
      ],
      achievements: [
        "Completed over 15 successful projects with 100% client satisfaction",
        "Developed an e-commerce platform that increased client sales by 35%",
        "Created a custom CMS that reduced content update time by 60%",
        "Maintained long-term relationships with 80% of clients",
      ],
      projects: [
        {
          name: "E-commerce Website for Local Boutique",
          description:
            "Developed a fully functional e-commerce website with inventory management and secure payment processing.",
        },
        {
          name: "Portfolio Website for Photography Studio",
          description:
            "Created a visually stunning portfolio website with advanced image galleries and contact forms.",
        },
        {
          name: "Booking System for Local Service Provider",
          description:
            "Implemented an online booking and scheduling system that integrated with the client's existing workflow.",
        },
      ],
    },
    {
      id: "volunteer",
      company: "Tech Community Outreach",
      position: "Volunteer Instructor",
      period: "2021 - Present",
      location: "Sukabumi, Indonesia",
      type: "Volunteer",
      description:
        "Menjadi sukarelawan sebagai instruktur pemrograman untuk kaum muda kurang mampu, mengajarkan konsep pemrograman dasar hingga menengah. Menggelar lokakarya dan kamp pengkodean untuk menumbuhkan minat terhadap teknologi dan memberikan keterampilan praktis.",
      responsibilities: [
        "Developed curriculum for introductory programming courses",
        "Conducted weekly classes teaching HTML, CSS, and JavaScript",
        "Mentored students on personal coding projects",
        "Organized coding competitions and hackathons",
        "Created learning resources and documentation",
        "Collaborated with other volunteers to improve teaching methodologies",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Python",
        "Scratch",
        "Basic algorithms",
        "Problem-solving",
      ],
      achievements: [
        "Taught programming skills to over 50 students",
        "Several students went on to pursue higher education in computer science",
        "Developed an innovative teaching approach that increased student engagement",
        "Organized a successful community hackathon with local business sponsorship",
      ],
      impact:
        "The program has significantly impacted the local community by providing technology education to students who would otherwise not have access to these resources. Many participants have developed valuable skills that have opened new educational and career opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

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
            Professional <span className="text-cyan-400">Experience</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Gambaran umum komprehensif tentang perjalanan profesional saya,
            menyoroti peran utama, tanggung jawab, dan pencapaian yang
            menunjukkan keahlian dan pertumbuhan saya di bidang teknologi.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm sticky top-24">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                  Experience
                </h3>
                <nav className="flex flex-col space-y-2">
                  {experienceData.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveTab(exp.id)}
                      className={`text-left flex items-center justify-between p-2 rounded-md transition-colors ${
                        activeTab === exp.id
                          ? "bg-cyan-900/30 text-cyan-400 border border-cyan-500/50"
                          : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/10"
                      }`}
                    >
                      <span>{exp.company}</span>
                      {activeTab === exp.id && (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="hidden">
                {experienceData.map((exp) => (
                  <TabsTrigger key={exp.id} value={exp.id}>
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>

              {experienceData.map((exp) => (
                <TabsContent key={exp.id} value={exp.id}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm mb-6 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      <CardHeader>
                        <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div className="flex items-center">
                            <Briefcase className="h-6 w-6 text-cyan-400 mr-2" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="text-base font-normal text-cyan-400 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <motion.div variants={itemVariants}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-6 w-1 bg-cyan-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold">
                              {exp.position}
                            </h3>
                            <Badge className="ml-2 bg-cyan-900/50 text-cyan-400 border border-cyan-500/30">
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-gray-400 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <p className="text-gray-300">{exp.description}</p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h4 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                            <CheckCircle2 className="h-5 w-5 mr-2" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span className="text-gray-300">
                                    {responsibility}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, index) => (
                              <Badge
                                key={index}
                                className="bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h4 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                            <Award className="h-5 w-5 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-cyan-500 mr-2">•</span>
                                <span className="text-gray-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        {exp.testimonial && (
                          <motion.div variants={itemVariants}>
                            <div className="p-4 border border-cyan-500/30 rounded-md bg-cyan-900/10 relative">
                              <div className="text-5xl absolute top-2 left-2 text-cyan-500/20">
                                "
                              </div>
                              <p className="text-gray-300 italic relative z-10 mb-4">
                                {exp.testimonial.text}
                              </p>
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mr-2">
                                  {exp.testimonial.author.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-white font-medium">
                                    {exp.testimonial.author}
                                  </p>
                                  <p className="text-gray-400 text-sm">
                                    {exp.testimonial.position}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {exp.projects && (
                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                              Notable Projects
                            </h4>
                            <div className="space-y-3">
                              {exp.projects.map((project, index) => (
                                <div
                                  key={index}
                                  className="p-3 border border-cyan-500/30 rounded-md bg-cyan-900/10 hover:bg-cyan-900/20 transition-colors"
                                >
                                  <h5 className="font-medium text-white mb-1">
                                    {project.name}
                                  </h5>
                                  <p className="text-gray-300">
                                    {project.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {exp.impact && (
                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                              Impact
                            </h4>
                            <p className="text-gray-300">{exp.impact}</p>
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
  );
}
