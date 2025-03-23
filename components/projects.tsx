"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Layers,
  Database,
  Shield,
} from "lucide-react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projectsData = [
    {
      title: "E-commerce Platform",
      description:
        "Platform e-commerce lengkap dengan manajemen produk, fungsionalitas keranjang belanja, dan pemrosesan pembayaran yang aman.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Dashboard interaktif untuk memvisualisasikan kumpulan data kompleks dengan kemampuan pemfilteran, pengurutan, dan ekspor.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["D3.js", "React", "TypeScript", "REST API"],
      demoUrl: "#",
      codeUrl: "#",
      category: "data",
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Secure Authentication System",
      description:
        "Sistem autentikasi yang kuat dengan autentikasi multifaktor, JWT, dan role-based access control.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["Node.js", "Express", "JWT", "OAuth", "2FA"],
      demoUrl: "#",
      codeUrl: "#",
      category: "security",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Content Management System",
      description:
        "CMS khusus dengan role-based access control., versi konten, dan editor WYSIWYG.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sung-Jinwoo.jpg-4vwZKpW5lA2R7tHye1MnOOBi1QuPgL.jpeg",
      tags: ["React", "GraphQL", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web",
      icon: <Layers className="h-5 w-5" />,
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" />

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
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
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
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
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent hover:bg-cyan-950/30 text-cyan-400 border border-cyan-500/50"
                      asChild
                    >
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-black"
                      asChild
                    >
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-full border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
              asChild
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
