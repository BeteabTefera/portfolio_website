'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Anime Hub",
    description: "Anime Hub is a React-based web app that lets users sign up, log in, and explore anime content. It features detailed anime pages and comment sections, with authentication and database management powered by Supabase and PostgreSQL.",
    technologies: ["React", "Supabase (authentication, API)", "Node.js", "PostgreSQL"],
    image: "https://storage.googleapis.com/arcane-ion-136909.appspot.com/user_id_114_proj_id_2_uw0fz.png"
  },
  {
    title: "Capture Cam",
    description: "A Python application that can interpret license plate numbers from an image, and compares to a DB. Utilized Python, OpenCV, PyTesseract, SQLite, Tkinter Winner of the Best Data Visualization award at the University of Iowa Hackathon 2022",
    technologies: ["Python", "OpenCV", "PyTesseract", "SQLite", "Tkinter"],
    image: "https://storage.googleapis.com/arcane-ion-136909.appspot.com/user_id_114_proj_id_3_aojkjh.png"
  },
  {
    title: "Insured Contractors",
    description: "Insured Contractors is a web app that connects contractors with customers by showcasing verified insurance credentials and service offerings. Built using MongoDB, Node.js, Next.js, Tailwind CSS, and TypeScript, it provides a user-friendly interface for seamless interaction. This project won the WINNER Most Creative Use of GitHub category at HackUIowa 2023",
    technologies: ["React","MongoDB", "Node.js", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://storage.googleapis.com/arcane-ion-136909.appspot.com/user_id_114_proj_id_1_tn72x.png"
  },
  {
    title: "Weather-App",
    description: "A web application, Weather app, written in HTML, CSS, and JavaScript using the APIs for fetching weather information from openweathermap.org Simple static web app but one of the first applications that got me into the world of Software Development and have no shame showcasing it : )",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    image: "https://storage.googleapis.com/arcane-ion-136909.appspot.com/user_id_114_proj_id_4_c9oibf.png"
  },
  {
    title: "Oyster",
    description: "I am an active contributor to ColorStack's open-source software, Oyster, which enhances the community experience for members of ColorStack. My work included adding features and helping in the developing of the Member Profile feature, enabling users to manage their information and connect with others, and assisting with the Admin Dashboard for internal workflow management.",
    technologies: ["BullMQ", "Kysely", "Node.js", "PostgreSQL", "Railway", "Redis", "Remix", "React", "Tailwind CSS", "Turborepo", "TypeScript", "Zod"],
    image: "https://storage.googleapis.com/arcane-ion-136909.appspot.com/user_id_114_proj_id_5_pe95e.png"
  }
]

export function Projects() {
  return (
    <ThemeProvider>
      <div className="relative px-5 py-0">
        <div className="w-full overflow-x-auto pb-6 md:pb-0">
          <motion.div
            className="flex"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                >
                  <Card className="w-80 md:w-auto flex-shrink-0">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  )
}

