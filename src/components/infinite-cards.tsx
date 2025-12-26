"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
    {
        title: "What is UniRizz?",
        description:
            "UniRizz is a campus-exclusive social platform where you join clubs, rate/get rated, and explore dating. Real connections, not random strangers.",
        image: "/assets/unirizz.png",
    },
    {
        title: "Dating",
        description:
            "Match real, meet real. Connect only with people from your campus.",
        image: "/assets/dating-v2.png",
    },
    {
        title: "Clubs",
        description:
            "Join and lead communities, plan events, and own your campus niche.",
        image: "/assets/club.jpg",
    },
    {
        title: "Ratings",
        description:
            "See beyond profiles. Give and receive honest, fun, constructive ratings.",
        image: "/assets/ratings.png",
    },
    {
        title: "Campus Snaps",
        description:
            "Fun, ongoing changes in college. From boring labs to fights, share any snap.",
        image: "/assets/campus-snap2.png",
    },
];

export function InfiniteCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const duplicatedCards = [...cards, ...cards]; // No state to avoid stale data during hot reload

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const container = containerRef.current;
        if (!scrollContainer || !container) return;

        let animationFrameId: number;
        let scrollPos = 0;
        const isMobile = window.innerWidth < 768;
        const speed = isMobile ? 1.0 : 2.0;

        const children = Array.from(scrollContainer.children) as HTMLElement[];
        if (children.length === 0) return;

        const firstChild = children[0];
        const itemWidth = firstChild.offsetWidth;
        const gap = 32;
        const fullItemWidth = itemWidth + gap;
        const totalScrollWidth = cards.length * fullItemWidth;

        const animate = () => {
            if (!scrollContainer || !container) return;

            scrollPos += speed;
            if (scrollPos >= totalScrollWidth) {
                scrollPos = 0;
            }

            scrollContainer.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;

            const containerCenter = container.offsetWidth / 2;
            const scrollPadding = 32;

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const childHeaderCenter = i * fullItemWidth + itemWidth / 2 + scrollPadding;
                const childPosInContainer = childHeaderCenter - scrollPos;
                const distFromCenter = Math.abs(containerCenter - childPosInContainer);

                if (distFromCenter < 600) {
                    const maxDist = isMobile ? 200 : 500;
                    const scale = Math.max(0.85, 1.1 - (distFromCenter / maxDist) * 0.4);
                    const opacity = Math.max(0.6, 1 - (distFromCenter / maxDist) * 0.9);

                    child.style.transform = `scale3d(${scale}, ${scale}, 1)`;
                    child.style.opacity = `${opacity}`;
                    child.style.zIndex = scale > 1.05 ? "10" : "1";
                } else {
                    child.style.opacity = "0.5";
                    child.style.transform = "scale3d(0.85, 0.85, 1)";
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div id="features" className="relative w-full py-12 md:py-20 bg-background overflow-hidden flex flex-col items-center">

            {/* Glow Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Container restricted to show approx 3 cards */}
            <div ref={containerRef} className="w-full max-w-[1200px] relative z-10 flex items-center h-[500px] md:h-[600px] mask-gradient overflow-hidden">
                <div ref={scrollRef} className="flex gap-8 px-8 w-max will-change-transform">
                    {duplicatedCards.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] sm:w-[350px] h-[450px] md:h-[500px] shrink-0 rounded-[30px] border border-white/10 bg-[#0a0a0b] overflow-hidden shadow-2xl group will-change-transform"
                        >
                            {/* Full Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="350px"
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
