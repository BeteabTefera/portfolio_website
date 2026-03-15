import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/app/providers/theme-provider"
//import { profileImage } from "../public/assets"
import { HeartHandshake } from "lucide-react"

export function About() {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="dark:text-gray-300 md:w-1/2 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="inline-block dark:text-gray-300 text-3xl font-extrabold mb-6 text-center">
            Hey I&apos;m Beteab. {<HeartHandshake />}
          </h3>
          <p className="dark:text-gray-300 mb-4 text-block leading-relaxed">
            I am a passionate graduate of St. Cloud State University, where I earned a Computer Science Bachelor&apos;s degree with a minor in Psychology in 2025. I am currently a Cloud/Data Software Engineer at Ameriprise Financial and a Teaching Assistant at St. Cloud State University, where I have the opportunity to share my knowledge and experience with students in the field of computer science. My academic background and professional experience have equipped me with a strong foundation in software development, cloud computing, and data engineering, and I am eager to continue growing and contributing to the tech community.
          </p>
          <p className="dark:text-gray-300 mb-6 text-block leading-relaxed">
            I enjoy learning new technologies and frameworks, and my goal is to apply my knowledge and skills to contribute to innovative and impactful projects in the tech industry. I value lifelong learning, collaboration, and creativity, and I look forward to connecting with like-minded individuals and exploring the endless possibilities of this fascinating field.
          </p>
          <div className="text-center">
            <Button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              <a 
                href="https://drive.google.com/file/d/1PTvbqdRV1dJTIg2EluQTnyepBWQZeDM5/view?usp=sharing.pdf" 
                target="_blank" 
                >
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

