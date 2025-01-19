import { Contact } from "@/components/contact";
import { Nav } from "@/components/nav";
export default function Home() {
    return (
    <div>
        <Nav/>
        {/* Contact Section */}
        <section id="contact" className="py-10">
          <div className="container mx-auto">
            <Contact />
          </div>
        </section>
    </div>);
}