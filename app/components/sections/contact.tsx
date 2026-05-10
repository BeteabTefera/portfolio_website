"use client"

import { useEffect, useState } from "react"
import emailjs from "emailjs-com"
import { Github, HeartHandshake, Linkedin, Mail } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Contact() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    if (id) emailjs.init(id)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    if (!serviceId || !templateId || !userId) {
      toast.error("Contact form is not configured. Set EmailJS environment variables.")
      return
    }

    emailjs.send(serviceId, templateId, formData, userId).then(
      () => {
        toast.success(
          "Thank you for reaching out — I’ll get back to you soon.",
        )
        setFormData({ name: "", email: "", message: "" })
      },
      (error) => {
        console.error("EmailJS Error:", error)
        toast.error("Could not send your message. Please try again.")
      },
    )
  }

  const labelClass = "text-sm font-medium text-foreground"

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold tracking-tight md:text-4xl">
          <HeartHandshake className="h-9 w-9 text-primary" aria-hidden />
          Let&apos;s chat
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Questions, collaborations, or just saying hello — send a note and I&apos;ll reply when I
          can.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-start">
        <div className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Elsewhere
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40 hover:bg-accent/50",
              )}
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40 hover:bg-accent/50"
            >
              <Mail className="h-6 w-6 text-primary" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40 hover:bg-accent/50"
            >
              <Github className="h-6 w-6 text-primary" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-muted/30 p-8 shadow-inner"
        >
          <div className="space-y-2">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-y bg-background"
            />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-lg sm:w-auto">
            Send message
          </Button>
        </form>
      </div>

      <ToastContainer position="bottom-center" theme="colored" />
    </div>
  )
}
