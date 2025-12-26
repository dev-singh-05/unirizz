import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-border">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Image src="/logo.jpg" alt="UniRizz" width={48} height={48} className="rounded-lg" />
                    <span className="text-2xl font-bold">Uni<span className="text-primary">R</span>izz</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                    <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
                    <Link href="/support" className="hover:text-foreground">Support</Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} UniRizz. Built by students, for students.
                </div>
            </div>
        </footer>
    )
}
