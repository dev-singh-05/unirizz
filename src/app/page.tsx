import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InfiniteCards } from "@/components/infinite-cards"
import { FeatureGrid } from "@/components/feature-grid"
import { CampusOnly } from "@/components/campus-only"
import { HowItWorks } from "@/components/how-it-works"
import { DownloadCTA } from "@/components/download-cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <InfiniteCards />
      <FeatureGrid />
      <CampusOnly />
      <HowItWorks />
      <DownloadCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
