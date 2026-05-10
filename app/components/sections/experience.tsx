"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/content/experience"
import {
  computeTotalDuration,
  differenceInMonths,
  formatDuration,
  getSkillClasses,
  parseDateRange,
} from "@/lib/experience-utils"

export function Experiences() {
  const experiencesWithDuration = experiences.map((experience) => ({
    ...experience,
    totalDuration: computeTotalDuration(
      experience.positions.map((position) => position.dateRange),
    ),
  }))

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Experience</h1>
        <p className="max-w-2xl text-muted-foreground">
          Roles that shaped how I build software — cloud, data, and full-stack delivery.
        </p>
      </header>

      <div className="space-y-8">
        {experiencesWithDuration.map((experience) => (
          <Card key={experience.company} className="overflow-hidden border-border/80 shadow-sm">
            <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={experience.companyImage}
                    alt={experience.company}
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{experience.company}</CardTitle>
                  <div className="mt-1 flex flex-wrap gap-x-2 text-sm text-muted-foreground">
                    {experience.location && <span>{experience.location}</span>}
                    {experience.location && experience.workType && (
                      <span aria-hidden className="text-border">
                        ·
                      </span>
                    )}
                    {experience.workType && <span>{experience.workType}</span>}
                    {experience.totalDuration && (
                      <>
                        {(experience.location || experience.workType) && (
                          <span aria-hidden className="text-border">
                            ·
                          </span>
                        )}
                        <span>{experience.totalDuration}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {experience.positions.map((position) => {
                const range = parseDateRange(position.dateRange)
                const durationMonths =
                  range.start && range.end
                    ? differenceInMonths(range.start, range.end) + 1
                    : 0

                return (
                  <div
                    key={`${experience.company}-${position.title}`}
                    className="grid gap-6 border-t border-border/60 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,160px)_1fr]"
                  >
                    <div className="text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">{position.dateRange}</div>
                      <div>{formatDuration(durationMonths)}</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h2 className="text-lg font-semibold">{position.title}</h2>
                        {position.employmentType && (
                          <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                            {position.employmentType}
                          </span>
                        )}
                      </div>

                      {position.bulletPoints?.length ? (
                        <ul className="ml-4 list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {position.bulletPoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}

                      {position.skills?.length ? (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {position.skills.map((skill) => (
                            <span key={skill} className={getSkillClasses(skill)}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
