import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
export default function Home() {
    return (
        <div>
            <Nav/>
            {/* Projects Section */}
            <section id="projects" className="py-8">
                <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                <Projects />
                </div>
            </section>
        </div>
    )
}