import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-black py-20">
        <Hero/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-2">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <Projects />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Where to Find Me</h2>
          <Contact />
        </div>
      </section>
    </div>
  )
}
