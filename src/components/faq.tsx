"use client"

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "Is UniRizz only for one college?",
        answer: "Currently we are rolling out campus by campus. You need a valid student verification to join your specific campus community."
    },
    {
        question: "How do you verify students?",
        answer: "We use official college email verification (e.g., .edu or college domain emails) or ID card verification to ensure everyone is a real student."
    },
    {
        question: "Is it free to use?",
        answer: "Yes! UniRizz is widely free for students."
    },
    {
        question: "Is my data safe?",
        answer: "Absolutely. We prioritize student privacy and safety. Your data is encrypted and we do not sell personal data to third parties."
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <section className="py-24 bg-background" id="faq">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">FAQ</h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 reveal",
                                openIndex === index ? "ring-2 ring-primary/20 bg-card" : "hover:bg-muted/30"
                            )}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={cn(openIndex === index && "text-primary transition-colors")}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-primary transition-all rotate-180" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
