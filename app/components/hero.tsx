'use client'
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle } from "lucide-react";
import { ThemeProvider } from "@/app/providers/theme-provider";

export function Hero() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            <TypeAnimation
              sequence={["Hello, I'm Beteab!"]}
              wrapper="span"
              speed={75}
              repeat={1}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            <TypeAnimation
              sequence={["Software Engineer skilled in cloud, web, mobile development, data engineering now exploring machine learning for innovative solutions."]}
              wrapper="span"
              speed={90}
              repeat={1}
            />
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
