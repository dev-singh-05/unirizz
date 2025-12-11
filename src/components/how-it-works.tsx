const steps = [
    {
        number: "01",
        title: "Download the App",
        description: "Get UniRizz on iOS or Android."
    },
    {
        number: "02",
        title: "Verify Identity",
        description: "Use your college email to verify."
    },
    {
        number: "03",
        title: "Join & Rate",
        description: "Join clubs, get rated, start matching."
    },
    {
        number: "04",
        title: "Meet IRL",
        description: "Connect with real people on campus."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-background" id="how-it-works">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How UniRizz Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>

                            {/* Connector Line (Desktop) */}
                            <div className="hidden lg:block absolute top-8 left-[60%] w-[100%] h-[2px] bg-secondary/20 -z-10 last:hidden" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
