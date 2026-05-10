import type { Metadata } from "next"
import { Projects } from "@/components/sections/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and builds — web, data, and open source.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Projects />
    </div>
  )
}
