import Link from "next/link"
import { HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12"
    >
      <h2 className="mb-6 flex flex-wrap items-center gap-2 text-2xl font-bold tracking-tight md:text-3xl">
        Hey, I&apos;m Beteab.{" "}
        <HeartHandshake className="inline h-8 w-8 text-primary" aria-hidden />
      </h2>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          I&apos;m a Computer Science graduate from St. Cloud State University (2025) with a minor
          in Psychology. Today I work full time as a{" "}
          <strong className="font-medium text-foreground">Cloud Infrastructure and Data Engineer</strong>{" "}
          at Ameriprise Financial — designing and operating cloud platforms, data pipelines, and the
          services that sit behind them. My day-to-day blends AWS infrastructure, data engineering,
          and backend work with clear communication across teams.
        </p>
        <p>
          Along the way I&apos;ve taught and mentored as a TA, shipped projects at internships and
          hackathons, and contributed to open source — experiences that still shape how I explain
          complex ideas and collaborate. I keep chasing new tools and patterns, and I care about
          building systems that stay understandable as they grow.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild size="lg" className="rounded-lg">
          <Link href="/resume">View resume</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-lg">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  )
}
