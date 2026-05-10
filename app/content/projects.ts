export type Project = {
  title: string
  description: string
  technologies: string[]
  /**
   * Optional screenshot: path under `public/`, e.g. `/assets/projects/anime-hub.png`.
   * Omit while assets are unavailable — a placeholder cover is shown instead.
   */
  image?: string
}

export const projects: Project[] = [
  {
    title: "Anime Hub",
    description:
      "Anime Hub is a React-based web app that lets users sign up, log in, and explore anime content. It features detailed anime pages and comment sections, with authentication and database management powered by Supabase and PostgreSQL.",
    technologies: ["React", "Supabase (authentication, API)", "Node.js", "PostgreSQL"],
  },
  {
    title: "Capture Cam",
    description:
      "A Python application that can interpret license plate numbers from an image, and compares to a DB. Utilized Python, OpenCV, PyTesseract, SQLite, Tkinter Winner of the Best Data Visualization award at the University of Iowa Hackathon 2022",
    technologies: ["Python", "OpenCV", "PyTesseract", "SQLite", "Tkinter"],
  },
  {
    title: "Insured Contractors",
    description:
      "Insured Contractors is a web app that connects contractors with customers by showcasing verified insurance credentials and service offerings. Built using MongoDB, Node.js, Next.js, Tailwind CSS, and TypeScript, it provides a user-friendly interface for seamless interaction. This project won the WINNER Most Creative Use of GitHub category at HackUIowa 2023",
    technologies: ["React", "MongoDB", "Node.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Weather-App",
    description:
      "A web application, Weather app, written in HTML, CSS, and JavaScript using the APIs for fetching weather information from openweathermap.org Simple static web app but one of the first applications that got me into the world of Software Development and have no shame showcasing it : )",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
  },
  {
    title: "Oyster",
    description:
      "I am an active contributor to ColorStack's open-source software, Oyster, which enhances the community experience for members of ColorStack. My work included adding features and helping in the developing of the Member Profile feature, enabling users to manage their information and connect with others, and assisting with the Admin Dashboard for internal workflow management.",
    technologies: [
      "BullMQ",
      "Kysely",
      "Node.js",
      "PostgreSQL",
      "Railway",
      "Redis",
      "Remix",
      "React",
      "Tailwind CSS",
      "Turborepo",
      "TypeScript",
      "Zod",
    ],
  },
]
