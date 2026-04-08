import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Milestones } from "@/components/milestones"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { PDFViewer } from "@/components/pdf-viewer"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Milestones />
      <Projects />
      <Education />
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Professional Documents
          </h2>
          <p className="text-gray-400 text-lg">Check out my resume and project proposals</p>
        </div>
        <PDFViewer />
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
