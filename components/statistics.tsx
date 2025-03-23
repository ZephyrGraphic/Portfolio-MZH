"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Users, Award, Clock } from "lucide-react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";

// Animated counter component
const Counter = ({
  value,
  duration = 2000,
  title,
  icon,
}: {
  value: number;
  duration?: number;
  title: string;
  icon: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMilSecDur = duration;
    const incrementTime = totalMilSecDur / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isInView]);

  return (
    <div
      ref={nodeRef}
      className="flex flex-col items-center justify-center p-6"
    >
      <div className="bg-cyan-500/10 p-3 rounded-full text-cyan-400 mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2">{count}+</div>
      <div className="text-gray-400 text-center">{title}</div>
    </div>
  );
};

// Skill progress bar component
const SkillBar = ({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true });

  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const statsData = [
    {
      value: 15,
      title: "Projects Completed",
      icon: <Code className="h-6 w-6" />,
    },
    {
      value: 3,
      title: "Years Experience",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      value: 10,
      title: "Satisfied Clients",
      icon: <Users className="h-6 w-6" />,
    },
    { value: 5, title: "Certifications", icon: <Award className="h-6 w-6" /> },
  ];

  const skillsData = [
    { skill: "Web Development", percentage: 90 },
    { skill: "Data Analysis", percentage: 85 },
    { skill: "Cybersecurity", percentage: 75 },
    { skill: "Game Modding", percentage: 80 },
    { skill: "UI/UX Design", percentage: 70 },
  ];

  return (
    <section id="statistics" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Statistics" />

        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300"
              >
                <CardContent className="p-0">
                  <Counter
                    value={stat.value}
                    title={stat.title}
                    icon={stat.icon}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                  <Database className="h-5 w-5 text-cyan-400 mr-2" />
                  Skills Proficiency
                </h3>
                <div>
                  {skillsData.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill.skill}
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Professional Summary
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Sebagai mahasiswa Sistem Informasi yang berdedikasi, saya
                    secara konsisten menunjukkan kemampuan teknis yang kuat di
                    berbagai domain.
                  </p>
                  <p>
                    Portofolio saya menunjukkan beragam keterampilan mulai dari
                    pemrograman hingga keamanan siber, dengan rekam jejak yang
                    terbukti memberikan hasil berkualitas tinggi.
                  </p>
                  <p>
                    Saya bangga dengan kemampuan saya untuk selalu mengikuti
                    perkembangan teknologi baru dan terus memperluas basis
                    pengetahuan saya agar tetap menjadi yang terdepan dalam
                    industri teknologi.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-400 border border-cyan-500/30">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      Available for new opportunities
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
