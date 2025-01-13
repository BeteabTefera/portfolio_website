'use client';
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircle } from "lucide-react";
import { ThemeProvider } from "@/app/providers/theme-provider";
import Image from "next/image";

export function Hero() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Image
              src="/assets/notion-style-avatar.svg"
              alt="Profile"
              width={256}
              height={256}
              className="rounded-full mx-auto object-cover object-top"
            />
            <TypeAnimation
              sequence={[
                'Beteab Tefera',
                1000,
                'Software Engineer',
                1000,
                'Beteab Tefera'
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '1em', 
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
        <a href="#about" className="pb-9 flex items-center justify-center">
          <ArrowDownCircle className="w-10 h-10 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600" />
        </a>
      </div>
    </ThemeProvider>
  );
}
