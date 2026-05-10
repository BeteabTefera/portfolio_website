import { About } from "@/components/sections/about"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <About />
      </div>
    </>
  )
}
