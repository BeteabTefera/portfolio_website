import type { Metadata } from "next"
import Link from "next/link"
import { journeyBlocks } from "@/content/journey"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Journey",
  description:
    "From earlier chapters to engineering — story, hobbies, and space for future writing.",
}

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-14 space-y-4 border-b border-border pb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Less polished, more personal
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Journey</h1>
        <p className="text-lg text-muted-foreground">
          A living page for the arc from home to here — migration, school, the job search, and life
          outside work. I&apos;ll keep refining copy and add photos when they&apos;re ready. For
          roles and stack details, see{" "}
          <Link href="/experiences" className="font-medium text-primary underline-offset-4 hover:underline">
            Experience
          </Link>
          .
        </p>
      </header>

      <ol className="relative space-y-0 border-l border-border pl-8 md:pl-10">
        {journeyBlocks.map((block, i) => {
          const Icon = block.icon
          return (
            <li key={block.id} className="relative pb-14 last:pb-2">
              <span
                className={cn(
                  "absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background md:-left-[25px] md:h-11 md:w-11",
                )}
                aria-hidden
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </span>
              <div className="space-y-4 pt-0.5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-medium tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {block.title}
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  {block.paragraphs.map((p, j) => (
                    <p key={`${block.id}-${j}`}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <section className="mt-16 rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
        <h3 className="mb-2 text-lg font-semibold">Blog &amp; updates</h3>
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          No posts linked yet — when I publish notes or articles, they&apos;ll show up here or via a
          dedicated list. For now,{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            reach out
          </Link>{" "}
          if you want to connect.
        </p>
      </section>
    </div>
  )
}
