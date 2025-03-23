"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />

        <div className="max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex justify-center md:justify-start">
                    <div className="relative w-48 h-48 overflow-hidden edgy-frame image-glitch">
                      {/* The image */}
                      <img
                        src="/images/profile-photo.jpeg"
                        alt="M Z Haikal Hamdani"
                        className="w-full h-full object-cover z-0"
                      />

                      {/* Edge highlights */}
                      <div className="absolute inset-0 border border-cyan-500/70 z-10"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-500 z-20"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-500 z-20"></div>
                      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-500 z-20"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-500 z-20"></div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-0"></div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-lg leading-relaxed mb-4 text-gray-300">
                      Halo! Saya{" "}
                      <span className="text-cyan-400 font-semibold">
                        M Z Haikal Hamdani
                      </span>
                      , mahasiswa Sistem Informasi di Universitas Nusa Putra.
                      Saya sangat menyukai teknologi, pemrograman, dan analisis
                      data.
                    </p>
                    <p className="text-lg leading-relaxed mb-4 text-gray-300">
                      Dengan pengalaman dalam pemrograman, analisis data,
                      keamanan siber, dan modifikasi gim, saya memiliki beragam
                      keahlian. Sebelumnya saya pernah magang di{" "}
                      <span className="text-cyan-400 font-semibold">
                        PT. Jerbee Indonesia
                      </span>
                      , tempat saya memperoleh pengalaman berharga di industri
                      ini.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Saat ini saya sedang menempuh pendidikan di bidang Sistem
                      Informasi, setelah sebelumnya menempuh pendidikan Desain
                      Komunikasi Visual di universitas yang sama. Saya selalu
                      ingin memperluas pengetahuan dan menghadapi tantangan baru
                      di dunia teknologi.
                    </p>
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
