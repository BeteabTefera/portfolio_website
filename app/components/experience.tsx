'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ThemeProvider } from "@/app/providers/theme-provider"

const experiences = [
  {
    company: "BI Worldwide",
    companyImage: "assets/BI-worldwide.png",
    positions: [
      {
        title: "Customer Technology Specialist",
        bulletPoints: [
          "Developed and maintained critical backend services",
          "Implemented new features for the company's main product",
          "Mentored junior developers and interns"
        ]
      },
      {
        title: "Project Adminstrator",
        bulletPoints: [
          "Assisted in the development of new features",
          "Participated in code reviews and team meetings",
          "Learned and applied best practices in software development"
        ]
      }
    ]
  },
  {
    company: "Ameriprise Financial",
    companyImage: "assets/Ameriprise.png",
    positions: [
      {
        title: "Cloud Engineering Technology Intern",
        bulletPoints: [
          "Analyzed large datasets to derive actionable insights",
          "Created data visualization dashboards for stakeholders",
          "Collaborated with cross-functional teams to improve data processes"
        ]
      }
    ]
  },
  {
    company: "30000 Feet",
    companyImage: "assets/30k.png",
    positions: [
      {
        title: "Programming Instructor",
        bulletPoints: [
          "Built responsive web applications using React and Node.js",
          "Optimized database queries for improved performance",
          "Implemented CI/CD pipelines for streamlined deployments"
        ]
      },
      {
        title: "Junior Web Developer",
        bulletPoints: [
          "Developed and maintained client websites",
          "Collaborated with designers to implement UI/UX improvements",
          "Assisted in troubleshooting and bug fixes"
        ]
      }
    ]
  }
]

export function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 3
  }
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage.lg >= experiences.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, experiences.length - itemsPerPage.lg) : prevIndex - 1
    )
  }
  return (
    <ThemeProvider>
      <div className="relative px-4 py-8">
        <div className="overflow-x-auto">
          <motion.div
            className="flex"
            animate={{ x: `calc(-${currentIndex * (100 / itemsPerPage.lg)}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <img src={experience.companyImage} alt={experience.company} className="w-12 h-12 object-contain" />
                      <CardTitle>{experience.company}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {experience.positions.map((position, posIndex) => (
                      <div key={posIndex} className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                        <ul className="list-disc list-inside mb-2">
                          {position.bulletPoints.slice(0, 3).map((point, pointIndex) => (
                            <li key={pointIndex} className="text-sm">{point}</li>
                          ))}
                        </ul>
                        {posIndex < experience.positions.length - 1 && (
                          <div className="flex justify-center items-center my-2">
                            <ArrowRight className="text-green-500" />
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10" 
          size="icon"
          variant="outline"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10" 
          size="icon"
          variant="outline"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </ThemeProvider>
  )
}

