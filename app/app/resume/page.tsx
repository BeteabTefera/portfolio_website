import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé PDF — view in the browser or download.",
}

export default function ResumePage() {
  const pdfPath = path.join(process.cwd(), "public", "assets", "resume.pdf")
  const hasPdf = fs.existsSync(pdfPath)
  const src = site.resumePdfPath

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="mb-8 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Resume</h1>
          <p className="max-w-xl text-muted-foreground">
            View my résumé below in the embedded PDF viewer, or download a copy for offline reading.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {hasPdf ? (
            <Button asChild variant="default" className="rounded-lg">
              <a href={src} download={`${site.name.replace(/\s+/g, "-")}-resume.pdf`}>
                <Download className="mr-2 h-4 w-4" aria-hidden />
                Download PDF
              </a>
            </Button>
          ) : null}
          <Button asChild variant="outline" className="rounded-lg">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </header>

      {hasPdf ? (
        <div className="overflow-hidden rounded-xl border border-border bg-muted shadow-lg">
          <iframe
            title={`${site.name} resume`}
            src={`${src}#view=FitH`}
            className="h-[min(85vh,920px)] w-full bg-background"
          />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 px-6 py-16 text-center">
          <p className="mx-auto mb-2 max-w-md text-muted-foreground">
            Add your résumé file at{" "}
            <code className="rounded-md bg-muted px-2 py-1 text-sm text-foreground">
              public/assets/resume.pdf
            </code>{" "}
            to enable the viewer and download button.
          </p>
          <p className="text-sm text-muted-foreground">
            After you drop the PDF in, refresh this page — no code changes required.
          </p>
        </div>
      )}
    </div>
  )
}
