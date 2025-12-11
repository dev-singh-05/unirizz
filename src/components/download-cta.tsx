import { Button } from "@/components/ui/button"

export function DownloadCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary via-purple-800 to-accent text-white text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to take over your campus?</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-10">Be one of the first to bring UniRizz to your college.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 rounded-full">
                        Get it on Google Play
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 rounded-full">
                        Download on App Store
                    </Button>
                </div>
            </div>
        </section>
    )
}
