import { Button } from "@/components/ui/button"

export function DownloadCTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-[#020617] via-primary to-[#020617] text-white text-center relative overflow-hidden">
            {/* Decorative particles/glows could go here */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 reveal">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to take over your campus?</h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12">Be one of the first to bring UniRizz to your college.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-primary hover:bg-white/90 rounded-full shadow-2xl hover:scale-105 transition-all">
                        Google Play
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-white/20 text-white hover:bg-white/10 rounded-full hover:scale-105 transition-all">
                        App Store
                    </Button>
                </div>
            </div>
        </section>
    )
}
