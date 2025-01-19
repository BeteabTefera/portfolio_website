import { Contact } from "@/components/contact";
import { Nav } from "@/components/nav";
export default function Home() {
    return (
        <div className="py-[5rem]">
            <div>
                <Nav/>
            </div>
            <div className="px-4 py-14">
                {/*Contact Section */}
                {/*<h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>*/}
                <Contact/>
            </div>
        </div>
    );
}