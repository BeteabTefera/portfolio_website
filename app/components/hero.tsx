'use client'
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle } from "lucide-react";
import { ThemeProvider } from "@/app/providers/theme-provider";

export function Hero() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="container mx-auto">
          <div className="md:w-1/2">
            <img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxNCwibm9zZSI6MCwibW91dGgiOjksImV5ZXMiOjYsImV5ZWJyb3dzIjoxNSwiZ2xhc3NlcyI6MCwiaGFpciI6MywiYWNjZXNzb3JpZXMiOjcsImRldGFpbHMiOjAsImJlYXJkIjoxNCwiZmxpcCI6MCwiY29sb3IiOiIjYmZiZmJmIiwic2hhcGUiOiJjaXJjbGUifQ==" alt="Profile" className="rounded-full w-64 h-64 object-cover object-top mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Beteab Tefera',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '2em', 
                display: 'inline-block', 
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                lineHeight: '1.2',
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Software Engineer BUILDING INNOVATIVE DIGITAL SOLUTIONS
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
