"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

// Configuration - Update these with your actual values
const APP_CONFIG = {
    // Website URL
    websiteUrl: "/",
}

export default function VerifyPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Trigger entrance animation
        setIsVisible(true)
    }, [])



    const handleGoToWebsite = () => {
        window.location.href = APP_CONFIG.websiteUrl
    }

    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden relative">
            {/* Animated background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/30 blur-[150px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div
                    className={`flex flex-col items-center justify-center text-center gap-8 transition-all duration-1000 ease-out ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                        }`}
                >
                    {/* Logo */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mb-2">
                        <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full" />
                        <Image
                            src="/logo.jpg"
                            alt="UniRizz Logo"
                            width={128}
                            height={128}
                            className="relative z-10 rounded-full shadow-2xl border-4 border-primary/30"
                        />
                    </div>

                    {/* Welcome heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                                UNIRIZZ
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
                            Your email has been verified successfully! 🎉
                        </p>
                    </div>

                    {/* Verification success badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Email Verified
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4">
                        {/* Continue to App Button */}
                        {/* Verification Message */}
                        <div className="flex-1 min-h-14 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl flex items-center justify-center text-center leading-tight">
                            U r verified, and now u can open the app and enjoy!
                        </div>

                        {/* Continue to Website Button */}
                        <Button
                            onClick={handleGoToWebsite}
                            size="lg"
                            variant="outline"
                            className="flex-1 h-14 px-8 text-lg gap-3 border-primary/30 bg-primary/5 hover:bg-primary/10 rounded-full transition-all hover:scale-105"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            Go to Website
                        </Button>
                    </div>


                </div>
            </div>
        </main>
    )
}
