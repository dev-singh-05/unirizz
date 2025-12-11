"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
    {
        id: 0,
        title: "Clubs",
        meta: "Clubs — Join and lead communities, plan events, and own your campus niche.",
        image: "/ui-clubs.png",
    },
    {
        id: 1,
        title: "Ratings",
        meta: "Ratings — See beyond profiles. Give and receive honest, fun, constructive ratings.",
        image: "/ui-ratings.png",
    },
    {
        id: 2,
        title: "Dating",
        meta: "Dating — Match real, meet real. Connect only with people from your campus.",
        image: "/ui-dating.png",
    },
]

export function FeatureCarousel() {
    const [activeSlide, setActiveSlide] = React.useState(0)

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % features.length)
    }

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + features.length) % features.length)
    }

    // Effect to update meta description - purely visual in this component structure
    // The content updates automatically based on activeSlide

    return (
        <section className="py-24 bg-background/50 overflow-hidden" id="features">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 space-y-8 order-2 md:order-1 text-left">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What is UniRizz?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                UniRizz is a campus-exclusive social platform where you join clubs, rate and get rated by your peers, and explore dating with people from your own college. It’s built for real-life connections, not random strangers.
                            </p>
                        </div>

                        {/* Dynamic Meta Box */}
                        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm min-h-[120px] flex items-center transition-all duration-300">
                            <p className="text-xl font-medium text-foreground/90 animate-in fade-in slide-in-from-bottom-2 duration-300 key={activeSlide}">
                                {features[activeSlide].meta}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span>Verified college-only community</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span>Real profiles, real people you can actually meet</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span>No cringe, just campus</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive iPhone Mockup */}
                    <div className="flex-1 order-1 md:order-2 flex justify-center items-center gap-4 sm:gap-8">

                        {/* Left Desktop Arrow */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden md:flex rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>

                        {/* Phone Frame */}
                        <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[620px] bg-black rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10 shrink-0">
                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-zinc-950">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={cn(
                                            "absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center bg-zinc-950",
                                            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                        )}
                                    >
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* iPhone Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20" />
                        </div>

                        {/* Right Desktop Arrow */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden md:flex rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all"
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>

                    </div>

                    {/* Mobile Controls (Below Phone) */}
                    <div className="flex md:hidden gap-4 w-full justify-center order-3 mt-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
