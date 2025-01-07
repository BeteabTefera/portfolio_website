'use client'
import {TypeAnimation} from "react-type-animation";
import {ArrowDownCircle} from "lucide-react";
import { Button } from "@/components/ui/button"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            <TypeAnimation
              sequence={["Hello, I'm Beteab!"]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Software Engineer skilled in web and mobile development, now exploring machine learning for innovative solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-100 transition-colors duration-300">
            <a href="#projects" className="flex items-center">
              View My Work
              <ArrowDownCircle className="w-6 h-6 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
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
