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
                        <div
                            key={feature.title}
                            className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-card/30 backdrop-blur-md border border-border/50 hover:border-primary/50 hover:scale-105 hover:bg-card/50 transition-all duration-500 shadow-sm hover:shadow-xl group reveal"
                        >
                            <div className="p-4 rounded-3xl bg-primary/10 text-primary mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110">
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
