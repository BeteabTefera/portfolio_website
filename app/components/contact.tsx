import { ThemeProvider } from "@/app/providers/theme-provider"
import { Linkedin, Mail, Github } from 'lucide-react';

export function Contact() {
  return (
    <ThemeProvider>
        <div className="max-w-md mx-auto">
            {/*Here I will put logos for Linkedin, Gmail, Github*/}
            <div className="flex justify-center gap-4 mb-8">
                <a href="https://www.linkedin.com/in/beteabtefera/" target="_blank">
                    <Linkedin size={40}/>
                </a>
                <a href="mailto:beteabtefera@gmail.com" target="_blank">
                    <Mail size = {40}/>
                </a>
                <a href="https://github.com/BeteabTefera" target="_blank">
                    <Github size = {40}/>
                </a>
            </div>
        </div>
    </ThemeProvider>
  )
}

