export function CampusOnly() {
    return (
        <section className="py-24 bg-primary text-primary-foreground text-center" id="campus-only">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                    Built For Your Campus, Not The Whole Internet
                </h2>
                <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
                    UniRizz is exclusive to verified students. Connect with people you actually see in the hallways, at fests, and in clubs.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-5xl font-bold mb-2">50+</span>
                        <span className="text-sm uppercase tracking-wider opacity-80">Campuses</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-5xl font-bold mb-2">10k+</span>
                        <span className="text-sm uppercase tracking-wider opacity-80">Students</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-5xl font-bold mb-2">500+</span>
                        <span className="text-sm uppercase tracking-wider opacity-80">Clubs</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-5xl font-bold mb-2">100%</span>
                        <span className="text-sm uppercase tracking-wider opacity-80">Verified</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
