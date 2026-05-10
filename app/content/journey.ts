import type { LucideIcon } from "lucide-react"
import { BookOpen, Briefcase, Coffee, Globe2, Heart, Plane } from "lucide-react"

export type JourneyBlock = {
  id: string
  title: string
  icon: LucideIcon
  paragraphs: string[]
}

/**
 * Photos can be dropped into `public/assets/journey/` later
 */
export const journeyBlocks: JourneyBlock[] = [
  {
    id: "roots",
    title: "Where I started",
    icon: Globe2,
    paragraphs: [
      "I grew up with a deep curiosity about how things work and a habit of sticking with hard problems. Those roots—patience, adaptability, and curiosity—still define how I learn and build today.",
      "This section is a placeholder for stories and photos from home and family that shaped me; I’ll expand it as I curate images and memories worth sharing.",
    ],
  },
  {
    id: "move",
    title: "A new chapter in the States",
    icon: Plane,
    paragraphs: [
      "Moving to the United States meant starting over in many ways: language, culture, academics, and career—all at once. It taught me resilience and how to ask for help without losing pride in the work.",
      "I’m leaving room here for the specifics of that transition—the cities, the people who helped, and the moments that felt impossible until they weren’t.",
    ],
  },
  {
    id: "grind",
    title: "School, side projects, and showing up",
    icon: BookOpen,
    paragraphs: [
      "Computer Science at St. Cloud State (with a Psychology minor) gave me both technical depth and a lens on how people use software. Outside class I chased hackathons, teaching, and messy side projects—the kind that fail quietly but teach loudly.",
      "That stretch between “learning” and “employed” was long hours, applications, and incremental proof that I could ship. I’ll flesh this out with concrete milestones and maybe a timeline.",
    ],
  },
  {
    id: "career",
    title: "Into engineering",
    icon: Briefcase,
    paragraphs: [
      "Today I work full time in cloud infrastructure and data engineering—designing and operating pipelines, services, and platforms where reliability and clarity matter. Internships and earlier roles built the runway; the day-to-day now is ownership, collaboration, and continuous improvement.",
      "More detail on teams, stacks, and wins lives on the Experience page; this story is the human thread behind the bullets.",
    ],
  },
  {
    id: "beyond",
    title: "Hobbies, rest, and writing",
    icon: Coffee,
    paragraphs: [
      "Away from the keyboard I recharge with things that have nothing to prove—music, fitness, time with people I care about, and whatever hobby has my attention this season.",
      "I’d like to link short posts or notes here when I start publishing regularly; for now consider this the stub for a future blog roll.",
    ],
  },
  {
    id: "community",
    title: "Giving back",
    icon: Heart,
    paragraphs: [
      "Teaching and community work remind me that tech is made of people. Whether through TA hours, open source, or mentorship, I want growth to be shared—not hoarded.",
      "Open-source contributions (like Oyster) sit alongside formal roles; I’ll call out specific efforts here over time.",
    ],
  },
]
