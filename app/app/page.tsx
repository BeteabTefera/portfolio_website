import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Experiences } from "@/components/experience"
import { ThemeProvider } from "./providers/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        {/* Nav Section */}
        <section className="py-8">
          <Nav/>
        </section>
        {/* Hero Section */}
        <section className="py-8">
          <Hero/>
        </section>
        {/* About Section */}
        <section id="about" className="py-10">
          <div className="container mx-auto">
            <About />
          </div>
        </section>
        {/*Experience Section */}
        <section id="experience" className="py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <Experiences/>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10">
          <div className="container mx-auto">
            <Contact />
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
