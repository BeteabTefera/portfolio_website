import { About } from "@/components/about"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
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
      </div>
    </ThemeProvider>
  )
}
