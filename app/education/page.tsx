"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  ArrowLeft,
  ChevronRight,
  FileText,
  MapPin,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackgroundGrid from "@/components/background-grid";
import CursorEffect from "@/components/cursor-effect";
import PageTransition from "@/components/page-transition";

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("nusa-putra-si");

  const educationData = [
    {
      id: "nusa-putra-si",
      institution: "Nusa Putra University",
      degree: "S1 Sistem Informasi",
      period: "2024 - Present",
      location: "Sukabumi, Indonesia",
      description:
        "Saat ini sedang menempuh pendidikan Sarjana di bidang Sistem Informasi, dengan fokus pada manajemen data, analisis sistem, dan pengembangan perangkat lunak. Program ini memberikan pemahaman menyeluruh tentang bagaimana sistem informasi mendukung operasi bisnis dan proses pengambilan keputusan.",
      courses: [
        "Database Management Systems",
        "System Analysis and Design",
        "Web Application Development",
        "Data Mining and Business Intelligence",
        "Information Security",
        "Project Management",
      ],
      projects: [
        "Developed a comprehensive student management system using React and Node.js",
        "Created data visualization dashboards for business analytics",
        "Implemented secure authentication systems using modern protocols",
      ],
      achievements: [
        "Dean's List for academic excellence",
        "Selected for competitive research program",
        "Represented university in regional hackathon",
      ],
    },
    {
      id: "nusa-putra-dkv",
      institution: "Nusa Putra University",
      degree: "S1 Desain Komunikasi Visual",
      period: "2022 - 2024",
      location: "Sukabumi, Indonesia",
      description:
        "Mempelajari Desain Komunikasi Visual dengan fokus pada media digital, desain UI/UX, dan prinsip desain grafis. Program ini memberikan dasar yang kuat dalam estetika visual, pengembangan identitas merek, dan pembuatan konten digital.",
      courses: [
        "Typography and Layout Design",
        "Digital Illustration",
        "UI/UX Design Principles",
        "Brand Identity Development",
        "Motion Graphics",
        "Interactive Media Design",
      ],
      projects: [
        "Designed comprehensive brand identity for local businesses",
        "Created interactive user interfaces for mobile applications",
        "Developed motion graphics for digital marketing campaigns",
      ],
      achievements: [
        "Featured in student design exhibition",
        "Won design competition for university event materials",
        "Collaborated with local businesses for rebranding projects",
      ],
    },
    {
      id: "smkn-2",
      institution: "SMKN 2 Kota Sukabumi",
      degree: "Rekayasa Perangkat Lunak",
      period: "Graduated 2021",
      location: "Sukabumi, Indonesia",
      description:
        "Menyelesaikan pendidikan kejuruan di bidang Rekayasa Perangkat Lunak, memperoleh keterampilan praktis dalam pemrograman, metodologi pengembangan perangkat lunak, dan manajemen basis data. Program ini menekankan pengalaman langsung dan keterampilan yang relevan dengan industri.",
      courses: [
        "Object-Oriented Programming",
        "Web Development Fundamentals",
        "Database Design",
        "Software Testing",
        "Mobile Application Development",
        "Computer Networks",
      ],
      projects: [
        "Developed inventory management system for school library",
        "Created mobile application for student attendance tracking",
        "Built e-commerce website with payment integration",
      ],
      achievements: [
        "Graduated with honors",
        "Won first place in regional coding competition",
        "Completed industry internship with excellent evaluation",
      ],
    },
    {
      id: "smpn-1",
      institution: "SMPN 1 Kadudampit",
      degree: "Junior High School",
      period: "Graduated 2018",
      location: "Kadudampit, Sukabumi",
      description:
        "Menyelesaikan pendidikan sekolah menengah pertama dengan landasan akademis yang kuat. Berpartisipasi dalam berbagai kegiatan ekstrakurikuler yang membantu mengembangkan keterampilan kepemimpinan dan kemampuan bekerja sama dalam tim.",
      courses: [
        "Mathematics",
        "Science",
        "Computer Literacy",
        "English Language",
        "Social Studies",
        "Arts and Culture",
      ],
      projects: [
        "Science fair project on renewable energy",
        "School newspaper contributor",
        "Computer club member",
      ],
      achievements: [
        "Academic excellence award",
        "Active participant in school competitions",
        "Leadership role in student organizations",
      ],
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
              Education <span className="text-cyan-400">Journey</span>
            </h1>
            <p className="text-gray-300 max-w-3xl">
              Gambaran rinci tentang latar belakang akademis saya, menampilkan
              institusi, kursus, proyek, dan pencapaian yang telah membentuk
              pengetahuan dan keterampilan saya dalam teknologi dan desain.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm sticky top-24">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                    Institutions
                  </h3>
                  <nav className="flex flex-col space-y-2">
                    {educationData.map((edu) => (
                      <button
                        key={edu.id}
                        onClick={() => setActiveTab(edu.id)}
                        className={`text-left flex items-center justify-between p-2 rounded-md transition-colors ${
                          activeTab === edu.id
                            ? "bg-cyan-900/30 text-cyan-400 border border-cyan-500/50"
                            : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/10"
                        }`}
                      >
                        <span>{edu.institution}</span>
                        {activeTab === edu.id && (
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
                  {educationData.map((edu) => (
                    <TabsTrigger key={edu.id} value={edu.id}>
                      {edu.institution}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {educationData.map((edu) => (
                  <TabsContent key={edu.id} value={edu.id}>
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
                              <GraduationCap className="h-6 w-6 text-cyan-400 mr-2" />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="text-base font-normal text-cyan-400 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.period}
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="h-6 w-1 bg-cyan-500 rounded-full"></div>
                              <h3 className="text-xl font-semibold">
                                {edu.degree}
                              </h3>
                            </div>
                            <div className="flex items-center text-gray-400 mb-4">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </div>
                            <p className="text-gray-300">{edu.description}</p>
                          </motion.div>

                          <motion.div
                            variants={itemVariants}
                            className="grid md:grid-cols-2 gap-6"
                          >
                            <div>
                              <h4 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                                <FileText className="h-5 w-5 mr-2" />
                                Key Courses
                              </h4>
                              <ul className="space-y-2">
                                {edu.courses.map((course, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-cyan-500 mr-2">
                                      •
                                    </span>
                                    <span className="text-gray-300">
                                      {course}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                                <Award className="h-5 w-5 mr-2" />
                                Achievements
                              </h4>
                              <ul className="space-y-2">
                                {edu.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-cyan-500 mr-2">
                                      •
                                    </span>
                                    <span className="text-gray-300">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                              Notable Projects
                            </h4>
                            <div className="space-y-3">
                              {edu.projects.map((project, index) => (
                                <div
                                  key={index}
                                  className="p-3 border border-cyan-500/30 rounded-md bg-cyan-900/10 hover:bg-cyan-900/20 transition-colors"
                                >
                                  <p className="text-gray-300">{project}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
