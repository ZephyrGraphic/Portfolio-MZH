"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Send, MapPin, Phone, Linkedin, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import BackgroundGrid from "@/components/background-grid"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@mzhaikal.com",
      link: "mailto:contact@mzhaikal.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+62 123 456 7890",
      link: "tel:+6212345678900",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Sukabumi, Indonesia",
      link: "https://maps.google.com/?q=Sukabumi,Indonesia",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/mzhaikal",
      link: "https://github.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mzhaikal",
      link: "https://linkedin.com",
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "Website",
      value: "mzhaikal.com",
      link: "https://example.com",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <BackgroundGrid />
      <CursorEffect />

      <PageTransition>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get in <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-gray-300 max-w-3xl">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Fill out the
              form below or reach out through any of my contact channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-400 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-400 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        required
                        className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-400 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-[150px] bg-gray-900/50 border-cyan-500/30 focus:border-cyan-400 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 rounded-md border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    {submitSuccess && (
                      <div className="p-3 bg-green-900/30 border border-green-500/30 rounded-md text-green-400">
                        Your message has been sent successfully. I'll get back to you soon!
                      </div>
                    )}

                    {submitError && (
                      <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-md text-red-400">
                        There was an error sending your message. Please try again later.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-3 rounded-md hover:bg-cyan-900/10 transition-colors"
                    >
                      <div className="bg-cyan-500/10 p-2 rounded-full text-cyan-400 mr-3">{item.icon}</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{item.title}</h3>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-black/50 border border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-3 rounded-md hover:bg-cyan-900/10 transition-colors"
                    >
                      <div className="bg-cyan-500/10 p-2 rounded-full text-cyan-400 mr-3">{item.icon}</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{item.title}</h3>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}

