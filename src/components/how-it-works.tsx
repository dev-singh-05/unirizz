"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
    {
        number: "01",
        title: "Download UniRizz",
        description: "Available on both iOS and Android. Start your campus revolution today.",
        image: "/assets/Downloading-working.png"
    },
    {
        number: "02",
        title: "Set Up Your Profile",
        description: "Complete your college-exclusive profile. Authenticity is key to real connections.",
        image: "/assets/About-app.png"
    },
    {
        number: "03",
        title: "Join Your Campus Clubs",
        description: "Find your tribe. Join existing clubs or lead your own to own your campus niche.",
        image: "/assets/Clubs-Working.png"
    },
    {
        number: "04",
        title: "Rate and Be Rated",
        description: "See beyond the surface. Give and receive honest, fun, and constructive ratings.",
        image: "/assets/ratings-working.png"
    },
    {
        number: "05",
        title: "Discover Campus Dating",
        description: "Match real, meet real. Connect with people from your own college hallway.",
        image: "/assets/Dating-Working.png"
    },
    {
        number: "06",
        title: "Meaningful Interactions",
        description: "Chat and build connections with people you actually see on campus every day.",
        image: "/assets/Dating-Working2.png"
    },
    {
        number: "07",
        title: "Snaps & Campus News",
        description: "Share your moments and stay updated with everything happening on campus.",
        image: "/assets/Snap&News-Working.png"
    }
]

export function HowItWorks() {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState<number | null>(null)
    const [touchEnd, setTouchEnd] = React.useState<number | null>(null)

    // Minimum swipe distance in pixels
    const minSwipeDistance = 50

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextStep()
        } else if (isRightSwipe) {
            prevStep()
        }
    }

    return (
        <section
            className="py-24 bg-background relative overflow-hidden"
            id="how-it-works"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">How UniRizz Works</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Master your campus life in seven simple steps.</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">

                        {/* Image Panel */}
                        <div className="relative aspect-[4/3] rounded-[2rem] bg-card/30 backdrop-blur-md border border-border/50 overflow-hidden shadow-2xl reveal group">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] p-4",
                                        currentStep === index
                                            ? "opacity-100 translate-x-0 scale-100"
                                            : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                                    )}
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner translate-z-0">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, 600px"
                                            priority
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content Panel */}
                        <div className="space-y-8 flex flex-col justify-center text-center lg:text-left reveal">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                {steps.map((_, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "h-1.5 rounded-full transition-all duration-500",
                                            currentStep === index ? "w-8 bg-primary" : "w-3 bg-primary/20"
                                        )}
                                    />
                                ))}
                            </div>

                            <div className="min-h-[200px] space-y-4">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-2">
                                    Step {steps[currentStep].number}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tight transition-all duration-500">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    {steps[currentStep].description}
                                </p>
                            </div>

                            {/* Navigation Controls - Hidden on mobile, Flex on Desktop */}
                            <div className="hidden lg:flex items-center justify-center lg:justify-start gap-6 pt-8">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-14 h-14 rounded-2xl border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
                                    onClick={prevStep}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-14 h-14 rounded-2xl border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
                                    onClick={nextStep}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </Button>
                            </div>

                            {/* Mobile Swipe Hint */}
                            <p className="lg:hidden text-xs text-muted-foreground/50 font-medium uppercase tracking-[0.2em] animate-pulse">
                                Swipe to see more
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
