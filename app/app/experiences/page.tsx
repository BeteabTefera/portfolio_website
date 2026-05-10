import type { Metadata } from "next"
import { Experiences } from "@/components/sections/experience"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience in cloud, data, and software engineering.",
}

export default function ExperiencesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Experiences />
    </div>
  )
}
