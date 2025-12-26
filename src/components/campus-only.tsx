export function CampusOnly() {
    return (
        <section className="py-24 relative overflow-hidden" id="campus-only">
            {/* Dynamic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#020617] animate-pulse opacity-90" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white reveal">
                    Built For Your Campus, Not The Whole Internet
                </h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-16 reveal">
                    UniRizz is exclusive to verified students. Connect with people you actually see in the hallways, at fests, and in clubs.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        { label: "Campuses", value: "1" },
                        { label: "Students", value: "1k" },
                        { label: "Clubs", value: "10" },
                        { label: "Verified", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 reveal">
                            <span className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
