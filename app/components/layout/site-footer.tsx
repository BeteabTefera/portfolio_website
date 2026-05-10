import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { site } from "@/lib/site"

const iconClass =
  "text-muted-foreground transition-colors hover:text-primary"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className={iconClass}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
