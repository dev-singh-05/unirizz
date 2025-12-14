"use client"

import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft, Mail, MessageCircle, Bug, HelpCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const supportCategories = [
    {
        id: "general",
        icon: HelpCircle,
        title: "General Inquiry",
        description: "Questions about UniRizz, features, or getting started",
    },
    {
        id: "account",
        icon: MessageCircle,
        title: "Account Issues",
        description: "Login problems, verification, or profile concerns",
    },
    {
        id: "bug",
        icon: Bug,
        title: "Report a Bug",
        description: "Found something broken? Let us know",
    },
    {
        id: "feedback",
        icon: Mail,
        title: "Feedback & Suggestions",
        description: "Share your ideas to improve UniRizz",
    },
]

export default function SupportPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const categoryTitle = supportCategories.find(c => c.id === selectedCategory)?.title || "General Inquiry"
        const subject = encodeURIComponent(`[UniRizz ${categoryTitle}] ${formData.subject}`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${categoryTitle}\n\nMessage:\n${formData.message}`
        )

        window.location.href = `mailto:devbaghel7775@gmail.com?subject=${subject}&body=${body}`

        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1000)
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/10 py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/">
                        <Button variant="ghost" className="mb-6 -ml-2 text-foreground/70 hover:text-foreground">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact <span className="text-primary">Support</span>
                    </h1>
                    <p className="text-lg text-foreground/70">
                        We&apos;re here to help! Choose a category and send us a message.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-4 py-16">
                {isSubmitted ? (
                    <div className="text-center py-16">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Email Client Opened!</h2>
                        <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                            Your default email app should have opened with your message. If it didn&apos;t, you can email us directly at{" "}
                            <a href="mailto:devbaghel7775@gmail.com" className="text-primary hover:underline">
                                devbaghel7775@gmail.com
                            </a>
                        </p>
                        <Button onClick={() => { setIsSubmitted(false); setSelectedCategory(null); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                            Send Another Message
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Category Selection */}
                        <div className="mb-12">
                            <h2 className="text-xl font-semibold mb-6">What can we help you with?</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {supportCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`p-6 rounded-xl border text-left transition-all duration-200 ${selectedCategory === category.id
                                                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                                                : "border-border bg-card hover:border-primary/50 hover:bg-card/80"
                                            }`}
                                    >
                                        <category.icon className={`w-8 h-8 mb-3 ${selectedCategory === category.id ? "text-primary" : "text-foreground/60"
                                            }`} />
                                        <h3 className="font-semibold mb-1">{category.title}</h3>
                                        <p className="text-sm text-foreground/60">{category.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        {selectedCategory && (
                            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="john@college.edu"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="Brief description of your issue"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                        placeholder="Tell us more about your issue or question..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin mr-2">⏳</span>
                                            Opening Email...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}

                        {/* Direct Contact Info */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <h3 className="text-lg font-semibold mb-4">Or reach us directly</h3>
                            <div className="p-6 bg-card rounded-xl border border-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/60 mb-1">Email us at</p>
                                        <a
                                            href="mailto:devbaghel7775@gmail.com"
                                            className="text-lg font-medium text-primary hover:underline"
                                        >
                                            devbaghel7775@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-foreground/60">
                                    We typically respond within 24-48 hours during weekdays.
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}
