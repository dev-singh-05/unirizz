"use client"

import { useEffect } from "react"

export function ScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        }

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active")
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, observerOptions)
        const targets = document.querySelectorAll(".reveal")

        targets.forEach((target) => observer.observe(target))

        return () => observer.disconnect()
    }, [])

    return null
}
