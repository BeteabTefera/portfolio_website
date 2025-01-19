import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
export default function Home() {
    return (
        <div className="py-[5rem]">
            <div>
                <Nav/>
            </div>
            <div className="px-4 py-14">
                {/*Projects Section */}
                {/*<h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>*/}
                <Projects/>
            </div>
        </div>
    )
}