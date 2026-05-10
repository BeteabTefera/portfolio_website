import type { Metadata } from "next"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch via the form or social links.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Contact />
    </div>
  )
}
