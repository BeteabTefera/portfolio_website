'use client'
import {TypeAnimation} from "react-type-animation";
import { Button } from "@/components/ui/button"
import {ArrowDownCircle} from "lucide-react";
export function Hero (){
    return(
        <div>
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                    <TypeAnimation
                    sequence={["Hello, I'm Beteab!"]}
                    wrapper="span"
                    speed={50}
                    repeat={1}
                    />
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Software Engineer skilled in web and mobile development, now exploring machine learning for innovative solutions.
                </p>
                <Button asChild >
                    <a href="#projects" className="flex items-center">
                    View My Work
                    <ArrowDownCircle className="w-6 h-6 ml-2" />
                    </a>
                </Button>
            </div>
        </div>
    )
};