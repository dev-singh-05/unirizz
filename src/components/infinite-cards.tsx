"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
    {
        title: "What is UniRizz?",
        description:
            "UniRizz is a campus-exclusive social platform where you join clubs, rate/get rated, and explore dating. Real connections, not random strangers.",
        image: "/app-mockup.png",
    },
    {
        title: "Dating",
        description:
            "Match real, meet real. Connect only with people from your campus.",
        image: "/ui-dating.png",
    },
    {
        title: "Clubs",
        description:
            "Join and lead communities, plan events, and own your campus niche.",
        image: "/ui-clubs.png",
    },
    {
        title: "Ratings",
        description:
            "See beyond profiles. Give and receive honest, fun, constructive ratings.",
        image: "/ui-ratings.png",
    },
    {
        title: "Campus Snaps",
        description:
            "Fun, ongoing changes in college. From boring labs to fights, share any snap.",
        image: "/app-mockup.png",
    },
];

export function InfiniteCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState([...cards, ...cards, ...cards]); // Tripled for smoother infinite buffer

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || !containerRef.current) return;

        let animationFrameId: number;
        let scrollPos = 0;
        const speed = 3.0; // Increased speed (was 1.6)

        const children = Array.from(scrollContainer.children) as HTMLElement[];
        if (children.length === 0) return;

        // Dynamic Dimensions based on first card
        // Card width + Gap (32px / 2rem)
        const itemWidth = children[0].getBoundingClientRect().width;
        const gap = 32;
        const cardWidth = itemWidth + gap;
        const totalWidth = cards.length * cardWidth;

        const animate = () => {
            if (!scrollContainer || !containerRef.current) return;

            // 1. Move Scroll
            scrollPos += speed;
            if (scrollPos >= totalWidth) {
                scrollPos = 0;
            }
            scrollContainer.style.transform = `translateX(-${scrollPos}px)`;

            // 2. Center Scaling Effect
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2; // Removed +60 offset for better mobile centering

            children.forEach((child) => {
                const childRect = child.getBoundingClientRect();
                const childCenter = childRect.left + childRect.width / 2;
                const distFromCenter = Math.abs(containerCenter - childCenter);

                // Calculate Scale
                // Logic: Main card is clear. Immediate side cards start blurring.
                const maxDist = window.innerWidth < 640 ? 300 : 500; // Tighter focus on mobile
                const scale = Math.max(0.8, 1.1 - (distFromCenter / maxDist) * 0.4);
                const opacity = Math.max(0.7, 1 - (distFromCenter / maxDist) * 1.0); // Clearer side cards

                child.style.transform = `scale(${scale})`;
                child.style.opacity = `${opacity}`;
                child.style.filter = "none"; // Ensure no filter
                child.style.zIndex = scale > 1 ? "10" : "0";
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [items]);

    return (
        <div id="features" className="relative w-full py-12 md:py-20 bg-background overflow-hidden flex flex-col items-center">

            {/* Glow Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Container restricted to show approx 3 cards (350*3 + gaps) */}
            <div ref={containerRef} className="w-full max-w-[1200px] relative z-10 flex items-center justify-center h-[500px] md:h-[600px] mask-gradient">
                <div ref={scrollRef} className="flex gap-8 px-8 w-max">
                    {items.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-[80vw] xs:w-[300px] sm:w-[350px] h-[450px] md:h-[500px] shrink-0 rounded-[30px] border border-white/10 bg-[#0a0a0b] overflow-hidden transition-transform duration-75 ease-linear shadow-2xl group"
                        >
                            {/* Full Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Strong Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            </div>

                            {/* Content Layout (Over Image) */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                                    {card.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-200 leading-relaxed drop-shadow-sm">
                                    {card.description}
                                </p>

                                {/* Decorative Pill */}
                                <div className="pt-6">
                                    <div className="h-1 w-12 rounded-full bg-purple-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
