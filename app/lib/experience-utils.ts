const monthMap: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
}

export function parseDateString(dateString: string): Date | null {
  const trimmed = dateString.trim()
  if (/^(present|now)$/i.test(trimmed)) {
    return new Date()
  }

  const [month, year] = trimmed.split(" ")
  const monthIndex = monthMap[month]
  const yearNum = Number(year)

  if (monthIndex === undefined || Number.isNaN(yearNum)) return null
  return new Date(yearNum, monthIndex, 1)
}

export function parseDateRange(dateRange: string) {
  const [startRaw, endRaw] = dateRange.split(" - ").map((s) => s.trim())
  const start = parseDateString(startRaw)
  const end = parseDateString(endRaw ?? "")
  return {
    start,
    end: end ?? start,
  }
}

export function differenceInMonths(start: Date, end: Date) {
  const years = end.getFullYear() - start.getFullYear()
  const months = end.getMonth() - start.getMonth()
  return years * 12 + months
}

export function formatDuration(months: number) {
  if (months <= 0) return "0 mos"
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  const parts: string[] = []

  if (years > 0) {
    parts.push(`${years} yr${years === 1 ? "" : "s"}`)
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} mo${remainingMonths === 1 ? "" : "s"}`)
  }

  return parts.join(" ")
}

export function computeTotalDuration(positionDateRanges: string[]) {
  const parsed = positionDateRanges
    .map((range) => parseDateRange(range))
    .filter((r) => r.start)

  if (!parsed.length) return ""

  const earliest = parsed.reduce((prev, curr) =>
    curr.start && prev.start && curr.start < prev.start ? curr : prev,
  )
  const latest = parsed.reduce((prev, curr) =>
    curr.end && prev.end && curr.end > prev.end ? curr : prev,
  )

  if (!earliest.start || !latest.end) return ""

  const months = differenceInMonths(earliest.start, latest.end) + 1
  return formatDuration(months)
}

export const skillColorMap: Record<string, string> = {
  AWS: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  Lambda: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  S3: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  Terraform: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200",
  Python: "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200",
  PySpark: "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200",
  "REST APIs": "bg-lime-100 text-lime-800 dark:bg-lime-950/50 dark:text-lime-200",
  Node: "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-200",
  "Node.js": "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-200",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200",
  TypeScript: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200",
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-200",
  SQL: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  PostgreSQL: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200",
  Docker: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  Kubernetes: "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200",
  "CI/CD": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/50 dark:text-fuchsia-200",
  Git: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  Agile: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200",
  Jira: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200",
  "Data Engineering": "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200",
}

export function getSkillClasses(skill: string) {
  const base = "rounded px-2 py-1 text-xs font-medium "
  const color =
    skillColorMap[skill] ?? "bg-muted/40 text-muted-foreground"
  return `${base}${color}`
}
