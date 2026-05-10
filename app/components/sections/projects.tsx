"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/content/projects"
import { projects } from "@/content/projects"
import { cn } from "@/lib/utils"

function projectInitials(title: string) {
  const cleaned = title.replace(/[^a-zA-Z0-9]/g, "")
  if (cleaned.length >= 2) return cleaned.slice(0, 2).toUpperCase()
  return cleaned.slice(0, 1).toUpperCase() || "?"
}

function ProjectCover({ project }: { project: Project }) {
  const src = project.image

  if (src?.startsWith("/")) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-muted via-muted/90 to-primary/15",
      )}
      aria-hidden
    >
      <span className="select-none text-4xl font-bold tracking-tight text-muted-foreground/45 md:text-5xl">
        {projectInitials(project.title)}
      </span>
      <span className="absolute bottom-3 right-3 rounded bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
        Screenshot soon
      </span>
    </div>
  )
}

export function Projects() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h1>
        <p className="max-w-2xl text-muted-foreground">
          A selection of things I&apos;ve built — from early experiments to production-minded work
          and open source. Project thumbnails are placeholders until screenshots live in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">public/assets/</code>.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Card className="flex h-full flex-col overflow-hidden border-border/80 shadow-sm transition-shadow hover:shadow-md">
              <ProjectCover project={project} />
              <CardHeader className="gap-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-4 text-pretty">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-wrap gap-2 pb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
