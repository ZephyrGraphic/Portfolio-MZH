import Hero from "@/components/hero"
import About from "@/components/about"
import Statistics from "@/components/statistics"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import BackgroundGrid from "@/components/background-grid"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import HomeSections from "@/components/home-sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundGrid />
      <CursorEffect />
      <PageTransition>
        <Hero />
        <About />
        <HomeSections />
        <Statistics />
        <Footer />
        <BackToTop />
      </PageTransition>
    </main>
  )
}

