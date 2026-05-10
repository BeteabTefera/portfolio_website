export type Position = {
  title: string
  employmentType: string
  dateRange: string
  bulletPoints: string[]
  skills: string[]
}

export type Experience = {
  company: string
  companyImage: string
  location: string
  workType: string
  positions: Position[]
}

export const experiences: Experience[] = [
  {
    company: "Ameriprise Financial Services, LLC",
    companyImage: "/assets/Ameriprise.png",
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
          "Collaborated on data modeling and BI reporting for trading/advisory systems",
        ],
        skills: ["AWS", "Lambda", "S3", "Terraform", "Python", "PySpark", "REST APIs", "SQL"],
      },
      {
        title: "Software Engineering Technology Intern",
        employmentType: "Internship",
        dateRange: "May 2024 - Aug 2025",
        bulletPoints: [
          "Built internal web tools using React, TypeScript, and Node.js",
          "Automated data validation and ETL tasks with Python",
          "Participated in Agile ceremonies and cross-team demos",
        ],
        skills: ["React", "TypeScript", "Node.js", "Git", "Agile"],
      },
    ],
  },
  {
    company: "BI WORLDWIDE",
    companyImage: "/assets/BI-worldwide.png",
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
          "Delivered enhancements as part of an agile product team",
        ],
        skills: ["PL/SQL", "Oracle SQL Developer", "Git", "Agile"],
      },
      {
        title: "Project Administrator",
        employmentType: "Full-time",
        dateRange: "Jan 2023 - Jan 2024",
        bulletPoints: [
          "Coordinated development tasks and tracked project milestones",
          "Conducted QA testing and supported release management",
          "Worked closely with engineers to refine requirements",
        ],
        skills: ["Python", "Data Engineering", "Jira"],
      },
    ],
  },
  {
    company: "30,000 Feet",
    companyImage: "/assets/30k.png",
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
          "Designed hands-on labs that covered front-end, back-end, and CI/CD best practices",
        ],
        skills: ["React", "Node.js", "CI/CD", "Git"],
      },
    ],
  },
]
