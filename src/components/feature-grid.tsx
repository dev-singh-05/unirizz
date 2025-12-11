import { Users, Star, Heart, Shield } from "lucide-react"

const features = [
    {
        icon: Users,
        title: "Clubs & Communities",
        description: "Create or join clubs, manage events, and bring people together."
    },
    {
        icon: Star,
        title: "See Beyond Profiles",
        description: "Get peer ratings on personality, vibe, and teamwork while keeping things fun and respectful."
    },
    {
        icon: Heart,
        title: "Match Real, Meet Real",
        description: "Match only with people from your college, not random strangers miles away."
    },
    {
        icon: Shield,
        title: "Campus-Only, Verified",
        description: "Access controlled through college verification and in-app moderation."
    }
]

export function FeatureGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Your Campus Needs UniRizz</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The only app designed specifically for the student lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm">
                            <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
