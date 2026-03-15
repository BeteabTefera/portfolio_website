'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/app/providers/theme-provider"

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
  Dec: 11
}

function parseDateString(dateString: string): Date | null {
  const trimmed = dateString.trim()
  if (/^(present|now)$/i.test(trimmed)) {
    return new Date()
  }

  const [month, year] = trimmed.split(' ')
  const monthIndex = monthMap[month]
  const yearNum = Number(year)

  if (monthIndex === undefined || Number.isNaN(yearNum)) return null
  return new Date(yearNum, monthIndex, 1)
}

function parseDateRange(dateRange: string) {
  const [startRaw, endRaw] = dateRange.split(' - ').map((s) => s.trim())
  const start = parseDateString(startRaw)
  const end = parseDateString(endRaw ?? '')
  return {
    start,
    end: end ?? start
  }
}

function differenceInMonths(start: Date, end: Date) {
  const years = end.getFullYear() - start.getFullYear()
  const months = end.getMonth() - start.getMonth()
  return years * 12 + months
}

function formatDuration(months: number) {
  if (months <= 0) return '0 mos'
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  const parts: string[] = []

  if (years > 0) {
    parts.push(`${years} yr${years === 1 ? '' : 's'}`)
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} mo${remainingMonths === 1 ? '' : 's'}`)
  }

  return parts.join(' ')
}

const skillColorMap: Record<string, string> = {
  AWS: 'bg-amber-100 text-amber-800',
  Lambda: 'bg-amber-100 text-amber-800',
  S3: 'bg-amber-100 text-amber-800',
  Terraform: 'bg-emerald-100 text-emerald-800',
  Python: 'bg-sky-100 text-sky-800',
  PySpark: 'bg-sky-100 text-sky-800',
  'REST APIs': 'bg-lime-100 text-lime-800',
  Node: 'bg-green-100 text-green-800',
  'Node.js': 'bg-green-100 text-green-800',
  React: 'bg-sky-100 text-sky-800',
  TypeScript: 'bg-indigo-100 text-indigo-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  SQL: 'bg-amber-100 text-amber-800',
  'PostgreSQL': 'bg-indigo-100 text-indigo-800',
  Docker: 'bg-slate-100 text-slate-800',
  Kubernetes: 'bg-sky-100 text-sky-800',
  'CI/CD': 'bg-fuchsia-100 text-fuchsia-800',
  Git: 'bg-slate-100 text-slate-800',
  Agile: 'bg-emerald-100 text-emerald-800',
  Jira: 'bg-indigo-100 text-indigo-800',
  'Data Engineering': 'bg-emerald-100 text-emerald-800'
}

function getSkillClasses(skill: string) {
  const base = 'rounded px-2 py-1 text-xs font-medium '
  const color = skillColorMap[skill] ?? 'bg-muted/40 text-muted-foreground'
  return `${base}${color}`
}

function computeTotalDuration(positionDateRanges: string[]) {
  const parsed = positionDateRanges
    .map((range) => parseDateRange(range))
    .filter((r) => r.start)

  if (!parsed.length) return ''

  const earliest = parsed.reduce((prev, curr) =>
    curr.start && prev.start && curr.start < prev.start ? curr : prev
  )
  const latest = parsed.reduce((prev, curr) =>
    curr.end && prev.end && curr.end > prev.end ? curr : prev
  )

  if (!earliest.start || !latest.end) return ''

  const months = differenceInMonths(earliest.start, latest.end) + 1
  return formatDuration(months)
}

const experiences = [
  {
    company: "Ameriprise Financial Services, LLC",
    companyImage: "assets/Ameriprise.png",
    location: "Minneapolis, Minnesota, United States",
    workType: "Hybrid",
    positions: [
      {
        title: "Cloud & Data Engineering - LDP Associate",
        employmentType: "Full-time",
        dateRange: "Jun 2025 - Present",
        bulletPoints: [
          "Designed and operated AWS data pipelines using Glue, Lambda, and S3",
          "Built and optimized REST APIs and backend services in Python",
          "Collaborated on data modeling and BI reporting for trading/advisory systems"
        ],
        skills: ["AWS", "Lambda", "S3", "Terraform", "Python", "PySpark", "REST APIs", "SQL"]
      },
      {
        title: "Software Engineering Technology Intern",
        employmentType: "Internship",
        dateRange: "May 2024 - Aug 2025",
        bulletPoints: [
          "Built internal web tools using React, TypeScript, and Node.js",
          "Automated data validation and ETL tasks with Python",
          "Participated in Agile ceremonies and cross-team demos"
        ],
        skills: ["React", "TypeScript", "Node.js", "Git", "Agile"]
      }
    ]
  },
  {
    company: "BI WORLDWIDE",
    companyImage: "assets/BI-worldwide.png",
    location: "Edina, Minnesota, United States",
    workType: "Hybrid",
    positions: [
      {
        title: "Customer Technology Specialist",
        employmentType: "Full-time",
        dateRange: "Jan 2024 - Jun 2025",
        bulletPoints: [
          "Designed and maintained PL/SQL routines for core product workflows",
          "Optimized Oracle SQL queries for reporting and analytics",
          "Delivered enhancements as part of an agile product team"
        ],
        skills: ["PL/SQL", "Oracle SQL Developer", "Git", "Agile"]
      },
      {
        title: "Project Administrator",
        employmentType: "Full-time",
        dateRange: "Jan 2023 - Jan 2024",
        bulletPoints: [
          "Coordinated development tasks and tracked project milestones",
          "Conducted QA testing and supported release management",
          "Worked closely with engineers to refine requirements"
        ],
        skills: ["Python", "Data Engineering", "Jira"]
      }
    ]
  },
  {
    company: "30,000 Feet",
    companyImage: "assets/30k.png",
    location: "",
    workType: "Part-time",
    positions: [
      {
        title: "Programming Instructor",
        employmentType: "Part-time",
        dateRange: "Nov 2022 - Aug 2023",
        bulletPoints: [
          "Built and taught full-stack web app projects using React and Node.js",
          "Guided students through Git workflows, testing, and deployments",
          "Designed hands-on labs that covered front-end, back-end, and CI/CD best practices"
        ],
        skills: ["React", "Node.js", "CI/CD", "Git"]
      }
    ]
  }
]

export function Experiences() {
  const experiencesWithDuration = experiences.map((experience) => {
    const totalDuration = computeTotalDuration(
      experience.positions.map((position) => position.dateRange)
    )
    return {
      ...experience,
      totalDuration
    }
  })

  return (
    <ThemeProvider>
      <div className="space-y-8 px-4 py-8">
        {experiencesWithDuration.map((experience) => (
          <Card key={experience.company} className="overflow-hidden">
            <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={experience.companyImage}
                  alt={experience.company}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <CardTitle>{experience.company}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {experience.location && <span>{experience.location}</span>}
                    {experience.location && experience.workType && <span className="mx-2">·</span>}
                    {experience.workType && <span>{experience.workType}</span>}
                    {experience.totalDuration && (
                      <>
                        {(experience.location || experience.workType) && <span className="mx-2">·</span>}
                        <span>{experience.totalDuration}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

            </CardHeader>

            <CardContent className="space-y-6">
              {experience.positions.map((position) => (
                <div key={position.title} className="grid gap-4 md:grid-cols-[180px_1fr]">
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium">{position.dateRange}</div>
                    <div>{formatDuration(
                      differenceInMonths(
                        parseDateRange(position.dateRange).start ?? new Date(),
                        parseDateRange(position.dateRange).end ?? new Date()
                      ) + 1
                    )}</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold">{position.title}</h3>
                      {position.employmentType && (
                        <span className="rounded-full bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                          {position.employmentType}
                        </span>
                      )}
                    </div>

                    {position.bulletPoints?.length ? (
                      <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                        {position.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}

                    {position.skills?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <span key={skill} className={getSkillClasses(skill)}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </ThemeProvider>
  )
}

