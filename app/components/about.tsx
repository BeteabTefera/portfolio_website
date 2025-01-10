import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { profileImage } from "../public/assets"
import { HeartHandshake } from "lucide-react"

export function About() {
  return (
    <ThemeProvider>
      <div className="flex flex-col md:flex-row items-center gap-8 mx-5">
        {/*<div className="md:w-1/2">
          <img src={profileImage} alt="Profile" className="rounded-full w-64 h-64 object-cover object-top mx-auto" />
        </div>*}
        <div className="dark:text-gray-300 md:w-1/2">
          <h3 className="dark:text-gray-300 text-2xl font-bold mb-4">
            Hey{<HeartHandshake/>} I&apos;m Beteab.</h3>
          <p className="dark:text-gray-300 mb-4">
          I am a passionate Computer Science student at St. Cloud State University, where I am pursuing a Bachelor&apos;s degree with a minor in Psychology. I aim to graduate in May 2025 with a solid foundation in software development, programming, data management, machine learning, and more. 
          </p>
          <p className="dark:text-gray-300 mb-4">
          I enjoy learning new technologies and frameworks, and my goal is to apply my knowledge and skills to contribute to innovative and impactful projects in the tech industry. I value lifelong learning, collaboration, and creativity, and I look forward to connecting with like-minded individuals and exploring the endless possibilities of this fascinating field.
          </p>
          <Button asChild>
            <a href="https://drive.google.com/file/d/1PTvbqdRV1dJTIg2EluQTnyepBWQZeDM5/view?usp=sharing.pdf" target="_blank" >View Resume</a>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  )
}

