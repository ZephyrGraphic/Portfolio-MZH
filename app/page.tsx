import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Statistics from "@/components/statistics"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import BackgroundGrid from "@/components/background-grid"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundGrid />
      <CursorEffect />
      <PageTransition>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Statistics />
        <Footer />
        <BackToTop />
      </PageTransition>
    </main>
  )
}

