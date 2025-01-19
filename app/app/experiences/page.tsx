import { Experiences } from "@/components/experience";
import { Nav } from "@/components/nav";
export default function Home() {
    return (
        <>
            <div>
                <Nav/>
            </div>
            <div className="px-4 py-8">
                {/*Experience Section */}
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <Experiences/>
            </div>
        </>
    )
}