'use client'
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle } from "lucide-react";
import { ThemeProvider } from "@/app/providers/theme-provider";

export function Hero() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <img src="../assets/notion-style-avatar.svg" alt="Profile" className="rounded-full w-64 h-64 object-cover object-top mx-auto" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Beteab Tefera',
                1000,
                'Software Engineer',
                1000,
                'Beteab Tefera'
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '1.5em', 
                display: 'inline-block', 
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                lineHeight: '1.2',
              }}
              repeat={0}
            />
            
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Software Engineer passionate about Technology, Driven by Creativity and Impactful Solutions
          </p>
        </div>
        
        {/* Arrow Icon Below */}
        <a href="#projects" className="flex items-center justify-center">
          <ArrowDownCircle className="w-10 h-10 text-blue-600 hover:text-blue-800" />
        </a>
      </div>
    </ThemeProvider>
  );
}
