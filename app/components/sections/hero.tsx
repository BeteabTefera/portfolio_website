"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { ArrowDownCircle } from "lucide-react"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 pb-16 pt-10 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-chart-4/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-chart-3/40 blur-sm" />
          <Image
            src="/assets/headshot-img-2.png"
            alt={`Portrait of ${site.name}`}
            width={176}
            height={176}
            priority
            className="relative rounded-full border-2 border-border object-cover object-top shadow-xl"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Hello, I&apos;m
          </p>
          <h1 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <TypeAnimation
              sequence={[site.name, 1200, "Cloud & Data Engineer", 1200, site.name]}
              wrapper="span"
              speed={45}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.tagline}
          </p>
        </div>

        <Link
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-primary transition-colors hover:text-primary/80"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            About me
          </span>
          <ArrowDownCircle className="h-10 w-10 animate-bounce" strokeWidth={1.25} />
        </Link>
      </div>
    </section>
  )
}
