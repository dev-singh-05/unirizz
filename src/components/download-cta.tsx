import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DownloadCTA() {
    return (
        <section id="download" className="py-32 bg-gradient-to-br from-[#020617] via-primary to-[#020617] text-white text-center relative overflow-hidden">
            {/* Decorative particles/glows could go here */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 reveal">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to take over your campus?</h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12">Be one of the first to bring UniRizz to your college.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="https://github.com/dev-singh-05/unirizz-app-android/releases/download/v1.0.3/application-014b156e-8c7c-4666-bd14-0a84af3439bb.apk">
                        <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-primary hover:bg-white/90 rounded-full shadow-2xl hover:scale-105 transition-all">
                            Google Play
                        </Button>
                    </Link>
                    <a href="https://apps.apple.com/in/app/unirizz/id6756393666" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-white/20 text-white hover:bg-white/10 rounded-full hover:scale-105 transition-all">
                            App Store
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
