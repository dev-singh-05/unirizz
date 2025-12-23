import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 items-start text-left">
                        <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            Campus-Exclusive • For Students Only
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Unirizz – Your Entire <span className="text-primary">Campus</span>, In Your Pocket.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                            Discover clubs, rate and get rated by your peers, and match with people you can actually meet in real life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                            <Button size="lg" className="h-14 cursor-pointer px-8 text-lg gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.64 3.98-1.54.91.04 1.72.37 2.31.95-3.8 2.06-2.58 6.47.55 7.9-.53 1.37-1.12 2.76-1.92 4.92zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                App Store
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 cursor-pointer text-lg gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-full">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M5,20.5V3.5C5,2.91 5.34,2.5 5.75,2.5C5.96,2.5 6.17,2.6 6.32,2.79L18.96,12L6.34,21.21C6.18,21.39 5.96,21.5 5.75,21.5C5.34,21.5 5,21.1 5,20.5M7,4.87V19.13L16.8,12L7,4.87M18.82,12L19.5,12.5L20.5,13.25L21.5,14L22.5,14.75L23.5,15.5L18.82,12Z" /> {/* Placeholder path for Google Play triangular shape */}
                                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.2 0 .4.04.58.12l10.5 7.63-2.6 1.89L4.5 3.37C4.2 3.12 3.82 2.97 3.4 3c-.77.05-1.4.67-1.4 1.45v15.1c0 .78.63 1.4 1.4 1.45.42.03.8-.12 1.1-.37l8.48-8.26 2.6 1.89-10.5 7.63c-.18.08-.38.12-.58.12-.83 0-1.5-.67-1.5-1.5z" /> {/* Better generic play triangle */}
                                </svg>
                                Download For Android
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Coming soon to more campuses.</p>
                    </div>

                    {/* Image Content */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Glow effect behind phone */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 blur-3xl rounded-full opacity-60 transform scale-75" />

                        <div className="relative z-10 w-[300px] md:w-[350px] lg:w-[400px]">
                            <Image
                                src="/app-mockup.png"
                                alt="UniRizz App Interface"
                                width={800}
                                height={1600}
                                className="rounded-[2.5rem] shadow-2xl border-8 border-background/50"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
